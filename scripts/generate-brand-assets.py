"""
One-off generator for favicon + OG assets (not part of the app runtime).
Uses self-hosted Geist Variable at weight 560.
"""

from __future__ import annotations

import io
import struct
from pathlib import Path

from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
WOFF2 = ROOT / "public" / "fonts" / "GeistVariable.woff2"
FAVICON_DIR = ROOT / "public" / "favicon"
OG_DIR = ROOT / "public" / "og"
TMP = ROOT / ".tmp-asset-gen"

BG = (0x0D, 0x11, 0x10, 255)
SAGE = (0x9C, 0xB0, 0x80, 255)
PRIMARY = (0xF1, 0xF3, 0xEF, 255)


def instantiate(weight: float) -> Path:
    TMP.mkdir(exist_ok=True)
    out = TMP / f"Geist-{int(weight)}.ttf"
    font = TTFont(WOFF2)
    instantiateVariableFont(font, {"wght": weight}, inplace=True, overlap=True)
    # Ensure glyf/cmap usable by Pillow
    font.save(out)
    return out


def load_font(path: Path, size: float) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size=size)


def glyph_height(font: ImageFont.FreeTypeFont, text: str) -> float:
    bbox = font.getbbox(text)
    return bbox[3] - bbox[1]


def make_favicon_png(font_path: Path, size: int, out: Path) -> None:
    # Target S at ~65% of canvas height (within 62–68%)
    # At 16px, bias slightly smaller so the glyph doesn't dominate after AA.
    target_ratio = 0.62 if size <= 16 else 0.65
    target_h = size * target_ratio
    lo, hi = 1.0, float(size * 2)
    best = lo
    for _ in range(40):
        mid = (lo + hi) / 2
        f = load_font(font_path, mid)
        h = glyph_height(f, "S")
        if h < target_h:
            lo = mid
        else:
            hi = mid
        best = mid
    font = load_font(font_path, best)
    img = Image.new("RGBA", (size, size), BG)
    draw = ImageDraw.Draw(img)
    bbox = font.getbbox("S")
    gw, gh = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - gw) / 2 - bbox[0]
    y = (size - gh) / 2 - bbox[1]
    draw.text((x, y), "S", font=font, fill=SAGE)
    img = img.convert("RGB")
    img.save(out, format="PNG", optimize=True)
    print(f"  wrote {out.name} ({size}x{size}), S~{gh/size*100:.1f}%")


def glyph_path_svg(font_path: Path, char: str, canvas: int = 100) -> str:
    """Convert glyph to SVG path centered on a square canvas."""
    font = TTFont(font_path)
    glyf = font["glyf"]
    cmap = font.getBestCmap()
    units = font["head"].unitsPerEm
    gname = cmap[ord(char)]
    g = glyf[gname]
    # Get contours via pen
    from fontTools.pens.svgPathPen import SVGPathPen
    from fontTools.pens.transformPen import TransformPen

    # Target ~65% of canvas
    target = canvas * 0.65
    scale = target / (g.yMax - g.yMin) if (g.yMax - g.yMin) else target / units

    # Center glyph
    gw = (g.xMax - g.xMin) * scale
    gh = (g.yMax - g.yMin) * scale
    tx = (canvas - gw) / 2 - g.xMin * scale
    # SVG y is flipped
    ty = (canvas - gh) / 2 + g.yMax * scale

    pen = SVGPathPen(glyf)
    tpen = TransformPen(pen, (scale, 0, 0, -scale, tx, ty))
    g.draw(tpen, glyf)
    d = pen.getCommands()
    font.close()
    return d


def make_favicon_svg(font_path: Path, out: Path) -> None:
    d = glyph_path_svg(font_path, "S", canvas=100)
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" role="img" aria-label="Simon">
  <rect width="100" height="100" fill="#0D1110"/>
  <path d="{d}" fill="#9CB080"/>
</svg>
'''
    out.write_text(svg, encoding="utf-8")
    print(f"  wrote {out.name}")


def _png_bytes(im: Image.Image) -> bytes:
    buf = io.BytesIO()
    im.save(buf, format="PNG", optimize=True)
    return buf.getvalue()


def write_ico(png_paths: list[Path], out: Path) -> None:
    """Write a true multi-size ICO (PNG-compressed entries)."""
    images = [Image.open(p).convert("RGBA") for p in png_paths]
    entries: list[tuple[int, int, bytes]] = []
    for im in images:
        w, h = im.size
        if w > 256 or h > 256:
            raise ValueError(f"ICO entry too large: {w}x{h}")
        entries.append((w, h, _png_bytes(im)))

    # ICONDIR + ICONDIRENTRY headers, then image data
    header = struct.pack("<HHH", 0, 1, len(entries))
    offset = 6 + 16 * len(entries)
    directory = bytearray()
    blobs: list[bytes] = []
    for w, h, blob in entries:
        directory += struct.pack(
            "<BBBBHHII",
            0 if w == 256 else w,
            0 if h == 256 else h,
            0,  # color palette
            0,  # reserved
            1,  # color planes
            32,  # bit count
            len(blob),
            offset,
        )
        blobs.append(blob)
        offset += len(blob)

    out.write_bytes(header + directory + b"".join(blobs))
    print(f"  wrote {out.name} sizes={[(w, h) for w, h, _ in entries]}")


def make_og(font560: Path, font450: Path, out: Path) -> None:
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG[:3])
    draw = ImageDraw.Draw(img)

    left = 110
    # Upper-middle bias: SIMON around top ~200–280 region
    simon_size = 200
    simon_font = load_font(font560, simon_size)
    # Apply tracking ≈ -0.04em via manual letter spacing
    simon = "SIMON"
    tracking = -0.04 * simon_size
    # Measure with tracking
    xs = []
    x = left
    for i, ch in enumerate(simon):
        xs.append(x)
        adv = simon_font.getlength(ch)
        x += adv + tracking
    # Optical top: place so text block sits upper-middle
    simon_bbox = simon_font.getbbox("S")
    # Cap height approx
    top = 175
    for i, ch in enumerate(simon):
        draw.text((xs[i], top), ch, font=simon_font, fill=PRIMARY[:3])

    # Measure SIMON block bottom
    last_bbox = simon_font.getbbox("N")
    simon_bottom = top + last_bbox[3]

    # Y-Gaming
    yg_size = 32
    yg_font = load_font(font450, yg_size)
    yg = "Y-Gaming"
    yg_top = simon_bottom + 28
    draw.text((left, yg_top), yg, font=yg_font, fill=SAGE[:3])

    yg_bbox = yg_font.getbbox(yg)
    yg_bottom = yg_top + yg_bbox[3]

    # Short sage hairline under Y-Gaming
    line_y = yg_bottom + 22
    line_w = 150
    draw.rectangle([left, line_y, left + line_w, line_y + 2], fill=SAGE[:3])

    # PNG-24 with embedded sRGB ICC profile
    try:
        from PIL import ImageCms

        srgb = ImageCms.createProfile("sRGB")
        icc = ImageCms.ImageCmsProfile(srgb).tobytes()
    except Exception:
        icc = None
    img.save(out, format="PNG", optimize=True, icc_profile=icc)
    print(f"  wrote {out.name} ({W}x{H}) sRGB={'yes' if icc else 'assumed'}")


def verify_ico_sizes(path: Path) -> list[tuple[int, int]]:
    """Parse ICO directory entries for width/height."""
    data = path.read_bytes()
    # ICONDIR
    count = struct.unpack_from("<H", data, 4)[0]
    sizes = []
    for i in range(count):
        off = 6 + i * 16
        w = data[off]
        h = data[off + 1]
        sizes.append((256 if w == 0 else w, 256 if h == 0 else h))
    return sizes


def main() -> None:
    print("Instantiating Geist…")
    f560 = instantiate(560)
    f450 = instantiate(450)

    FAVICON_DIR.mkdir(parents=True, exist_ok=True)
    OG_DIR.mkdir(parents=True, exist_ok=True)

    print("Favicon SVG…")
    make_favicon_svg(f560, FAVICON_DIR / "favicon.svg")

    print("Favicon PNGs…")
    for size, name in [
        (16, "favicon-16x16.png"),
        (32, "favicon-32x32.png"),
        (48, "favicon-48x48.png"),
        (180, "apple-touch-icon.png"),
    ]:
        make_favicon_png(f560, size, FAVICON_DIR / name)

    print("Favicon ICO…")
    write_ico(
        [
            FAVICON_DIR / "favicon-16x16.png",
            FAVICON_DIR / "favicon-32x32.png",
            FAVICON_DIR / "favicon-48x48.png",
        ],
        FAVICON_DIR / "favicon.ico",
    )
    print("  ico entries:", verify_ico_sizes(FAVICON_DIR / "favicon.ico"))

    print("OG image…")
    make_og(f560, f450, OG_DIR / "og-default.png")

    # Remove gitkeep placeholders if present
    for p in [FAVICON_DIR / ".gitkeep", OG_DIR / ".gitkeep"]:
        if p.exists():
            p.unlink()
            print(f"  removed {p}")

    print("Done.")


if __name__ == "__main__":
    main()

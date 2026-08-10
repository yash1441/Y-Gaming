# Y-Gaming Personal Hub — Content Guide

**Version:** 0.1  
**Purpose:** How to structure and maintain site content without inventing personal facts.

Content lives in structured data (`src/data/`), separate from presentation. Updating Simon's life should be a content change, not a redesign.

---

# 1. Identity Labels

| Identity | Role | Where it appears |
|---|---|---|
| **Simon** | The person; primary voice of the site | Hero, About, Explore, Connect, most narrative copy |
| **Y-Gaming** | Gaming & creator brand | Creator section, YouTube/streaming, related socials |
| **Yash Raj Kapoor** | Formal / professional name | Work, resume/CV, formal professional contexts |

Do not collapse these into one label. Connect them naturally; do not over-explain.

Y-Gaming is **not** the umbrella for everything Simon does. The website belongs to Simon.

---

# 2. Privacy Boundary

**Never publish:**

- Relationships
- Family details

The site is personal, not private. Other interests may be included only when they meaningfully support the public version of Simon. When unsure, mark **TBD** and ask.

---

# 3. Content Principles

1. **Do not invent facts.** Unknown details are `TBD`.
2. **Prefer discovery over completeness.** Short, honest entries beat exhaustive biographies.
3. **Keep content living.** Projects, interests, artwork, and “currently exploring” should be easy to add or replace.
4. **Separate content from UI.** Pages render data; they do not hardcode biographies.

---

# 4. Content Modules

Expected data modules (names may match `src/data/`):

| Module | Purpose |
|---|---|
| `profile` | Core identity, short bio, tagline |
| `work` | Professional experience |
| `projects` | Independent and professional builds |
| `interests` | Ongoing hobbies / personality windows |
| `artwork` | Creative pieces (gallery-ready) |
| `creator` | Y-Gaming / creator presence |
| `current` | What Simon is exploring now |
| `socials` | Public links |

---

## Profile

Voice: first person or clear third-person “Simon,” consistent per surface.

Include:

- Display name: Simon
- Formal name (professional contexts): Yash Raj Kapoor
- Short introduction (who he is, not a résumé dump)
- Optional location / availability — **TBD** unless confirmed

Do not invent education, age, location, or personal history.

---

## Work experience

Professional credibility without dominating the site.

Confirmed starting points from product docs:

- Community Manager at BlueStacks (BotLabs)
- Discord bots including Carl-bot and YAGPDB
- Work involving Discord bots for organizations such as NetEase, Tencent, ByteDance

For each role/entry, prefer:

- Organization
- Role / focus
- What Simon actually did
- Dates — **TBD** if unknown
- Links — only confirmed URLs

Use **Yash Raj Kapoor** where formal naming is needed. Narrative framing can still say “Simon.”

---

## Projects

Treat projects as stories when they deserve it—not only name + blurb + GitHub.

Suggested fields:

- `title`
- `description`
- `featured` (boolean)
- `stats` (optional)
- `links`
- `status` (e.g. live, archived) — **TBD** if unknown

Do not invent metrics, tech stacks, or launch dates.

---

## Featured projects

**ValorantRank.Chat** is the flagship featured project.

Confirmed facts only:

- Built and operated by Simon
- Free for users
- More than 11 million uses
- Used by professional Valorant players on their streams

Present as a case study / featured showcase, not a generic card. Additional featured projects require explicit approval and real facts.

---

## Interests

Personality windows, not a checklist.

Potential categories from product docs (include only when content exists):

- Gaming
- Anime
- Music / K-pop
- Movies
- Books
- Art
- Streaming
- Other hobbies

Prefer specific, current glimpses over empty category labels. Unknown favorites = **TBD**.

---

## Artwork

Independent from professional/dev work.

Suggested fields:

- Title
- Medium / year — **TBD** if unknown
- Image asset path
- Short note (optional)
- Alt text (required when published)

Empty gallery is fine for MVP. Do not invent pieces or captions.

---

## Y-Gaming / creator content

Frame as: **Y-Gaming — Simon’s gaming & content brand.**

May include:

- YouTube
- Streaming
- Gaming content
- Other creator activities
- Related channels

Store channel names and URLs only when confirmed. Unconfirmed handles/links = **TBD**.

---

## Current interests

Living “currently exploring” items—not permanent skills.

Example shape from product docs:

- Topic: 3D printing
- Note: Learning how to turn digital ideas into physical things.

Replace freely as interests change. Do not treat this as a static biography field.

---

## Social links

Public platforms and contact points only.

Suggested fields:

- Platform label
- URL
- Optional note (e.g. Y-Gaming vs personal)

Omit private contact channels unless Simon explicitly wants them public. Never invent usernames or URLs.

---

# 5. Maintenance Workflow

1. Edit the relevant file under `src/data/` (or equivalent structured content).
2. Keep types in sync (`src/types/`).
3. Leave presentation components untouched unless layout must change.
4. If a fact is missing, write `TBD` or omit the field—do not guess.
5. For major new content types (blog, timeline, etc.), confirm against product scope first.

---

# 6. Voice

- Primary: Simon’s personal corner of the internet
- Professional pages: clear and credible, not corporate
- Y-Gaming: slightly more energetic, still within the site’s calm visual system
- Avoid résumé-speak and generic portfolio filler (“passionate developer,” “results-driven,” etc.)

---

# 7. Source of Truth

When content questions conflict:

1. `docs/PRODUCT_BRIEF.md` — what belongs on the site and why  
2. This guide — how to structure and maintain it  
3. `docs/DESIGN_SPEC.md` / `docs/TECHNICAL_ARCHITECTURE.md` — presentation and data shape  

If something is not documented, mark it **TBD** and ask Simon. Do not invent requirements or biography.

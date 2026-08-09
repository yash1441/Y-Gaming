# Y-Gaming Personal Hub — Technical Architecture Specification

**Version:** 0.1  
**Domain:** y-gaming.in  
**Hosting:** GitHub Pages  
**Repository:** GitHub  
**Application type:** Static website  
**Framework:** React  
**Build tool:** Vite  
**Language:** TypeScript

---

# 1. Technical Philosophy

The technical architecture should be:

> **Simple enough to understand, structured enough to grow, and predictable enough for AI agents to maintain.**

We don't need:

- A backend
- A database
- Authentication
- Server-side rendering
- An API
- A CMS initially
- Cloud infrastructure
- Microservices
- A complicated state-management system

This is a personal website.

The complexity should exist only where it provides a real benefit.

---

# 2. Technology Stack

### Core

**React**

Used for reusable UI components and page composition.

**Vite**

Used for development and production builds.

**TypeScript**

Used throughout the project.

This gives Cursor stronger information about the structure of our data and components.

### Styling

Use **plain CSS with CSS Modules or a well-structured global CSS system**, rather than Tailwind initially.

The site has a distinctive visual system and isn't going to have hundreds of UI components.

The actual CSS should remain readable:

- Colors
- Typography
- Spacing
- Layout
- Components
- Responsive rules

Reconsider this only if the project genuinely benefits from it.

---

# 3. Repository Structure

Initial structure:

```text
y-gaming/
│
├── .github/
│   ├── workflows/
│   │   └── deploy.yml
│   │
│   └── instructions/
│
├── docs/
│   ├── PRODUCT_BRIEF.md
│   ├── DESIGN_SPEC.md
│   ├── TECHNICAL_ARCHITECTURE.md
│   └── CONTENT_GUIDE.md
│
├── public/
│   ├── favicon/
│   ├── og/
│   └── assets/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
│
├── tests/
│
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

The exact structure can evolve, but **separation of concerns is important**.

---

# 4. Content Architecture

Content should live separately from UI.

For example:

```text
src/data/

profile.ts
work.ts
projects.ts
interests.ts
artwork.ts
socials.ts
creator.ts
current.ts
```

A project could conceptually look like:

```ts
{
  title: "ValorantRank.Chat",
  description: "...",
  featured: true,
  stats: [
    {
      value: "11M+",
      label: "uses"
    }
  ],
  links: {
    website: "..."
  }
}
```

The component shouldn't care **what** the project is.

It should simply know:

> "Here's a project. Render it."

Adding another project later should become a content change rather than a UI-development task.

---

# 5. Type System

Define explicit types for important content.

For example:

- Project
- Experience
- SocialLink
- Interest
- Artwork
- CurrentInterest
- CreatorLink

This gives protection against invalid data and gives Cursor useful context.

---

# 6. Component Architecture

Components should be divided into three rough levels.

### Primitives

Small reusable elements:

- Button
- Link
- Tag
- Icon
- Stat

### Content components

- ProjectCard
- ProjectFeature
- ExperienceItem
- InterestItem
- SocialLink
- ArtworkItem

### Layout components

- Navigation
- Section
- Footer
- PageLayout

This avoids both extremes:

**One giant component**

and

**hundreds of tiny components for everything.**

---

# 7. Pages

The initial MVP can start with:

```text
/
Home

/about
About

/work
Work

/projects
Projects

/projects/valorant-rank
ValorantRank.Chat

/creator
Y-Gaming

/connect
Connect
```

However, we **do not need to build all of these immediately**.

The first implementation milestone should be:

- Home
- About
- Projects
- Work
- Connect

with the remaining pages added once the foundation works.

---

# 8. Routing Decision

Because we're deploying to GitHub Pages, routing needs deliberate handling.

We want clean URLs such as:

```text
y-gaming.in/projects
```

rather than:

```text
y-gaming.in/#/projects
```

Because GitHub Pages is static hosting, direct navigation to a client-side route requires a fallback strategy.

We'll test this specifically before considering routing complete.

An alternative is to use Vite's multi-page/static output approach if that proves cleaner for the final architecture.

**Choose the simplest approach that gives us clean URLs and reliable direct navigation.**

---

# 9. Assets

Assets will be separated into two categories.

### `public/`

Assets that should be available directly:

- favicon
- OG images
- robots.txt
- sitemap
- static metadata

### `src/assets/`

Assets imported by application components:

- artwork
- project screenshots
- profile imagery
- decorative assets

Images should be optimized before being committed.

Avoid dumping huge original photographs into the repository.

---

# 10. Fonts

Use **Geist** as the initial typeface.

Font loading should prioritize performance.

If practical, self-host the required font files rather than relying on an external font request.

---

# 11. Styling Architecture

Establish design tokens early.

Conceptually:

```css
:root {
  --color-background: ...;
  --color-surface: ...;

  --color-text-primary: ...;
  --color-text-secondary: ...;

  --color-accent: #9CB080;
  --color-green: #618764;
  --color-deep-green: #2B5748;

  --space-xs: ...;
  --space-sm: ...;
  --space-md: ...;
  --space-lg: ...;
  --space-xl: ...;

  --radius-sm: ...;
  --radius-md: ...;

  --transition-fast: ...;
  --transition-normal: ...;
}
```

Components should consume these tokens rather than inventing their own values.

---

# 12. Responsive System

Design around three broad states:

- Mobile
- Tablet
- Desktop

Avoid blindly designing around device-specific breakpoints.

The layout should change when the **content needs to change**.

---

# 13. Accessibility

Accessibility is part of implementation.

Requirements include:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible interactive controls
- Alt text
- Reduced motion
- Appropriate contrast
- Proper link semantics
- Sufficient touch targets

We'll include automated accessibility checks in QA where practical.

---

# 14. SEO

The site should have proper metadata from the beginning.

Homepage should have:

- title
- description
- Open Graph metadata
- Twitter/X metadata
- canonical URL

Individual pages should have their own titles and descriptions.

Example:

- Simon — Y-Gaming
- Simon — Projects
- ValorantRank.Chat — Simon
- Simon — Work

Avoid generic titles such as "React App".

---

# 15. Structured Data

We can eventually add appropriate Schema.org structured data.

Potentially:

- Person
- WebSite
- CreativeWork
- SoftwareApplication

This is **not an MVP requirement**.

Only add structured data that accurately represents the content.

---

# 16. GitHub Pages Deployment

Deployment will use **GitHub Actions**.

Basic flow:

```text
Local development
       ↓
Git commit
       ↓
Push to GitHub
       ↓
GitHub Actions
       ↓
npm ci
       ↓
npm run build
       ↓
dist/
       ↓
GitHub Pages
       ↓
y-gaming.in
```

Do **not** manually upload the `dist` folder.

---

# 17. Branching Strategy

Initially:

```text
main
```

is the production branch.

Development can happen through branches such as:

```text
feature/hero
feature/projects
feature/about
fix/mobile-nav
```

For larger changes:

```text
feature/...
      ↓
Pull Request
      ↓
QA
      ↓
Review
      ↓
main
      ↓
Deploy
```

No elaborate GitFlow setup is required.

---

# 18. AI Development Workflow

This project is also our **AI-team experiment**.

Conceptually:

```text
Product
  ↓
Design
  ↓
Architecture
  ↓
Implementation
  ↓
QA
  ↓
Review
  ↓
Deploy
```

### Product Agent

Responsible for:

- Requirements
- Scope
- Feature definitions
- Acceptance criteria

### Designer

Responsible for:

- Visual consistency
- Layout
- UX
- Responsive behavior
- Design system

### Developer

Responsible for:

- Implementation
- Components
- Data
- Integration
- Refactoring

### QA

Responsible for:

- Functional testing
- Responsive testing
- Accessibility
- Edge cases
- Regression testing

### Reviewer

Responsible for:

- Architecture
- Code quality
- Security
- Maintainability
- Performance

These don't necessarily need to be six independent AI models.

**They are roles.**

Cursor can use agents/subagents and persistent project instructions to implement this workflow.

---

# 19. Agent Authority

Agents should have different levels of authority.

### Developer

Can modify project code.

### Designer

Can recommend or modify UI implementation when assigned.

### QA

Should primarily **inspect and report**, rather than silently changing code.

### Reviewer

Should review rather than modify.

### Deployment

Should only happen through the GitHub workflow.

The goal is to prevent an AI agent from casually changing something and immediately deploying it.

---

# 20. Definition of Done

A feature isn't complete simply because:

> "The page looks right."

A feature is complete when:

Requirements satisfied  
+  
Design satisfied  
+  
Implementation complete  
+  
Responsive behavior checked  
+  
Accessibility checked  
+  
Tests pass  
+  
Build succeeds  
+  
Code reviewed

This becomes one of our core development rules.

---

# 21. Testing Strategy

We don't need a giant test suite for a personal website.

### Unit tests

For genuinely testable logic:

- Data transformations
- Utility functions
- Filtering/sorting

### Component tests

For important interactive components.

### Build test

Every production change must successfully run:

```text
npm run build
```

### Visual QA

Inspect:

- Desktop
- Tablet
- Mobile
- Different content lengths
- Missing images
- Long project names
- Long social names

### Manual browser QA

Especially for:

- Navigation
- Links
- Animations
- Responsive layout
- Accessibility

---

# 22. Performance

Priorities:

1. Optimized images
2. Minimal JavaScript
3. Avoid unnecessary dependencies
4. Lazy-load non-critical images
5. Avoid huge animation libraries
6. Avoid unnecessary runtime requests
7. Keep fonts under control

The fact that the website is static should be an advantage.

---

# 23. Security

Because there is no backend, the attack surface is relatively small.

Still:

- No secrets committed to Git
- No API keys in client code
- Dependabot/security updates where appropriate
- Dependencies kept minimal
- External scripts kept to a minimum
- No unnecessary third-party trackers

The website should never require a secret environment variable for normal operation.

---

# 24. Analytics

Analytics are **not required for MVP**.

If eventually added, choose a lightweight privacy-conscious option.

Do not add analytics simply because "every website needs analytics."

---

# 25. Custom Domain

The production domain is:

**`y-gaming.in`**

We'll eventually configure:

```text
y-gaming.in
www.y-gaming.in
```

with one designated canonical version.

GitHub Pages can provide HTTPS for correctly configured custom domains, and HTTPS should be enforced once the certificate is provisioned.

**Do not touch DNS until the site is ready for deployment.**

---

# 26. Environments

Only two environments are initially needed.

### Development

```text
npm run dev
```

### Production

```text
y-gaming.in
```

For previewing production builds locally:

```text
npm run build
npm run preview
```

---

# 27. Dependencies

Adopt a **dependency budget**.

Every dependency should answer:

> "What problem does this solve that we couldn't reasonably solve ourselves?"

Likely initial dependencies:

- react
- react-dom
- vite
- typescript

Add additional libraries only when there is a concrete requirement.

---

# 28. What We Are Deliberately NOT Building

At this stage:

- Backend
- Database
- CMS
- Authentication
- User accounts
- Contact form backend
- Admin panel
- Complex state management
- Analytics
- Comments
- Blog engine
- AI chatbot
- 3D website
- Excessive animation system

Some may be added later.

None should influence the initial architecture.

---

# 29. Initial Repository Documentation

The repository should contain:

```text
README.md
docs/
├── PRODUCT_BRIEF.md
├── DESIGN_SPEC.md
├── TECHNICAL_ARCHITECTURE.md
└── CONTENT_GUIDE.md
```

We'll also eventually have Cursor-specific instructions.

These documents become the **shared memory of the project**.

---

# 30. Technical North Star

> **Build the simplest technically sound static website that can evolve into the personal hub we envision without needing to be rebuilt.**

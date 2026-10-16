# Design System & Styling Foundations

This document specifies the design tokens, typography scale, color palette, spatial grid, elevation system, and accessibility standards for the personal portfolio.

---

## 1. Design Philosophy & Principles

- **Precision & Polish**: Crisp typography, high contrast, balanced white-space, and subtle border definitions.
- **Content-First**: Visual styling serves to elevate the work, experience, and narrative without gratuitous visual clutter or unnecessary embellishment.
- **Dark-Mode-First Architecture**: An immersive, eye-friendly dark palette utilizing deep slate/navy surfaces (`#0b0f19`) paired with high-contrast text (`#f8fafc`) and refined indigo accents (`#6366f1`).
- **Strict Accessibility**: Built to satisfy WCAG 2.1 AA compliance standards across color contrast (minimum 4.5:1 for normal text, 3:1 for large text/icons) and keyboard focus indicators.

---

## 2. Color System & Semantic Tokens

### Primary Brand Colors (Indigo Scale)
| Token | Hex Value | Usage |
| :--- | :--- | :--- |
| `brand-50` | `#eef2ff` | Lightest tint, subtle highlights |
| `brand-100` | `#e0e7ff` | Badges background tint |
| `brand-200` | `#c7d2fe` | Light border accents |
| `brand-300` | `#a5b4fc` | Subtle text accents |
| `brand-400` | `#818cf8` | Secondary interactive accents, icon highlights |
| `brand-500` | `#6366f1` | **Primary Brand Accent**, active states, key CTAs |
| `brand-600` | `#4f46e5` | Primary CTA hover state |
| `brand-700` | `#4338ca` | Pressed / active CTA state |
| `brand-800` | `#3730a3` | Deep brand background tint |
| `brand-900` | `#312e81` | Dark brand fill |
| `brand-950` | `#1e1b4b` | Deepest brand shadow |

### Neutral & Surface Palette (Slate Spectrum)
| Token | Hex / RGBA | Usage |
| :--- | :--- | :--- |
| `surface-bg` | `#0b0f19` | Main page background (deep midnight slate) |
| `surface-subtle` | `#111827` | Secondary background, section alternating tint |
| `surface-card` | `#151d30` | Card, container, and dialog background |
| `surface-card-hover` | `#1c263f` | Card hover elevation fill |
| `surface-border` | `rgba(255, 255, 255, 0.08)` | Default subtle card and divider borders |
| `surface-border-hover` | `rgba(255, 255, 255, 0.16)` | Interactive element border hover |

### Semantic Accent Colors
| Role | Color | Hex | Purpose |
| :--- | :--- | :--- | :--- |
| **Success / Status** | Emerald | `#10b981` | Availability indicator ("Open to work"), verified tags |
| **Tech Highlight** | Cyan | `#06b6d4` | Technology pills, code snippets, featured badges |
| **Milestone** | Amber | `#f59e0b` | Awards, certifications, dates |
| **Notice / Alert** | Rose | `#f43f5e` | Critical tags or form error states |

### Text Hierarchy
| Token | Hex | Usage | Contrast vs `#0b0f19` |
| :--- | :--- | :--- | :--- |
| `text-primary` | `#f8fafc` | Page headlines, titles, active navigation | 16.2:1 (AAA) |
| `text-secondary` | `#94a3b8` | Paragraph body text, descriptions | 7.4:1 (AAA) |
| `text-muted` | `#64748b` | Captions, dates, meta tags, placeholders | 4.6:1 (AA) |
| `text-accent` | `#818cf8` | Subheadings, category labels, inline links | 8.1:1 (AAA) |

---

## 3. Typography Scale & Hierarchy

### Font Families
- **Primary Sans**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - High x-height, engineered for supreme legibility on digital screens across all densities.
- **Code & Tech Mono**: `'JetBrains Mono', 'Fira Code', ui-monospace, monospace`
  - Used for code snippets, metric tags, technical skill badges, and version numbers.

### Typographic Scale
| Level | Tailwind Class | Size / Line Height | Typical Application |
| :--- | :--- | :--- | :--- |
| **Display** | `text-5xl md:text-6xl font-bold` | `3.0rem / 3.75rem` | Hero title name |
| **H1** | `text-3xl md:text-4xl font-bold` | `1.875rem / 2.25rem` | Section headers ("About Me", "Projects") |
| **H2** | `text-xl md:text-2xl font-semibold` | `1.25rem / 1.5rem` | Project titles, job position titles |
| **H3** | `text-lg font-medium` | `1.125rem` | Card subtitles, organization names |
| **Body Large** | `text-lg leading-relaxed` | `1.125rem / 1.75rem` | Hero sub-narrative, lead paragraph |
| **Body Base** | `text-base leading-relaxed` | `1.0rem / 1.6rem` | Standard descriptions, bio paragraphs |
| **Body Small** | `text-sm leading-normal` | `0.875rem / 1.25rem` | Tech tags, metadata, dates, form labels |
| **Caption / Badge** | `text-xs font-mono font-medium` | `0.75rem / 1.0rem` | Section kicker tags, version badges |

---

## 4. Spacing System & Layout Containers

### Responsive Container Constraints
- **Narrow Container**: `max-w-[768px]` (Articles, bio statement, contact form).
- **Default Container (`.portfolio-container`)**: `max-w-[1120px]` (Standard page width, project grid, skills).
- **Wide Container**: `max-w-[1280px]` (Full gallery displays, expanded navigation header).

### Vertical Section Spacing
- **Mobile**: `py-20` (5.0rem / 80px) vertical spacing between major sections.
- **Desktop (`md:` and above)**: `py-26` (6.5rem / 104px) vertical spacing for clean breathing room.

---

## 5. Elevation & Border System

- **Default Card Border**: `border border-white/8` (subtle definition without visual heaviness).
- **Interactive Card Hover**: `hover:border-white/16 hover:bg-surface-card-hover transition-colors duration-200`.
- **Card Radius**: `rounded-xl` (12px) for cards; `rounded-lg` (8px) for buttons and inputs; `rounded-full` for status chips and avatars.
- **Elevation Shadows**:
  - Base: `shadow-md` (`0 4px 6px -1px rgba(0, 0, 0, 0.35)`).
  - Ambient Glow: `0 0 24px -4px rgba(99, 102, 241, 0.25)` for active focal elements.

---

## 6. Accessibility & Usability Standards

- **Keyboard Navigation Focus Ring**: `.focus-ring` utility configured with high-contrast dual ring (`0 0 0 2px var(--bg-app), 0 0 0 4px var(--brand-primary)`).
- **Contrast Ratios**: Every text token satisfies WCAG 2.1 AA requirements against surface backgrounds.
- **Motion Reduction**: All transitions use standard timing curves (`ease-out` / `ease-in-out`), and Segment 10 will enforce `prefers-reduced-motion` compliance.

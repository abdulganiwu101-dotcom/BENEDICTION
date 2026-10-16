# Architecture Blueprint: Modern Personal Portfolio

This document outlines the architectural structure, design decisions, folder hierarchy, and data management strategy for the personal portfolio website.

---

## 1. Selected Technology Stack & Rationale

| Layer | Technology | Version | Rationale |
| :--- | :--- | :--- | :--- |
| **Framework** | **React** | 19.x | Industry standard component-based UI library providing declarative rendering, efficient hooks-based state management, and an ecosystem of robust tools. |
| **Language** | **TypeScript** | 5.x / 7.x | Provides compile-time type safety, clear interface definitions for portfolio data (projects, skills, career history), preventing runtime bugs. |
| **Build Tool** | **Vite** | 8.x | Near-instant hot module replacement (HMR), rapid production bundling, and native ES module support. |
| **Styling** | **Tailwind CSS** | 4.x | High-performance, utility-first CSS framework enabling design token consistency, zero runtime CSS overhead, and clean responsive design. |
| **Icons** | **Lucide React** | 0.546.x | Clean, consistent, tree-shakeable SVG icon set for navigation, technical skills, social profiles, and action triggers. |
| **Motion** | **Motion** | 12.x | High-performance declarative animation library for scroll reveals and tactile micro-interactions (reserved for Segment 10). |

---

## 2. Directory Structure Blueprint

```text
personal-portfolio/
│
├── public/                       # Static assets served at root path
│   ├── images/                   # Profile photos, project screenshots, logos
│   ├── icons/                    # App icons, SVG assets
│   ├── documents/                # Downloadable resume/CV (PDF)
│   ├── favicon/                  # Favicon variants and browser manifest assets
│   └── README.md
│
├── src/                          # Application source code
│   ├── assets/                   # Bundled assets processed by Vite
│   │   ├── images/               # Optimized background images or banners
│   │   ├── icons/                # Bespoke custom SVG assets
│   │   ├── fonts/                # Local typography files (if self-hosted)
│   │   └── README.md
│   │
│   ├── components/               # Reusable atomic & composite UI components
│   │   ├── ui/                   # Buttons, Badges, Cards, Modals, Form inputs
│   │   ├── layout/               # Header, Footer, Container, Grid wrappers
│   │   └── README.md
│   │
│   ├── sections/                 # Main portfolio page sections
│   │   ├── Hero/                 # Intro, headline, quick actions
│   │   ├── About/                # Bio, philosophy, background
│   │   ├── Skills/               # Categorized tech stacks, tools
│   │   ├── Projects/             # Portfolio items, case studies
│   │   ├── Experience/           # Career timeline, achievements
│   │   ├── Contact/              # Contact form, direct links
│   │   └── README.md
│   │
│   ├── pages/                    # Page-level containers (Single Page Portfolio)
│   │   └── README.md
│   │
│   ├── styles/                   # Global style definitions & custom utilities
│   │   └── README.md
│   │
│   ├── data/                     # Content models and typed user datasets
│   │   ├── profile.ts            # Basic info, headline, social links
│   │   ├── projects.ts           # Project catalog, tags, links
│   │   ├── skills.ts             # Technical proficiencies by category
│   │   ├── experience.ts         # Career timeline, roles, achievements
│   │   ├── education.ts          # Academic degrees, certifications
│   │   └── README.md
│   │
│   ├── utils/                    # Helper functions, formatters, validators
│   │   └── README.md
│   │
│   ├── App.tsx                   # Main application root orchestrator
│   ├── main.tsx                  # React DOM bootstrap entry
│   ├── index.css                 # Global CSS and Tailwind entry
│   └── README.md
│
├── docs/                         # Architectural, development & roadmap docs
│   ├── PROJECT_ROADMAP.md        # 12-segment phased development plan
│   ├── DEVELOPMENT_RULES.md      # 18 mandatory development rules
│   └── ARCHITECTURE.md           # Architecture blueprint (this file)
│
├── .gitignore                    # Git tracking exclusions
├── package.json                  # NPM dependencies and scripts
├── tsconfig.json                 # TypeScript compiler configuration
├── vite.config.ts                # Vite build and dev server configuration
└── README.md                     # Root project overview
```

---

## 3. Responsibilities of Main Application Files

- **`index.html`**: Entry HTML document configuring viewport meta tags, web fonts, SEO metadata, and the root DOM mounting node (`<div id="root"></div>`).
- **`src/main.tsx`**: Bootstraps the React 19 application by rendering `<App />` within `createRoot()`.
- **`src/App.tsx`**: The top-level orchestrator that will render the portfolio layout, manage scroll spy navigation state, and assemble sections as they are authorized in future segments.
- **`src/index.css`**: Imports Tailwind CSS (`@import "tailwindcss";`), defining any custom theme variables and base body styles.
- **`vite.config.ts`**: Configures Vite plugins (`@vitejs/plugin-react`, `@tailwindcss/vite`) and path alias (`@/` pointing to project root).
- **`tsconfig.json`**: Enforces modern ES2022 output, strict TypeScript compilation, and path aliases.

---

## 4. Personal Content & Data Organization

To ensure the portfolio is maintainable, scalable, and easy to personalize without risking broken layouts:

1. **Strict Separation of Data and UI**:
   - All personal details, projects, career history, and credentials reside in typed data files inside `src/data/`.
   - Components only accept typed props and render data passed to them.
2. **TypeScript Interfaces**:
   - Each data module defines explicit interfaces (e.g., `ProjectItem`, `ExperienceItem`, `SkillCategory`, `UserProfile`).
3. **No Fabricated Information**:
   - Authentic user data will be introduced when provided by the user in corresponding segments. Placeholder schemas will be strictly typed and flagged.

---

## 5. Key Architectural Decisions & Rationale

1. **Single-Page Application (SPA) with Smooth Section Anchoring**:
   - Personal portfolios offer optimal recruiter and visitor user experience when structured as a cohesive, seamless single page with clear section anchors (`#about`, `#projects`, `#contact`) and responsive navigation.
2. **Modular Section Architecture**:
   - Each section in `src/sections/` is self-contained with its own sub-components, types, and hooks if needed, enabling localized testing and incremental development.
3. **Responsive-First Layout Strategy**:
   - All layouts are designed from small mobile (360px) up to desktop (1440px+) utilizing Tailwind responsive breakpoints (`sm:`, `md:`, `lg:`, `xl:`).
4. **Performance & Accessibility Priority**:
   - Lightweight bundle, semantic landmark tags (`<header>`, `<main>`, `<section>`, `<footer>`), zero render-blocking dependencies, and native browser optimizations.

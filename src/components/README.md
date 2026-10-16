# Reusable Components (`src/components`)

This directory contains reusable, domain-agnostic UI building blocks and layout wrappers.

## Structure:
- `layout/`: Structural layout components
  - `Navbar.tsx`: Responsive navigation header with brand identity, desktop menu, accessible mobile dropdown drawer, and keyboard support (`Escape` handler, ARIA attributes).
  - `Footer.tsx`: Modern, accessible footer with dynamic copyright year, quick navigation links, direct email link, and back-to-top trigger (Segment 10).
  - `BackToTop.tsx`: Floating back-to-top button with scroll detection and `prefers-reduced-motion` compliance (Segment 10).
  - `index.ts`: Barrel export for all layout components.
- `ui/`: (Planned) Primitive components such as buttons, badges, card containers, dialogs/modals, and form inputs.

## Conventions:
- All components use Tailwind CSS tokens and the design system foundations established in Segment 2.
- Components are fully keyboard-navigable and support screen readers with semantic HTML landmarks.

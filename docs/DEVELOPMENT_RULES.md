# Development Rules & Engineering Standards

This document establishes the mandatory rules and engineering principles governing the development of the Personal Portfolio project. All contributors and automated agents must adhere strictly to these rules.

---

## 1. Core Development Rules

1. **Implement only the segment explicitly authorized by the user.**
   - Do not jump ahead or implement future segments proactively.
   - Stay strictly within the scope of the active segment.

2. **Never build multiple segments in one session unless explicitly instructed.**
   - Each segment is developed, reviewed, tested, and approved independently.
   - Wait for explicit user authorization before commencing the next segment.

3. **Preserve completed functionality.**
   - Existing working features, tests, and documentation must not be broken, degraded, or removed when introducing new code.

4. **Inspect existing code before editing it.**
   - Always read and analyze existing files before modifying them to understand context and maintain consistency.

5. **Never delete or replace existing work without permission.**
   - User-created files, architecture, and previous segment deliverables are protected assets.

6. **Never invent personal details, achievements, experience or project outcomes.**
   - All professional credentials, biographical narrative, project names, metrics, and career history must be authentic and verified by the user.
   - Never fabricate realistic-looking fake companies, diplomas, or project achievements.

7. **Ask questions when essential information is missing.**
   - When a required design preference, asset, or credential is unknown, pause and seek clarification from the user rather than guessing.

8. **Keep the code maintainable and appropriately modular.**
   - Organize code into single-responsibility components and modules.
   - Separate data models, presentation logic, and utility functions cleanly.

9. **Avoid unnecessary dependencies.**
   - Rely on native web platform capabilities, React, and Tailwind CSS.
   - Do not install heavy third-party packages when standard solutions suffice.

10. **Consider accessibility, performance, and security from the beginning.**
    - Enforce semantic HTML elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`).
    - Provide clear focus rings, sufficient color contrast, and proper ARIA attributes.
    - Avoid external script injection or unsafe DOM operations.

11. **Test the current segment before declaring it complete.**
    - Run builds and type checks (`compile_applet` / `npm run build`) before submitting work.
    - Validate that changes introduce zero syntax errors, type errors, or runtime crashes.

12. **Report all relevant files created or modified.**
    - At the conclusion of each segment, clearly itemize every file added, edited, or removed.

13. **Identify known issues and unfinished work honestly.**
    - Clearly distinguish between completed tasks, planned tasks, and known limitations.
    - Never obscure bugs or incomplete states.

14. **Never claim that something has been tested if it has not been tested.**
    - Only report tests and validations that were genuinely executed and verified.

15. **Wait for the user’s approval before starting another segment.**
    - Once a segment's deliverables are presented and verified, pause and wait for the user's explicit signal to proceed.

16. **Never expose passwords, API keys, tokens or other secrets.**
    - Sensitive information must never be committed to source control or hardcoded in client-accessible code.
    - Maintain strict `.gitignore` rules for environment variables.

17. **Do not make unrequested changes to the technology stack.**
    - Adhere to the established technology choices (React, Vite, TypeScript, Tailwind CSS) unless the user specifically directs an architectural migration.

18. **Do not fabricate placeholder content that could be mistaken for real personal information.**
    - If placeholder data is temporarily needed for layout verification, label it explicitly as `[Placeholder: User Name]`, `[Placeholder: Degree / University]`, etc., to avoid ambiguity.

---

## 2. Code Quality & Architecture Standards

- **TypeScript Strictness**: Use explicit interfaces and type definitions for all data structures (projects, skills, experiences, testimonials, contact details).
- **Styling Discipline**: Use Tailwind CSS utility classes and design tokens. Avoid ad-hoc inline styles or separate CSS files unless defining global token variables.
- **Component Design**:
  - Keep components modular, self-contained, and reusable.
  - Separate static content definitions (`src/data/`) from UI rendering (`src/components/`, `src/sections/`).
- **Clean Git Hygiene**:
  - Maintain clean commits with conventional commit messages when Git is enabled.
  - Keep the working directory clean and free of leftover scratch files.

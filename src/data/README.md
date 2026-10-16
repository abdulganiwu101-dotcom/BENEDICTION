# Data Models & Content (`src/data`)

This directory is the single source of truth for all content, career metrics, project records, navigation links, and personal profile information displayed throughout the portfolio.

## Implemented Modules:
- `navigation.ts`: Navigation items (`Home`, `About`, `Skills`, `Projects`, `Experience`, `Contact`), planned section anchors, and call-to-action configuration (Segment 3).
- `profile.ts`: User profile data model for Benediction (Computer Science student at Accra Technical University, aspiring developer, headline, location, social links, hero actions) (Segment 4 & 5).
- `about.ts`: Narrative paragraphs, educational journey, 4 mindset and approach pillars, and closing quote for Benediction (Segment 5).
- `skills.ts`: Structured datasets for 4 skill categories: Programming, Web Development, Tools & Workflow, and Technical Foundations (Segment 6).
- `projects.ts`: Structured dataset for 3 verified projects: Kintampo Rural Bank (In Development), Benelodge (Concept), and Hi5 Pub & Grills (Planned) (Segment 7).
- `experience.ts`: Structured dataset for 4 learning and developmental milestones (Building My Foundation, Turning Knowledge into Skills, An Idea for Student Accommodation, Growing into a Software Developer) (Segment 8).
- `contact.ts`: Verified contact data model and communication note for Benediction (Segment 9).

## Development Rules:
- **Never invent or fabricate personal information, company names, or accomplishments.**
- All content populated into this directory must be authentic and verified by the user.
- All data files must export strongly-typed TypeScript interfaces to prevent UI contract breakages.

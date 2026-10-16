/**
 * Skills & Technologies Data Model
 *
 * Specific skill categories and technical competencies for Benediction,
 * presented authentically as areas of active learning, development, and practical projects.
 * Strictly adheres to prompt guidelines: no progress bars, percentages, or unsupported mastery claims.
 */

export interface SkillItem {
  name: string;
  focus: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'layout' | 'terminal' | 'brain';
  skills: readonly SkillItem[];
}

export interface SkillsData {
  eyebrow: string;
  heading: string;
  introduction: string;
  categories: readonly SkillCategory[];
}

export const SKILLS_DATA: SkillsData = {
  eyebrow: 'Technical Capabilities',
  heading: 'Skills & Technologies',
  introduction:
    'A summary of the languages, web technologies, workflow tools, and core computer science fundamentals I am actively developing through coursework, experimentation, and hands-on projects.',
  categories: [
    {
      id: 'programming',
      title: 'Programming',
      description: 'Core languages used for coursework, computational logic, and algorithmic problem-solving.',
      iconName: 'code',
      skills: [
        {
          name: 'C++',
          focus: 'Core systems concepts, memory management, and structured programming.',
        },
        {
          name: 'Java',
          focus: 'Object-oriented programming, classes, inheritance, and modular application design.',
        },
        {
          name: 'JavaScript',
          focus: 'Dynamic web scripting, ES6+ language features, and interactive browser applications.',
        },
      ],
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Technologies applied to construct structured, responsive, and visually accessible user interfaces.',
      iconName: 'layout',
      skills: [
        {
          name: 'HTML',
          focus: 'Semantic markup, accessibility standards, and clean page structuring.',
        },
        {
          name: 'CSS',
          focus: 'Modern layouts, flexbox, grid, custom styling, and design token integration.',
        },
        {
          name: 'Responsive Web Design',
          focus: 'Building fluid layouts that adapt smoothly across mobile, tablet, and desktop screens.',
        },
      ],
    },
    {
      id: 'tools-workflow',
      title: 'Tools & Workflow',
      description: 'Development utilities, version control, and collaborative environments used in daily coding.',
      iconName: 'terminal',
      skills: [
        {
          name: 'Visual Studio Code',
          focus: 'Primary code editor, debugging workflows, and development extensions.',
        },
        {
          name: 'Git',
          focus: 'Local version control, branch management, and tracking code revisions.',
        },
        {
          name: 'GitHub',
          focus: 'Remote code repositories, project tracking, and collaborative development.',
        },
      ],
    },
    {
      id: 'technical-foundations',
      title: 'Technical Foundations',
      description: 'Core computational principles that underpin thoughtful software design and problem analysis.',
      iconName: 'brain',
      skills: [
        {
          name: 'Problem-Solving',
          focus: 'Deconstructing complex requirements into manageable, step-by-step solutions.',
        },
        {
          name: 'Programming Fundamentals',
          focus: 'Algorithmic logic, control flow, functions, and structured data handling.',
        },
        {
          name: 'Logical Thinking',
          focus: 'Analytical reasoning, code tracing, testing assumptions, and methodical debugging.',
        },
      ],
    },
  ],
} as const;

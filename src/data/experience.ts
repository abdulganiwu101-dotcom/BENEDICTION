/**
 * Experience & Learning Journey Data Model
 *
 * Captures Benediction's authentic educational and technical progression.
 * Follows strict prompt guidelines:
 * - Formatted as a growth and learning story rather than traditional corporate employment.
 * - Zero fabricated dates, clients, or certifications.
 * - Benelodge presented strictly as an exploratory concept.
 * - No mention of Kintampo Rural Bank in this section.
 */

export interface MilestoneItem {
  id: string;
  stepNumber: string;
  context: string;
  category: 'Education' | 'Technical Development' | 'Project Exploration' | 'Future Goals';
  title: string;
  description: string;
  icon: 'education' | 'code' | 'concept' | 'ambition';
  tags?: readonly string[];
}

export interface ExperienceData {
  eyebrow: string;
  heading: string;
  introduction: string;
  milestones: readonly MilestoneItem[];
}

export const EXPERIENCE_DATA: ExperienceData = {
  eyebrow: 'Growth & Progression',
  heading: 'Experience & Learning Journey',
  introduction:
    'A reflection of my development as a Computer Science student and aspiring software developer — connecting foundational learning, hands-on coding, product exploration, and future goals.',
  milestones: [
    {
      id: 'foundation',
      stepNumber: '01',
      context: 'My Computer Science Journey',
      category: 'Education',
      title: 'Building My Foundation',
      description:
        'My journey in technology is developing through my Computer Science studies at Accra Technical University. I’m building my understanding of programming, logical thinking, problem-solving, and the fundamentals of software development.',
      icon: 'education',
      tags: ['Accra Technical University', 'Computer Science', 'Foundations'],
    },
    {
      id: 'technical-learning',
      stepNumber: '02',
      context: 'Learning to Code',
      category: 'Technical Development',
      title: 'Turning Knowledge into Skills',
      description:
        'I’m developing my programming and web development skills through learning, practice, and experimentation. I’m exploring languages and tools such as C++, Java, JavaScript, HTML, CSS, Visual Studio Code, Git, and GitHub.',
      icon: 'code',
      tags: ['C++', 'Java', 'JavaScript', 'HTML/CSS', 'Git & GitHub', 'VS Code'],
    },
    {
      id: 'benelodge-exploration',
      stepNumber: '03',
      context: 'Exploring Benelodge',
      category: 'Project Exploration',
      title: 'An Idea for Student Accommodation',
      description:
        'Benelodge is a student accommodation platform concept inspired by the need to make finding suitable student housing more convenient. Exploring this idea gives me an opportunity to think about user needs, digital product design, and how software could address everyday challenges.',
      icon: 'concept',
      tags: ['Product Concept', 'Student Housing', 'User-Centric Design'],
    },
    {
      id: 'road-ahead',
      stepNumber: '04',
      context: 'The Road Ahead',
      category: 'Future Goals',
      title: 'Growing into a Software Developer',
      description:
        'My goal is to continue strengthening my technical abilities, gain practical development experience, and build useful digital solutions. I want to keep learning, challenge myself with meaningful projects, and grow into a developer who can turn ideas into practical products.',
      icon: 'ambition',
      tags: ['Continuous Learning', 'Practical Solutions', 'Professional Growth'],
    },
  ],
} as const;

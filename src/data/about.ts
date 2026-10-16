/**
 * About Me Content & Data Model
 *
 * All biographical narratives, educational journey, and mindset pillars for Benediction.
 * Strictly strictly adheres to verified facts without exaggeration or fabricated credentials.
 */

export interface MindsetPillar {
  title: string;
  description: string;
  icon: 'education' | 'code' | 'entrepreneurship' | 'growth';
}

export interface AboutData {
  eyebrow: string;
  heading: string;
  narrative: readonly string[];
  education: {
    institution: string;
    program: string;
    status: string;
    focus: string;
  };
  mindsetPillars: readonly MindsetPillar[];
  closingQuote: string;
}

export const ABOUT_DATA: AboutData = {
  eyebrow: 'About Benediction',
  heading: 'Beyond Code. Building Possibilities.',
  narrative: [
    "I'm Benediction, a Computer Science student at Accra Technical University with a growing passion for software development, technology, and entrepreneurship.",
    "My journey is driven by curiosity and the desire to turn ideas into practical solutions. I'm exploring how software can solve real-world problems, improve experiences, and create new opportunities.",
    "Through learning, experimentation, and hands-on projects, I'm working to strengthen my technical skills and develop a deeper understanding of how meaningful digital products are built.",
    "I believe growth comes from staying curious, embracing challenges, and being willing to learn from mistakes. Every project is an opportunity to improve, every problem is a chance to think differently, and every new skill brings me closer to the developer I aspire to become.",
    "My vision is to combine technical knowledge with an entrepreneurial mindset to build useful digital solutions and, over time, create products that make a meaningful difference.",
  ],
  education: {
    institution: 'Accra Technical University',
    program: 'Computer Science',
    status: 'Current Student',
    focus: 'Software Development & Computational Problem Solving',
  },
  mindsetPillars: [
    {
      title: 'Curiosity-Driven Learning',
      description:
        'Constantly exploring new concepts in computer science, understanding how underlying systems operate, and turning classroom theory into active understanding.',
      icon: 'education',
    },
    {
      title: 'Hands-On Experimentation',
      description:
        'Believing that genuine mastery is forged by writing code, building practical projects, and learning directly through trial, error, and iteration.',
      icon: 'code',
    },
    {
      title: 'Entrepreneurial Vision',
      description:
        'Looking beyond code syntax to see how digital solutions address real-world challenges, create efficiency, and deliver tangible value.',
      icon: 'entrepreneurship',
    },
    {
      title: 'Resilience & Growth',
      description:
        'Viewing bugs and technical obstacles not as barriers, but as vital opportunities to refine problem-solving skills and grow as an engineer.',
      icon: 'growth',
    },
  ],
  closingQuote:
    "I'm not just learning how technology works. I'm learning how to use it to build what's next.",
} as const;

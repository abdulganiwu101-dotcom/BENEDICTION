/**
 * Projects & Experiments Data Model
 *
 * Defines the three verified projects for Benediction:
 * 1. Kintampo Rural Bank (In Development - Primary Project)
 * 2. Benelodge (Concept - Student Accommodation Platform)
 * 3. Hi5 Pub & Grills (Planned - Business Website)
 *
 * Adheres strictly to prompt rules: honest status labels, no invented links, no fake screenshots.
 */

export type ProjectStatus = 'IN DEVELOPMENT' | 'CONCEPT' | 'PLANNED';

export interface ProjectItem {
  id: string;
  title: string;
  shortName: string;
  category: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  isPrimary?: boolean;
  tags: readonly string[];
  plannedFeatures: readonly string[];
  iconType: 'bank' | 'home' | 'utensils';
}

export interface ProjectsData {
  eyebrow: string;
  heading: string;
  introduction: string;
  projects: readonly ProjectItem[];
}

export const PROJECTS_DATA: ProjectsData = {
  eyebrow: 'Exploration & Practical Work',
  heading: 'Projects & Experiments',
  introduction:
    'I explore ideas and build practical digital solutions as I develop my software development skills. Here is a look at projects currently in progress and concepts under development.',
  projects: [
    {
      id: 'kintampo-rural-bank',
      shortName: 'Kintampo Rural Bank',
      title: 'Kintampo Rural Bank — Digital Banking Platform',
      category: 'Fintech & Web Platform',
      status: 'IN DEVELOPMENT',
      statusLabel: 'In Development',
      isPrimary: true,
      description:
        'A digital banking project exploring a modern online banking experience, with planned features for account management, transfers, cards, savings, and loans.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'API Design'],
      plannedFeatures: [
        'Secure account overview & transaction history',
        'Intuitive transfer & savings workflows',
        'Virtual card management concept',
      ],
      iconType: 'bank',
    },
    {
      id: 'benelodge',
      shortName: 'Benelodge',
      title: 'Benelodge — Student Accommodation Platform',
      category: 'Web Platform Concept',
      status: 'CONCEPT',
      statusLabel: 'Concept',
      isPrimary: false,
      description:
        'A proposed platform concept designed to help students explore hostel and accommodation options and make the search for student housing more convenient.',
      tags: ['Web Design', 'UI/UX Concept', 'Database Schema'],
      plannedFeatures: [
        'Campus-proximate hostel directory',
        'Detailed room specifications & amenities list',
        'Student-friendly inquiry interface',
      ],
      iconType: 'home',
    },
    {
      id: 'hi5-pub-grills',
      shortName: 'Hi5 Pub & Grills',
      title: 'Hi5 Pub & Grills — Business Website',
      category: 'Commercial Hospitality Website',
      status: 'PLANNED',
      statusLabel: 'Planned Project',
      isPrimary: false,
      description:
        'A planned website project focused on creating a modern online presence for a pub and restaurant, with potential features such as menu browsing, enquiries, and reservations.',
      tags: ['Responsive Web', 'Commercial Site', 'Frontend Architecture'],
      plannedFeatures: [
        'Digital interactive food & beverage menu',
        'Direct table inquiry & contact channels',
        'Event highlights & location information',
      ],
      iconType: 'utensils',
    },
  ],
} as const;

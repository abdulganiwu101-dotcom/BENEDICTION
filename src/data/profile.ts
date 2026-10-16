/**
 * Profile & Hero Data Models
 *
 * All personal content is maintained here as a single source of truth.
 * Values use clean, transparent placeholders where specific user credentials
 * have not yet been provided, strictly following Rule 6 and Rule 18.
 */

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email' | 'twitter';
  label: string;
  url: string;
}

export interface HeroAction {
  label: string;
  href: string;
  isPrimary?: boolean;
  isExternal?: boolean;
}

export interface UserProfile {
  name: string;
  title: string;
  headline: string;
  bioSummary: string;
  location: string;
  availability: {
    status: 'available' | 'busy' | 'selective';
    label: string;
  };
  socialLinks: readonly SocialLink[];
  heroActions: readonly HeroAction[];
}

export const USER_PROFILE: UserProfile = {
  name: 'Benediction',
  title: 'Computer Science Student & Aspiring Software Developer',
  headline: 'Exploring technology, problem-solving, and building practical digital solutions.',
  bioSummary:
    'Computer Science student at Accra Technical University with a passion for software development and entrepreneurship. Driven by curiosity and committed to learning through hands-on experimentation.',
  location: 'Accra Technical University, Ghana',
  availability: {
    status: 'available',
    label: 'Open to learning opportunities, internships & collaborations',
  },
  socialLinks: [
    {
      platform: 'github',
      label: 'GitHub Profile',
      url: 'https://github.com',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn Profile',
      url: 'https://linkedin.com',
    },
    {
      platform: 'email',
      label: 'Email Benediction directly',
      url: 'mailto:abdulganiwu101@gmail.com',
    },
  ],
  heroActions: [
    {
      label: 'Explore Projects',
      href: '#projects',
      isPrimary: true,
    },
    {
      label: 'Get in Touch',
      href: '#contact',
      isPrimary: false,
    },
  ],
} as const;

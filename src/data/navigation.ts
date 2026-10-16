/**
 * Navigation Configuration & Data Schema
 *
 * Defines the navigation links and anchors corresponding to the planned portfolio sections.
 * Future segments will implement each corresponding section ID.
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const NAV_CTA = {
  label: "Let's Talk",
  href: '#contact',
} as const;

export const DEFAULT_BRAND_LABEL = 'Benediction';

/**
 * Design System Theme Tokens & Constants
 *
 * Defines design tokens for colors, typography, spacing, breakpoints,
 * and elevation to ensure visual consistency across all portfolio components.
 */

export const THEME_COLORS = {
  brand: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1', // Primary Brand Color (Indigo)
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
    950: '#1e1b4b',
  },
  accent: {
    emerald: '#10b981', // Success, active status, verified
    cyan: '#06b6d4',    // Highlights, tech tags
    amber: '#f59e0b',   // Warnings, milestones
    rose: '#f43f5e',    // Highlights, critical badges
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#0b0f19', // Main background
  },
  surface: {
    bg: '#0b0f19',
    card: '#151d30',
    cardHover: '#1c263f',
    subtle: '#111827',
    border: 'rgba(255, 255, 255, 0.08)',
    borderHover: 'rgba(255, 255, 255, 0.16)',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#94a3b8',
    muted: '#64748b',
    accent: '#818cf8',
  },
} as const;

export const THEME_TYPOGRAPHY = {
  fontFamily: {
    sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace",
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1.15' }],
    '6xl': ['3.75rem', { lineHeight: '1.1' }],
  },
} as const;

export const THEME_CONTAINERS = {
  narrow: '768px',
  default: '1120px',
  wide: '1280px',
} as const;

export const THEME_SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.35), 0 2px 4px -2px rgba(0, 0, 0, 0.25)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.45), 0 4px 6px -4px rgba(0, 0, 0, 0.35)',
  glow: '0 0 24px -4px rgba(99, 102, 241, 0.3)',
} as const;

export type ThemeColors = typeof THEME_COLORS;

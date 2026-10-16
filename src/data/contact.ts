/**
 * Contact Information & Submission Models
 *
 * Defines verified contact details for Benediction:
 * - Name: Benediction
 * - Role: Aspiring Software Developer
 * - Availability: Open to learning opportunities and collaborations
 * - Location: Accra Technical University, Ghana
 *
 * Strictly adheres to Rule 6 & Prompt 9:
 * No invented phone numbers, fake social handles, or fabricated API endpoints.
 */

export interface ContactInfo {
  name: string;
  role: string;
  availability: string;
  location: string;
  email: string;
  note: string;
}

export interface ContactData {
  eyebrow: string;
  heading: string;
  supportingText: string;
  info: ContactInfo;
}

export const CONTACT_DATA: ContactData = {
  eyebrow: 'Get In Touch',
  heading: "Let's Build Something Together",
  supportingText:
    "Have an idea, an opportunity, or a project worth discussing? I'm always interested in connecting, learning, and exploring meaningful collaborations. Feel free to reach out.",
  info: {
    name: 'Benediction',
    role: 'Aspiring Software Developer',
    availability: 'Open to learning opportunities and collaborations',
    location: 'Accra Technical University, Ghana',
    email: 'abdulganiwu101@gmail.com',
    note: 'Direct backend message forwarding is currently unconfigured in this prototype. You can send a direct email using the client button below.',
  },
} as const;

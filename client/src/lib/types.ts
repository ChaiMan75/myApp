// Type definitions for the application

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  date: Date | string;
  location: string;
  imageUrl: string;
  registrationLink: string;
  featured: boolean;
}

export interface GalleryImage {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export interface ImpactStat {
  id: number;
  title: string;
  value: string;
  category: string;
}

export interface SubscriberForm {
  email: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface VolunteerForm {
  name: string;
  email: string;
  phone: string;
  interests: string[];
}

export interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface InitiativeCard {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  icon: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

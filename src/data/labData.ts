import { FeatureCardItem, NavLinkItem, RegionalNode } from '../types';

export const NAV_LINKS: NavLinkItem[] = [
  { id: 'about', label: 'About Us', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'success', label: 'Success Stories', href: '#success' },
  { id: 'news', label: 'News', href: '#news' },
  { id: 'contact', label: 'Contact', href: '#contact', hasDot: true },
];

export const REGIONAL_NODES: RegionalNode[] = [
  { country: 'Egypt', code: 'EGY', flagEmoji: '🇪🇬', centersCount: 35, city: 'Cairo' },
  { country: 'Saudi Arabia', code: 'KSA', flagEmoji: '🇸🇦', centersCount: 28, city: 'Riyadh' },
  { country: 'United Arab Emirates', code: 'UAE', flagEmoji: '🇦🇪', centersCount: 19, city: 'Dubai' },
];

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'presence',
    eyebrow: 'REGIONAL PRESENCE',
    title: 'Regional care and global integration',
    subtext: 'Delivering diagnostic services across Egypt, KSA, and UAE.',
    bgType: 'map',
    badgeLabel: 'Regional Network',
    details: {
      summary: 'Our integrated diagnostic network spans top medical centers across Egypt, Saudi Arabia, and the UAE.',
      highlights: [],
      metrics: []
    }
  },
  {
    id: 'guidance',
    eyebrow: 'EXPERT GUIDANCE',
    title: 'Dedicated medical professionals supporting every implementation.',
    subtext: 'Highly qualified clinical and technical team.',
    bgType: 'photo',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    details: {
      summary: 'Medical specialists providing expert guidance at every stage.',
      highlights: [],
      metrics: []
    }
  },
  {
    id: 'growth',
    eyebrow: 'SUSTAINED GROWTH',
    title: 'Continuous multi-regional expansion over the last 5 years.',
    subtext: 'Rapid expansion in international healthcare hubs.',
    bgType: 'stat',
    statValue: '3.5x',
    details: {
      summary: 'Steady growth in operational and diagnostic capacity.',
      highlights: [],
      metrics: []
    }
  },
  {
    id: 'facilities',
    eyebrow: 'FACILITIES & LOGISTICS',
    title: '1,300 m² of modern infrastructure and logistics capacity.',
    subtext: 'State-of-the-art logistics and cold-chain facilities.',
    bgType: 'photo',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    details: {
      summary: 'Advanced facilities equipped with cutting-edge medical technology.',
      highlights: [],
      metrics: []
    }
  },
  {
    id: 'clients',
    eyebrow: 'TRUSTED CLIENTS',
    title: 'Over 500 laboratories, clinics, and healthcare organizations.',
    subtext: 'Global trust and healthcare partnerships.',
    bgType: 'stat',
    statValue: '500',
    details: {
      summary: 'Trusted by leading healthcare institutions worldwide.',
      highlights: [],
      metrics: []
    }
  }
];

export const HERO_DATA = {
  eyebrow: 'PRECISION DIAGNOSTICS',
  headline: 'Accurate results you can trust.',
  subheadline: 'Innovating international quality in diagnostic care.',
  paragraph: 'We combine cutting-edge technology, automated medical analytics, and expert clinical care to deliver fast, reliable diagnostic results for healthcare providers and patients across the region.',
  ctaText: 'Contact Us',
  heroImageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
};

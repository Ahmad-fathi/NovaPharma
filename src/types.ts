export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
  hasDot?: boolean;
}

export interface RegionalNode {
  country: string;
  code: string;
  flagEmoji: string;
  centersCount: number;
  city: string;
}

export interface FeatureCardItem {
  id: 'presence' | 'guidance' | 'growth' | 'facilities' | 'clients' | string;
  eyebrow: string;
  title: string;
  subtext: string;
  bgType: 'map' | 'photo' | 'stat';
  imageUrl?: string;
  statValue?: string;
  badgeLabel?: string;
  details: {
    summary: string;
    highlights: string[];
    metrics?: { label: string; value: string }[];
  };
}

export interface InquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  testType: string;
  message: string;
  submitted: boolean;
}

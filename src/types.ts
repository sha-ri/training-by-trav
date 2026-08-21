export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Dumbbell' | 'Users' | 'Laptop' | 'Target';
  tag?: string;
  benefits: string[];
  idealFor: string;
  highlightText?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  highlightTag: string;
  rating: number;
  resultMetric?: string;
}

export interface TrainerStat {
  label: string;
  value: string;
  sublabel: string;
}

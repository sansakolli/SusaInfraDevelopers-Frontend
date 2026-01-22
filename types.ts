export interface Venture {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  status: 'Ongoing' | 'Completed';
  highlights: string[];
  amenities: string[];
  mapEmbedUrl?: string; // Optional Google Maps Embed
  price?: string;
  area: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  experience: string;
}
import { Venture, Testimonial, Founder, Service } from './types';
import { ShieldCheck, BrickWall, Ruler, MapPin, TreePine, Droplets, Zap } from 'lucide-react';

export const FOUNDER: Founder = {
  name: "Dileep Kumar",
  role: "Founder & CEO",
  experience: "7+ Years Experience",
  bio: "With a background in M-Pharmacy and over 7 years of dedicated experience in real estate, I founded SUSA Infra Developers with a vision to provide litigation-free, high-quality plots and construction services to families in Vizianagaram. (మధ్యతరగతి కుటుంబాల సొంతింటి కలను నిజం చేయడమే నా లక్ష్యం)",
  image: "./assets/founder-silhouette.png"
};

export const CONTACT_INFO = {
  phone: "70364 60191",
  email: "susainfradevelopers@gmail.com",
  address: "Opp. Venkateswara Swamy Temple Arch, Ring Road, Vizianagaram - 535002",
  whatsappMessage: "I am interested in a plot enquiry."
};

export const VENTURES: Venture[] = [
  {
    id: "ocean-city",
    title: "Ocean City (ఓషన్ సిటీ)",
    location: "Bhogapuram (Nadipalli Village)",
    status: "Ongoing",
    description: "A premium layout located near the upcoming international airport region. Perfect for investment and future housing. (భోగాపురం విమానాశ్రయం దగ్గరలో)",
    area: "25 Acres",
    image: "./assets/ocean-city.png",
    highlights: ["Near Beach Resort (బీచ్ రిసార్ట్ దగ్గర)", "Close to National Highway (జాతీయ రహదారికి దగ్గర)", "Airport Zone (ఎయిర్ పోర్ట్ జోన్)"],
    amenities: ["Park", "Drainage System", "Electricity", "40ft Black Top Roads", "Avenue Plantation"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: "smart-city",
    title: "Smart City (స్మార్ట్ సిటీ)",
    location: "Vizianagaram Outskirts",
    status: "Ongoing",
    description: "An intelligent community design focusing on modern living standards with high appreciation potential. (అద్భుతమైన సౌకర్యాలతో ఆధునిక కమ్యూనిటీ)",
    area: "15 Acres",
    image: "./assets/smart-city.png",
    highlights: ["Gated Community Feel (వ్యూహాత్మక ప్రదేశం)", "Spot Registration (స్పాట్ రిజిస్ట్రేషన్)", "Vaastu Compliant (100% వాస్తు)"],
    amenities: ["Children's Park", "Street Lights", "Water Facility", "Compound Wall"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=..."
  },
  {
    id: "green-meadows",
    title: "Green Meadows (గ్రీన్ మెడోస్)",
    location: "Ring Road Vicinity",
    status: "Completed",
    description: "Successfully completed project with over 100 happy families. (100+ కుటుంబాలతో విజయవంతంగా పూర్తయిన వెంచర్)",
    area: "10 Acres",
    image: "./assets/green-meadows.png",
    highlights: ["Sold Out (అమ్మకం పూర్తయింది)", "High Appreciation (అధిక విలువ)", "Residential Zone (నివాస ప్రాంతం)"],
    amenities: ["All Basic Amenities"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Srinivas Rao",
    role: "Government Employee",
    content: "Buying a plot in Ocean City was the best decision. The registration process was smooth and Dileep garu was very transparent about documents.",
    image: "https://picsum.photos/id/1012/100/100"
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    role: "Home Maker",
    content: "SUSA Infra helped us build our dream home in Vuda Colony. Their own bricks quality is amazing.",
    image: "https://picsum.photos/id/338/100/100"
  }
];

export const SERVICES = [
  {
    title: "Own Brick Manufacturing",
    description: "We use our own high-quality bricks to ensure the strength of your home.",
    icon: "BrickWall"
  },
  {
    title: "Construction Packages",
    description: "Affordable construction packages charged per sft with transparent pricing.",
    icon: "Ruler"
  },
  {
    title: "Litigation Free",
    description: "100% Clear Title and Spot Registration guarantee.",
    icon: "ShieldCheck"
  }
];
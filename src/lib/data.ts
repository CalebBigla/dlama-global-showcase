import ceoPhoto from "../assets/CEO.jpg";

export type Property = {
  id: string;
  name: string;
  location: string;
  country: string;
  price: number;
  originalPrice?: number;
  currency: string;
  status: "For Sale" | "For Rent" | "Pre-Sale";
  type: "Villa" | "Penthouse" | "Estate" | "Apartment" | "Townhouse" | "Plot";
  beds?: number;
  baths?: number;
  sqft?: number;
  plotSize?: string;
  paymentPlan?: string;
  badge?: string;
  image: string;
  gallery: string[];
  agentId: string;
  featured?: boolean;
  description: string;
  features: string[];
};

const u = (id: string, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  villa: u("photo-1600585154340-be6161a56a0c"),
  villa2: u("photo-1613490493576-7fde63acd811"),
  villa3: u("photo-1600596542815-ffad4c1539a9"),
  interior: u("photo-1600607687939-ce8a6c25118c"),
  interior2: u("photo-1600566753190-17f0baa2a6c3"),
  interior3: u("photo-1600210492486-724fe5c67fb0"),
  penthouse: u("photo-1512917774080-9991f1c4c750"),
  pool: u("photo-1600047509807-ba8f99d2cdde"),
  dubai: u("photo-1512453979798-5ea266f8880c"),
  london: u("photo-1533929736458-ca588d08c8be"),
  paris: u("photo-1502602898657-3e91760cbb34"),
  newyork: u("photo-1449824913935-59a10b8d2000"),
  lagos: u("photo-1568742049106-1ac4bcbd0a1e"),
  geneva: u("photo-1527004013197-933c4bb611b3"),
};

export const properties: Property[] = [
  {
    id: "parkview-estate-50x100",
    name: "Parkview Estate - 50×100",
    location: "Behind NNPC Depot, Numan Road, Yola",
    country: "Nigeria",
    price: 800000,
    originalPrice: 1000000,
    currency: "₦",
    status: "For Sale",
    type: "Plot",
    plotSize: "50×100",
    paymentPlan: "4 months",
    image: IMAGES.villa,
    gallery: [IMAGES.villa, IMAGES.interior, IMAGES.pool, IMAGES.interior2],
    agentId: "dlama-ceo",
    featured: true,
    description:
      "Prime residential plot in Parkview Estate, strategically located behind NNPC Depot on Numan Road. This estate offers excellent access to major roads and urban amenities with flexible payment plans.",
    features: [
      "Secure estate with perimeter fencing",
      "Good road network",
      "Close to NNPC Depot",
      "Easy access to Numan Road",
      "Residential neighborhood",
      "4-month flexible payment plan",
    ],
  },
  {
    id: "parkview-estate-100x100",
    name: "Parkview Estate - 100×100",
    location: "Behind NNPC Depot, Numan Road, Yola",
    country: "Nigeria",
    price: 1600000,
    originalPrice: 2000000,
    currency: "₦",
    status: "For Sale",
    type: "Plot",
    plotSize: "100×100",
    paymentPlan: "4 months",
    image: IMAGES.villa2,
    gallery: [IMAGES.villa2, IMAGES.interior, IMAGES.pool, IMAGES.interior2],
    agentId: "dlama-ceo",
    featured: true,
    description:
      "Spacious 100×100 plot in the prestigious Parkview Estate. Perfect for building your dream home with ample space for gardens, parking, and modern amenities.",
    features: [
      "Large plot size ideal for family homes",
      "Secure estate with perimeter fencing",
      "Good road network",
      "Close to NNPC Depot",
      "Easy access to Numan Road",
      "4-month flexible payment plan",
    ],
  },
  {
    id: "new-city-estate-50x100",
    name: "New City Estate - 50×100",
    location: "Federal Housing Estate, behind Zamaki Academy",
    country: "Nigeria",
    price: 1200000,
    originalPrice: 1500000,
    currency: "₦",
    status: "Pre-Sale",
    type: "Plot",
    plotSize: "50×100",
    paymentPlan: "3 months",
    image: IMAGES.interior3,
    gallery: [IMAGES.interior3, IMAGES.villa, IMAGES.interior, IMAGES.pool],
    agentId: "dlama-ceo",
    featured: true,
    description:
      "Exciting pre-sale opportunity in New City Estate, located in the growing Federal Housing Estate area behind Zamaki Academy. Secure your plot now at discounted rates.",
    features: [
      "Pre-sale discount pricing",
      "Prime location near Zamaki Academy",
      "Planned infrastructure",
      "Growing residential area",
      "Easy access to Federal Housing Estate",
      "3-month flexible payment plan",
    ],
  },
  {
    id: "new-city-estate-100x100",
    name: "New City Estate - 100×100",
    location: "Federal Housing Estate, behind Zamaki Academy",
    country: "Nigeria",
    price: 2400000,
    originalPrice: 3000000,
    currency: "₦",
    status: "Pre-Sale",
    type: "Plot",
    plotSize: "100×100",
    paymentPlan: "3 months",
    badge: "Best Value",
    image: IMAGES.penthouse,
    gallery: [IMAGES.penthouse, IMAGES.interior3, IMAGES.villa2, IMAGES.interior],
    agentId: "dlama-ceo",
    featured: true,
    description:
      "Premium 100×100 plot in New City Estate pre-sale. Ideal for investors and homeowners looking to build in a rapidly developing area with excellent potential for appreciation.",
    features: [
      "Pre-sale discount pricing",
      "Large plot size",
      "Prime location near Zamaki Academy",
      "Planned infrastructure",
      "Growing residential area",
      "3-month flexible payment plan",
    ],
  },
  {
    id: "hossana-estate-50x100",
    name: "Hossana Estate Land - 50×100",
    location: "1km behind Fintiri 1000 Housing Estate, Jankasa, Yola South",
    country: "Nigeria",
    price: 1100000,
    originalPrice: 1400000,
    currency: "₦",
    status: "For Sale",
    type: "Plot",
    plotSize: "50×100",
    paymentPlan: "3-6 months",
    badge: "C of O - Buy & Build",
    image: IMAGES.villa3,
    gallery: [IMAGES.villa3, IMAGES.interior2, IMAGES.pool, IMAGES.interior],
    agentId: "dlama-ceo",
    featured: true,
    description:
      "Secure your future in Hossana Estate with genuine Certificate of Occupancy. Located just 1km behind the prestigious Fintiri 1000 Housing Estate in Jankasa, Yola South. Buy and build with confidence.",
    features: [
      "Certificate of Occupancy included",
      "Near Fintiri 1000 Housing Estate",
      "Yola South location",
      "Flexible 3-6 month payment plan",
      "Verified land title",
      "Ready for immediate development",
    ],
  },
  {
    id: "hossana-estate-100x100",
    name: "Hossana Estate Land - 100×100",
    location: "1km behind Fintiri 1000 Housing Estate, Jankasa, Yola South",
    country: "Nigeria",
    price: 2200000,
    originalPrice: 2400000,
    currency: "₦",
    status: "For Sale",
    type: "Plot",
    plotSize: "100×100",
    paymentPlan: "3-6 months",
    badge: "C of O - Buy & Build",
    image: IMAGES.pool,
    gallery: [IMAGES.pool, IMAGES.villa2, IMAGES.interior3, IMAGES.villa],
    agentId: "dlama-ceo",
    featured: true,
    description:
      "Premium 100×100 plot in Hossana Estate with full Certificate of Occupancy. Perfect for those seeking spacious land in a secured, titled estate in Yola South. Investment-grade property with flexible payment terms.",
    features: [
      "Certificate of Occupancy included",
      "Large 100×100 plot",
      "Near Fintiri 1000 Housing Estate",
      "Yola South location",
      "Flexible 3-6 month payment plan",
      "Verified land title",
    ],
  },
];

export const agents = [
  {
    id: "dlama-ceo",
    name: "Dlama Haruna Kwaji",
    title: "MD/CEO",
    region: "Adamawa State",
    specialties: ["Real Estate Development", "Land Investment", "Property Advisory"],
    photo: ceoPhoto,
    bio: "As the Managing Director and CEO of Dlama Global Homes, Dlama Haruna Kwaji brings a vision of making land ownership accessible to every Nigerian family. Founded in 2026, the company has quickly become a trusted name in Adamawa State for transparent land transactions, flexible payment solutions, and verified property documentation.",
    email: "info@dlamaglobalhomes.com",
    phone: "08060774472",
  },
];

export const testimonials = [
  {
    quote:
      "Dlama Global Homes made buying land in Yola so easy. The payment plan was flexible, and they guided us through every step. We now own our plot in Parkview Estate!",
    name: "Musa & Aisha Ibrahim",
    role: "Purchased in Parkview Estate",
    photo: u("photo-1544005313-94ddf0286df2", 400),
    rating: 5,
  },
  {
    quote:
      "I was skeptical about land investment, but Dlama Global Homes provided all the documentation and transparency I needed. The C of O process was smooth and professional.",
    name: "Engr. David Audu",
    role: "Purchased in Hossana Estate",
    photo: u("photo-1519085360753-af0119f7cbe7", 400),
    rating: 5,
  },
  {
    quote:
      "Best decision we made was securing our plot during the pre-sale. The discount was real, and now the estate is developing beautifully. Thank you, Dlama team!",
    name: "Mrs. Grace Yakubu",
    role: "Purchased in New City Estate",
    photo: u("photo-1580489944761-15a19d654956", 400),
    rating: 5,
  },
];

export const articles = [
  {
    id: "yola-real-estate-2026",
    title: "Yola Real Estate: Why Now is the Time to Invest",
    category: "Market Trends",
    excerpt:
      "Adamawa State's capital is experiencing steady growth in residential development. Learn why smart investors are securing land plots now before prices rise further.",
    readTime: "6 min read",
    date: "August 2026",
    image: IMAGES.villa,
    featured: true,
  },
  {
    id: "payment-plans-guide",
    title: "Understanding Flexible Payment Plans for Land Purchase",
    category: "Buying Guides",
    excerpt:
      "Not ready to pay the full amount upfront? Our guide explains how flexible payment plans work and how to choose the right option for your budget.",
    readTime: "5 min read",
    date: "July 2026",
    image: IMAGES.interior2,
  },
  {
    id: "c-of-o-explained",
    title: "Certificate of Occupancy (C of O): What You Need to Know",
    category: "Buying Guides",
    excerpt:
      "Understanding land documentation is crucial for property buyers. We break down what a C of O means and why it protects your investment.",
    readTime: "7 min read",
    date: "July 2026",
    image: IMAGES.interior,
  },
  {
    id: "choosing-plot-size",
    title: "50×100 or 100×100: Choosing the Right Plot Size",
    category: "Lifestyle",
    excerpt:
      "The size of your plot determines what you can build and how your property will appreciate. Learn which size fits your needs and budget.",
    readTime: "4 min read",
    date: "June 2026",
    image: IMAGES.villa3,
  },
  {
    id: "estate-development-jimeta",
    title: "Estate Development in Jimeta: Areas to Watch",
    category: "Market Trends",
    excerpt:
      "From Numan Road to Federal Housing Estate areas, we explore the fastest-growing residential zones in Jimeta and Yola South.",
    readTime: "8 min read",
    date: "June 2026",
    image: IMAGES.pool,
  },
  {
    id: "first-time-land-buyer",
    title: "First-Time Land Buyer's Checklist",
    category: "Buying Guides",
    excerpt:
      "Buying your first plot of land? Here's everything you need to verify, from location to documentation, before making your investment.",
    readTime: "5 min read",
    date: "May 2026",
    image: IMAGES.villa2,
  },
];

export const locations = [
  { name: "Parkview Estate", country: "Numan Road, Yola", listings: 12, image: IMAGES.villa },
  { name: "New City Estate", country: "Federal Housing, Jimeta", listings: 18, image: IMAGES.penthouse },
  { name: "Hossana Estate", country: "Jankasa, Yola South", listings: 15, image: IMAGES.villa3 },
  { name: "Jimeta Central", country: "Jimeta, Yola", listings: 8, image: IMAGES.interior },
  { name: "Yola South", country: "Yola South LGA", listings: 10, image: IMAGES.pool },
  { name: "Numan Road Corridor", country: "Yola", listings: 6, image: IMAGES.villa2 },
];

export const formatPrice = (p: Property) => {
  const formatAmount = (amount: number) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    }
    return amount.toLocaleString();
  };

  return p.status === "For Rent"
    ? `${p.currency}${formatAmount(p.price)} / mo`
    : `${p.currency}${formatAmount(p.price)}`;
};

export const formatFullPrice = (p: Property) =>
  p.status === "For Rent"
    ? `${p.currency}${p.price.toLocaleString()} / mo`
    : `${p.currency}${p.price.toLocaleString()}`;

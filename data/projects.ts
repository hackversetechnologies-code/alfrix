export type Project = {
  slug: string;
  title: string;
  category: "Websites" | "Mobile Applications" | "Web Applications";
  summary: string;
  url?: string;
  adminUrl?: string;
  kind: string;
  image: string;
  verified: boolean;
  tags: string[];
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "nayas-kitchen",
    title: "Naya's Kitchen",
    category: "Web Applications",
    summary:
      "Nigerian restaurant platform with online food ordering for pickup or delivery in Emene, interactive menu system, and dedicated administrative management portal.",
    url: "https://nayaskitchen.netlify.app",
    adminUrl: "https://nayaskitchen.netlify.app/admin",
    kind: "Web Application & Ordering",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["React", "Next.js", "Online Ordering", "Admin Portal"],
    features: [
      "Dynamic interactive menu with instant search and categorisation",
      "Cart and checkout system for rapid local pickup and delivery orders",
      "Secure administrative back-office to update dishes and manage incoming tickets",
    ],
  },
  {
    slug: "itus-global-construction",
    title: "Itus Global Construction Nig Ltd",
    category: "Websites",
    summary:
      "Corporate digital presence for a building construction, civil engineering, and interior finishing firm in Abakaliki, featuring service showcases and administrative content controls.",
    url: "https://itus-global-construction-nig-ltd.netlify.app",
    adminUrl: "https://itus-global-construction-nig-ltd.netlify.app/admin",
    kind: "Corporate Website & Admin",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Corporate Engineering", "Portfolio", "Content Admin"],
    features: [
      "Comprehensive architectural and structural capability showcases",
      "Project gallery illustrating civil engineering works and completions",
      "Administrative panel to manage corporate updates and announcements",
    ],
  },
  {
    slug: "rose-and-co-salon",
    title: "Rose & Co Salon",
    category: "Websites",
    summary:
      "Premium beauty salon and wellness sanctuary featuring hair styling portfolios, spa treatment catalogues, price tiers, and appointment booking.",
    url: "https://roseandcosalon.netlify.app/",
    kind: "Beauty & Spa Website",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Beauty & Wellness", "Appointment Booking", "Mobile Responsive"],
    features: [
      "Curated beauty service catalogue with clear pricing and duration",
      "Stylist portfolio showcases and client transformation galleries",
      "Seamless inquiry and appointment scheduling flows",
    ],
  },
  {
    slug: "nami-bakehouse",
    title: "Nami Bakehouse",
    category: "Websites",
    summary:
      "Artisan bakery and gourmet patisserie website highlighting artisanal breads, custom celebration cakes, seasonal pastries, and pre-order requests.",
    url: "https://namibakehouse.netlify.app/",
    kind: "Bakery & Culinary Website",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Bakery & Cafe", "Product Catalog", "Order Inquiry"],
    features: [
      "Artisanal bakes menu showcasing sourdoughs, pastries, and sweets",
      "Custom cake celebration inquiry system with flavour selection",
      "Responsive, warm visual presentation optimized for food enthusiasts",
    ],
  },
  {
    slug: "eaglefresh-properties",
    title: "Eaglefresh Properties Limited",
    category: "Websites",
    summary:
      "Real estate and property management platform facilitating property sales, land acquisition, leasing, and verified architectural investment concepts.",
    url: "https://eaglefreshproperties.netlify.app",
    kind: "Real Estate Platform",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Real Estate", "Property Listings", "Investment"],
    features: [
      "Filterable property catalogue with detailed architectural specifications",
      "Inquiry and consultation funnel for prime property acquisitions",
      "Responsive layout designed for high-resolution property imagery",
    ],
  },
  {
    slug: "ikegwuru",
    title: "Ikegwuru — Kwechiri",
    category: "Websites",
    summary:
      "E-commerce lifestyle and fashion storefront rooted in the Kwechiri philosophy — crafting durable apparel and modern cultural expression.",
    url: "https://ikegwuru.vercel.app",
    kind: "E-Commerce & Fashion",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["E-Commerce", "Fashion Brand", "Next.js"],
    features: [
      "Editorial product showcase highlighting collection craftsmanship",
      "Streamlined shopping experience tailored for modern fashion audiences",
      "Expressive dark-aesthetic branding aligned with the Kwechiri identity",
    ],
  },
  {
    slug: "touch-diagnostica",
    title: "Touch Diagnostica Ltd",
    category: "Websites",
    summary:
      "Medical diagnostic laboratory website presenting clinical services, infectious disease screening, molecular TB testing, blood banking, and health check packages.",
    url: "https://touchdiagnosticaai.netlify.app",
    kind: "Healthcare & Diagnostics",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["HealthTech", "Diagnostics", "Clinical Lab"],
    features: [
      "Comprehensive diagnostic test directory and patient guidelines",
      "Appointment and sample collection inquiry workflow",
      "Clean, reassuring healthcare presentation building patient trust",
    ],
  },
  {
    slug: "rhaina-cosmetics",
    title: "Rhaina Cosmetics",
    category: "Websites",
    summary:
      "Beauty retail and cosmetics boutique platform covering skincare, premium cosmetics, fragrances, spa therapies, and professional beauty training programmes.",
    url: "https://rhainacosmetics.netlify.app",
    kind: "Beauty & Training Portal",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Beauty Store", "Training Academy", "Skincare"],
    features: [
      "Curated multi-category product lines and skincare routines",
      "Registration for academy beauty masterclasses and workshops",
      "Integrated social proof and product discovery pathways",
    ],
  },
  {
    slug: "kitchen-royale",
    title: "Kitchen Royale",
    category: "Websites",
    summary:
      "Hospitality website for a restaurant & bakery in Abakaliki serving Nigerian delicacies, continental dishes, fresh confectionery, and table reservations.",
    url: "https://kitchenroyale.netlify.app",
    kind: "Restaurant & Bakery",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Hospitality", "Restaurant", "Table Booking"],
    features: [
      "Illustrated food menu with continental and authentic African cuisines",
      "Table reservation and event catering inquiry flows",
      "Mobile-optimized ordering experience for local clientele",
    ],
  },
  {
    slug: "winny-bakes-creams",
    title: "Winny Bakes & Creams",
    category: "Websites",
    summary:
      "Custom confectionery and catering website offering bespoke celebration cakes, ice cream, artisan pizzas, and finger foods with online pickup ordering.",
    url: "https://winnybakery.netlify.app",
    kind: "Confectionery & Bakery",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Catering", "Custom Cakes", "Online Pickup"],
    features: [
      "Custom cake builder and celebration order requests",
      "Live catalogue of pastries, pizzas, and dessert assortments",
      "Direct pickup scheduling for customers",
    ],
  },
  {
    slug: "nlm-autos",
    title: "NLM Autos",
    category: "Websites",
    summary:
      "Automotive dealership portal showcasing verified vehicle inventory, vehicle inspection metrics, and customer acquisition financing options.",
    url: "https://nlmautos.netlify.app",
    kind: "Automotive Portal",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Automotive", "Vehicle Inventory", "Dealership"],
    features: [
      "Searchable vehicle showroom with performance and condition specs",
      "Financing consultation and test-drive booking requests",
      "Fast car inspection reports and verified ownership badges",
    ],
  },
  {
    slug: "everlasting-schools",
    title: "Everlasting Schools",
    category: "Websites",
    summary:
      "Educational institution portal featuring academic curriculum overviews, student admissions, school calendar milestones, and campus facilities.",
    url: "https://everlastingschools.netlify.app",
    kind: "Educational Institution",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["EdTech", "School Portal", "Admissions"],
    features: [
      "Prospective student admissions guide and application forms",
      "Academic calendar, curriculum, and extra-curricular highlights",
      "Parent noticeboard and school milestone communication",
    ],
  },
  {
    slug: "shopflow",
    title: "ShopFlow",
    category: "Mobile Applications",
    summary:
      "Cross-platform retail and inventory mobile application engineered with React Native and Expo, streamlining mobile commerce and point-of-sale operations.",
    url: "https://expo.dev/accounts/frankdotdev/projects/shopflow/builds/20bee6c6-9fc1-4840-8728-90f558ab4705",
    kind: "Mobile App (Expo Build)",
    image:
      "https://images.unsplash.com/photo-1556742049-0a67e557224d?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["React Native", "Expo", "Mobile POS", "E-Commerce"],
    features: [
      "Optimized native mobile interface for iOS and Android",
      "Real-time product inventory tracking and rapid mobile checkout",
      "Offline-first operational resilience with instant cloud synchronisation",
    ],
  },
  {
    slug: "hackers-medicare",
    title: "Hackers Medicare",
    category: "Mobile Applications",
    summary:
      "Health monitoring and appointment tracking mobile product built using Expo, connecting patients with telemedicine resources and medical reminders.",
    url: "https://expo.dev/accounts/frankdotdev/projects/hackers-medicare/builds/3bc1fe00-6383-4c5c-8644-dea8c78b0e41",
    kind: "Mobile App (Expo Build)",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["React Native", "Expo", "HealthTech", "Mobile UX"],
    features: [
      "Intuitive medication scheduling and push notification alerts",
      "Direct consultation booking with medical professionals",
      "Encrypted patient health records stored securely on device and cloud",
    ],
  },
  {
    slug: "fiorio",
    title: "Fiorio Mobile",
    category: "Mobile Applications",
    summary:
      "Android application distribution and mobile client engineered via automated continuous integration workflows and high-performance React Native architecture.",
    url: "https://github.com/hackversetechnologies-code/fiorio/actions/runs/35575400070/artifacts/10628426886",
    kind: "Mobile App (Android / CI)",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80",
    verified: true,
    tags: ["Android", "React Native", "CI/CD", "APK Release"],
    features: [
      "Automated GitHub Actions continuous deployment and APK pipeline",
      "Native device integration with fluid gesture navigation",
      "Robust state management and low-latency API communication",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  overview: string;
  techStack: string[];
  outcomes: { label: string; value: string }[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Redesign",
    description: "Complete redesign and development of a modern e-commerce platform with improved UX and performance.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    tags: ["Web", "UI/UX", "E-Commerce"],
    category: "Web Development",
    overview: "We transformed an outdated e-commerce platform into a modern, high-converting shopping experience. The project involved a complete UI/UX overhaul, performance optimization, and integration with multiple payment gateways and inventory management systems.",
    techStack: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    outcomes: [
      { label: "Conversion Rate", value: "+45%" },
      { label: "Page Load Time", value: "-60%" },
      { label: "Revenue Growth", value: "+120%" },
      { label: "User Retention", value: "+35%" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description: "HIPAA-compliant mobile application for patient management and telehealth consultations.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    tags: ["Mobile", "Healthcare", "UI/UX"],
    category: "Mobile Development",
    overview: "Developed a comprehensive healthcare mobile application that enables patients to book appointments, access medical records, and conduct video consultations with doctors. The app is fully HIPAA-compliant with end-to-end encryption.",
    techStack: ["React Native", "Firebase", "WebRTC", "Node.js", "MongoDB"],
    outcomes: [
      { label: "Active Users", value: "50K+" },
      { label: "Appointments/Month", value: "12K+" },
      { label: "Patient Satisfaction", value: "4.8/5" },
      { label: "Support Tickets", value: "-70%" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Analytics Dashboard",
    description: "Real-time financial analytics dashboard with AI-powered insights and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    tags: ["Web", "Data Analytics", "AI"],
    category: "Data & Analytics",
    overview: "Built a sophisticated analytics dashboard for a fintech company, featuring real-time data visualization, AI-powered trend analysis, and automated report generation. The dashboard processes millions of transactions daily.",
    techStack: ["React", "Python", "TensorFlow", "PostgreSQL", "Redis"],
    outcomes: [
      { label: "Processing Speed", value: "3x Faster" },
      { label: "Report Accuracy", value: "99.7%" },
      { label: "Manual Work Reduced", value: "-80%" },
      { label: "Cost Savings", value: "$2M/yr" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "saas-marketing",
    title: "SaaS Marketing Campaign",
    description: "Multi-channel digital marketing strategy that drove 300% growth in qualified leads.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop",
    tags: ["SEO", "Marketing", "Content"],
    category: "Digital Marketing",
    overview: "Executed a comprehensive digital marketing campaign for a B2B SaaS company, including SEO optimization, content marketing, paid advertising, and social media strategy. The campaign significantly increased brand visibility and lead generation.",
    techStack: ["Google Ads", "HubSpot", "Semrush", "Google Analytics", "Mailchimp"],
    outcomes: [
      { label: "Qualified Leads", value: "+300%" },
      { label: "Organic Traffic", value: "+180%" },
      { label: "Cost Per Lead", value: "-45%" },
      { label: "Domain Authority", value: "+25" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration",
    description: "Migrated legacy infrastructure to AWS with zero downtime and 40% cost reduction.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    tags: ["Cloud", "Infrastructure", "DevOps"],
    category: "IT Support",
    overview: "Successfully migrated a large enterprise's on-premise infrastructure to AWS cloud, including 200+ servers, databases, and applications. The project was completed with zero downtime using a phased migration approach.",
    techStack: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins"],
    outcomes: [
      { label: "Downtime", value: "Zero" },
      { label: "Cost Reduction", value: "-40%" },
      { label: "Scalability", value: "10x" },
      { label: "Deploy Speed", value: "5x Faster" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
    ],
  },
  {
    id: "crm-integration",
    title: "CRM System Integration",
    description: "Unified multiple business tools into a seamless CRM ecosystem with automated workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    tags: ["Integration", "CRM", "Automation"],
    category: "System Integration",
    overview: "Designed and implemented a comprehensive CRM integration that unified sales, marketing, customer support, and financial systems into a single cohesive platform. Automated workflows replaced manual data entry and reporting processes.",
    techStack: ["Salesforce", "Zapier", "Node.js", "REST APIs", "PostgreSQL"],
    outcomes: [
      { label: "Data Entry Time", value: "-90%" },
      { label: "Sales Cycle", value: "-30%" },
      { label: "Team Productivity", value: "+55%" },
      { label: "Data Accuracy", value: "99.5%" },
    ],
    screenshots: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    ],
  },
];

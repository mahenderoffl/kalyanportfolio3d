export interface TimelineEvent {
  id: string;
  year: string;
  month?: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "career" | "achievement" | "startup" | "certification";
  icon: string;
  gradient: string;
  highlights?: string[];
  link?: {
    url: string;
    label: string;
  };
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: "iit-patna",
    year: "2023",
    month: "2026",
    title: "Indian Institute of Technology Patna",
    subtitle: "Bachelor of Business Administration (BBA)",
    description:
      "Pursuing BBA with CPI: 9.2/10.0. Building expertise in business strategy, entrepreneurship, and technology management.",
    type: "education",
    icon: "graduation",
    gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
    highlights: [
      "CPI: 9.2/10.0",
      "Business Strategy",
      "Tech Entrepreneurship",
      "Product Management",
    ],
  },
  {
    id: "founders-lab",
    year: "2024",
    month: "Dec",
    title: "WaveSeed Co.",
    subtitle: "Founder & Product Architect",
    description:
      "Building the future of business automation with AI-powered tools for SMBs and enterprises.",
    type: "startup",
    icon: "rocket",
    gradient: "linear-gradient(135deg, #8B5CF6, #D946EF)",
    highlights: [
      "WaveSeed Growth (500+ daily users)",
      "WaveBase (AI Assistant)",
      "WaveSignals (Nifty 50 Alerts)",
      "Full-stack architecture",
    ],
  },

  {
    id: "campusbuzz",
    year: "2023",
    month: "Sep",
    title: "CampusBuzz",
    subtitle: "Co-Founder",
    description:
      "Scaled a student community platform to 500+ users across multiple colleges with innovative features.",
    type: "startup",
    icon: "star",
    gradient: "linear-gradient(135deg, #EC4899, #F97316)",
    highlights: [
      "500+ Active Users",
      "Multi-college Platform",
      "Real-time Chat",
      "Event Management",
    ],
  },
  {
    id: "tsms-college",
    year: "2023",
    month: "May",
    title: "Telangana State Model School Jr. College",
    subtitle: "Class XII (Science) - 90.1%",
    description:
      "Completed Intermediate Education with distinction from Telangana Board of Intermediate Education.",
    type: "education",
    icon: "graduation",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    highlights: [
      "Science Stream",
      "90.1% Score",
      "State Board Topper",
      "Academic Excellence",
    ],
  },
  {
    id: "guvi-analyst",
    year: "2023",
    month: "Mar",
    title: "GUVI - HCL Group Company",
    subtitle: "Data Analyst",
    description:
      "Built interactive dashboards and automated reporting systems for business intelligence.",
    type: "career",
    icon: "chart",
    gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)",
    highlights: [
      "Power BI Dashboards",
      "Excel Automation",
      "Business Insights",
      "Report Automation",
    ],
  },
  {
    id: "ai-models",
    year: "2023",
    month: "Jun",
    title: "AI Model Fine-tuning",
    subtitle: "Research Achievement",
    description:
      "Successfully fine-tuned Llama-2, Mistral, and Phi models for domain-specific applications.",
    type: "achievement",
    icon: "cpu",
    gradient: "linear-gradient(135deg, #8B5CF6, #EC4899)",
    highlights: [
      "Llama-2 Fine-tuning",
      "Mistral Optimization",
      "Phi Model Customization",
      "Domain Adaptation",
    ],
  },
  {
    id: "balaji-school",
    year: "2021",
    month: "May",
    title: "Balaji Techno School Narsampet",
    subtitle: "Class X (CBSE) - 73.8%",
    description:
      "Completed secondary education with CBSE curriculum, building strong foundation in academics.",
    type: "education",
    icon: "graduation",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    highlights: [
      "CBSE Curriculum",
      "73.8% Score",
      "Foundation Studies",
      "Academic Growth",
    ],
  },
];

export const timelineTypes = [
  { id: "all", name: "All", icon: "grid" },
  { id: "education", name: "Education", icon: "graduation" },
  { id: "career", name: "Career", icon: "briefcase" },
  { id: "startup", name: "Startups", icon: "rocket" },
  { id: "achievement", name: "Achievements", icon: "trophy" },
  { id: "certification", name: "Certifications", icon: "award" },
];

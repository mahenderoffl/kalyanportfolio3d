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
    id: "waveseed",
    year: "2025",
    month: "Dec",
    title: "WaveSeed",
    subtitle: "Co-Founder",
    description:
      "WaveSeed builds modern digital products and helps businesses scale using tech and AI, while enabling builders to gain real-world experience through live products and execution-focused learning.",
    type: "startup",
    icon: "rocket",
    gradient: "linear-gradient(135deg, #FF4E00, #EC9F05)",
    highlights: [
      "Building modern digital products",
      "Scaling businesses with AI & Tech",
      "Live product execution",
      "Experience-focused learning platform",
    ],
  },
  {
    id: "xenspire",
    year: "2025",
    month: "Aug",
    title: "Xenspire Group",
    subtitle: "Software Engineer (AI Developer)",
    description:
      "Building a complete SaaS platform end-to-end as a solo developer. Developed email automation, SMS, campaign management, job posting extraction from Brightdata, contact sourcing via Apollo & ByteMine, LinkedIn candidate search, and AI agents.",
    type: "career",
    icon: "code",
    gradient: "linear-gradient(135deg, #8B5CF6, #D946EF)",
    highlights: [
      "Complete SaaS Platform (Solo Dev)",
      "Email & SMS Automation",
      "Campaign Management System",
      "Job Posting Extraction (Brightdata)",
      "Contact Sourcing (Apollo, ByteMine)",
      "LinkedIn Candidate Search",
      "AI Agents Development",
      "React + FastAPI Stack",
    ],
  },
  {
    id: "juteq",
    year: "2025",
    month: "Jun",
    title: "JUTEQ",
    subtitle: "Full Stack AI Developer",
    description:
      "Contributed to automotive agents for intelligent auto-reply, email & SMS response systems using Vertex AI and LLMs. Built ReAct-style agents and Agentic RAG pipelines with LangChain and CrewAI.",
    type: "career",
    icon: "cpu",
    gradient: "linear-gradient(135deg, #3B82F6, #06B6D4)",
    highlights: [
      "Automotive AI Agents",
      "ReAct-style Agents",
      "Agentic RAG Pipelines",
      "LangChain & CrewAI",
      "Node.js, NestJS, React",
    ],
  },
  {
    id: "nagentai",
    year: "2025",
    month: "Feb",
    title: "NagentAI",
    subtitle: "Full-Stack GenAI Trainee",
    description:
      "Developed and deployed 50+ intelligent AI agents leveraging GPT-4, Claude 3, Llama3, Gemini, and more. Built advanced RAG pipelines, multimodal AI integration, and n8n automation workflows.",
    type: "career",
    icon: "cpu",
    gradient: "linear-gradient(135deg, #EC4899, #F97316)",
    highlights: [
      "50+ AI Agents Deployed",
      "Advanced RAG Pipelines",
      "Multimodal AI Integration",
      "n8n Automation Workflows",
      "MCP (Model Context Protocol)",
    ],
  },
  {
    id: "campusbuzz",
    year: "2024",
    month: "Aug",
    title: "CampusBuzz",
    subtitle: "Founder & Chief Developer",
    description:
      "Launched a dynamic platform for the IIT community featuring campus Q&A, alumni forums, mentorship, marketplace, JEE predictor, and AI chatbot. Achieved 550+ organic downloads. Recognized as Top 100 startup by Inflection Point Ventures.",
    type: "startup",
    icon: "rocket",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    highlights: [
      "550+ Organic Downloads",
      "250+ Signups (No Marketing)",
      "Top 100 Startups (Inflection Point Ventures)",
      "Recognized by E-Cell IIT KGP",
      "Led 30+ Intern Team",
    ],
  },
  {
    id: "olive-orange",
    year: "2024",
    month: "Dec",
    title: "Olive Orange",
    subtitle: "Co-Founder | AI-Powered EdTech",
    description:
      "Designed and developed an AI-powered education platform leveraging LLMs to transform teaching and learning. Features smart lesson planning, adaptive assessments, personalized coaching, and multilingual support.",
    type: "startup",
    icon: "star",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    highlights: [
      "AI-Powered Education Platform",
      "Smart Lesson Planning",
      "Adaptive Assessments",
      "Multilingual Support",
      "Parent Dashboard",
    ],
  },
  {
    id: "isro",
    year: "2024",
    month: "May",
    title: "National Remote Sensing Centre, ISRO",
    subtitle: "AI Research Intern",
    description:
      "Developed a CNN model achieving 84.5% accuracy in classifying aquaculture ponds. Integrated with Random Forest pipeline for water quality prediction using satellite data from Google Earth Engine.",
    type: "career",
    icon: "chart",
    gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)",
    highlights: [
      "CNN Model (84.5% Accuracy)",
      "TensorFlow/Keras & OpenCV",
      "Google Earth Engine",
      "Water Quality Prediction",
    ],
  },
  {
    id: "best-performance-award",
    year: "2025",
    month: "",
    title: "Best Performance in Technology Award",
    subtitle: "IIT Kharagpur (2024-25)",
    description:
      "Honored for founding CampusBuzz and recognized as the academic topper of the department with a CGPA of 8.84.",
    type: "achievement",
    icon: "trophy",
    gradient: "linear-gradient(135deg, #FFD700, #FFA500)",
    highlights: [
      "Department Topper (CGPA 8.84)",
      "CampusBuzz Recognition",
      "Technology Leadership",
    ],
  },
  {
    id: "iit-kgp",
    year: "2023",
    month: "2025",
    title: "Indian Institute of Technology Kharagpur",
    subtitle: "M.Tech (Earth System Science & Tech)",
    description:
      "Completed MTech with CGPA 8.84/10.0. Academic topper of the department. Won Best Performance in Technology Award.",
    type: "education",
    icon: "graduation",
    gradient: "linear-gradient(135deg, #8B5CF6, #D946EF)",
    highlights: [
      "CGPA: 8.84/10.0",
      "Department Topper",
      "Best Performance in Technology Award",
      "MMM Hall Event Lead (2100+ students)",
    ],
  },
  {
    id: "jntuh",
    year: "2018",
    month: "2022",
    title: "JNTUH College of Engineering Manthani",
    subtitle: "B.Tech (Civil Engineering)",
    description:
      "Completed bachelor's degree. Gold Medal in JNTU B-Zone Football Tournament. Placement Coordinator for Coral Department.",
    type: "education",
    icon: "graduation",
    gradient: "linear-gradient(135deg, #10B981, #34D399)",
    highlights: [
      "CGPA: 6.44",
      "Gold Medal - Football Tournament",
      "Placement Coordinator",
    ],
  },
  {
    id: "certifications",
    year: "2024",
    month: "",
    title: "Advanced Certifications",
    subtitle: "AI, Data Science & GenAI",
    description:
      "Advanced Certification in Data Science and AI from CODE IIT Madras Pravartak. Generative AI, LLM Apps, AI Agents bootcamp.",
    type: "certification",
    icon: "award",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    highlights: [
      "Data Science & AI (IIT Madras/Intellipaat)",
      "GenAI, LLM Apps, AI Agents (AI Accelera)",
      "DSA in Python",
      "Python Masterclass (Udemy)",
    ],
  },
  {
    id: "tsbie",
    year: "2018",
    month: "May",
    title: "Sri Chaitanya Junior College",
    subtitle: "TSBIE - 97.4%",
    description:
      "Completed Intermediate Education with outstanding marks from Telangana State Board.",
    type: "education",
    icon: "graduation",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    highlights: ["97.4% Score", "Science Stream", "Academic Excellence"],
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

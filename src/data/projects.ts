export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "product" | "analytics" | "cofounded" | "upcoming";
  description: string;
  stats: { label: string; value: string; icon: string }[];
  techStack: string[];
  features: string[];
  gradient: string;
  image?: string;
  links?: {
    live?: string;
    demo?: string;
    github?: string;
  };
  isNew?: boolean;
  isUpcoming?: boolean;
}

export const projects: Project[] = [
  // XENSPIRE SAAS PLATFORM
  {
    id: "xenspire-saas",
    title: "Xenspire SaaS Platform",
    subtitle: "End-to-End Recruitment & Marketing Automation",
    category: "product",
    description:
      "Built a complete SaaS platform as a solo developer — email automation, SMS campaigns, campaign management, job posting extraction from Brightdata, contact sourcing via Apollo & ByteMine, LinkedIn candidate search, and AI agents.",
    stats: [
      { label: "Built Solo", value: "E2E", icon: "code" },
      { label: "AI Agents", value: "5+", icon: "cpu" },
      { label: "Automation", value: "100%", icon: "zap" },
    ],
    techStack: [
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Brightdata",
      "Apollo",
      "ByteMine",
    ],
    features: [
      "Email Automation System",
      "SMS Campaign Management",
      "Job Posting Extraction (Brightdata)",
      "Contact Sourcing (Apollo, ByteMine)",
      "LinkedIn Candidate Search",
      "AI Agents for Automation",
      "Campaign Analytics Dashboard",
      "Full-Stack Solo Development",
    ],
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)",
    isNew: true,
  },

  // JUTEQ AUTOMOTIVE AI
  {
    id: "juteq-automotive",
    title: "JUTEQ Automotive AI",
    subtitle: "Intelligent Auto-Reply & Agent Systems",
    category: "product",
    description:
      "Developed automotive agents for intelligent auto-reply, email & SMS response systems using Vertex AI and LLMs. Built ReAct-style agents and Agentic RAG pipelines.",
    stats: [
      { label: "Agent Type", value: "ReAct", icon: "cpu" },
      { label: "RAG", value: "Agentic", icon: "layers" },
      { label: "Deployment", value: "Prod", icon: "check" },
    ],
    techStack: [
      "Node.js",
      "NestJS",
      "React",
      "Vertex AI",
      "LangChain",
      "CrewAI",
      "Python",
    ],
    features: [
      "Automotive AI Agents",
      "ReAct-style Agent Architecture",
      "Agentic RAG Pipelines",
      "Email & SMS Auto-Reply",
      "LLM Orchestration",
      "System Observability & AI Safety",
    ],
    gradient: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
  },

  // NAGENTAI - 50+ AI AGENTS
  {
    id: "nagentai-agents",
    title: "NagentAI Agent Suite",
    subtitle: "50+ Intelligent AI Agents",
    category: "product",
    description:
      "Developed and deployed 50+ intelligent AI agents leveraging GPT-4, Claude 3, Llama3, Gemini, Mistral, and more. Built advanced RAG pipelines, multimodal AI, and n8n automation workflows.",
    stats: [
      { label: "Agents Built", value: "50+", icon: "cpu" },
      { label: "LLMs Used", value: "8+", icon: "layers" },
      { label: "Pipelines", value: "RAG", icon: "zap" },
    ],
    techStack: [
      "OpenAI GPT-4",
      "Claude 3",
      "Llama3",
      "Gemini",
      "LangChain",
      "ChromaDB",
      "FAISS",
      "n8n",
      "ElevenLabs",
    ],
    features: [
      "AI Ad Video Generator",
      "LinkedIn Post Generator & Scheduler",
      "SEO Content Optimizer",
      "Company Research Automation",
      "Multimodal AI Integration",
      "MCP (Model Context Protocol)",
    ],
    gradient: "linear-gradient(135deg, #EC4899 0%, #F97316 100%)",
  },

  // TWEETPILOT
  {
    id: "tweetpilot",
    title: "TweetPilot",
    subtitle: "Autonomous Twitter Engagement Agent",
    category: "product",
    description:
      "Built a fully automated system using Google Gemini AI and Twitter API to monitor brand mentions, analyze sentiment, and post AI-generated replies in real time with analytics dashboard.",
    stats: [
      { label: "Automation", value: "Full", icon: "zap" },
      { label: "Sentiment", value: "AI", icon: "chart" },
      { label: "Real-time", value: "Yes", icon: "refresh" },
    ],
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Google Gemini",
      "Twitter API",
    ],
    features: [
      "Brand Mention Monitoring",
      "AI Sentiment Analysis",
      "Auto-Generated Replies",
      "Real-time Processing",
      "Analytics Dashboard",
      "Scalable Backend",
    ],
    gradient: "linear-gradient(135deg, #1DA1F2 0%, #14171A 100%)",
  },

  // ISRO CNN MODEL
  {
    id: "isro-cnn",
    title: "ISRO Aquaculture Classifier",
    subtitle: "CNN Model • 84.5% Accuracy",
    category: "analytics",
    description:
      "Developed a high-precision CNN model at ISRO NRSC achieving 84.5% accuracy in classifying aquaculture ponds. Integrated with Random Forest for water quality prediction using Google Earth Engine satellite data.",
    stats: [
      { label: "Accuracy", value: "84.5%", icon: "target" },
      { label: "Data Source", value: "GEE", icon: "globe" },
      { label: "Models", value: "CNN+RF", icon: "cpu" },
    ],
    techStack: [
      "TensorFlow",
      "Keras",
      "OpenCV",
      "NumPy",
      "Google Earth Engine",
      "Folium",
      "Matplotlib",
      "Pandas",
    ],
    features: [
      "CNN Image Classification",
      "Random Forest Pipeline",
      "Satellite Data Processing",
      "Water Quality Prediction",
      "Interactive Maps (Folium)",
      "Real-time Monitoring",
    ],
    gradient: "linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)",
  },

  // N8N AUTOMATION PROJECTS
  {
    id: "n8n-automations",
    title: "n8n Workflow Automations",
    subtitle: "Order Routing & HR Screening Systems",
    category: "product",
    description:
      "Built comprehensive workflow automation systems including customer order routing with real-time notifications, and an HR applicant screening system that automates candidate filtering.",
    stats: [
      { label: "Workflows", value: "5+", icon: "layers" },
      { label: "Automation", value: "100%", icon: "zap" },
      { label: "Time Saved", value: "80%", icon: "refresh" },
    ],
    techStack: ["n8n", "Email API", "Webhooks", "NLP", "REST APIs"],
    features: [
      "Customer Order Routing",
      "Real-time Notifications",
      "HR Applicant Screening",
      "Automated Candidate Filtering",
      "Email Automation",
      "Status Update Workflows",
    ],
    gradient: "linear-gradient(135deg, #10B981 0%, #06B6D4 100%)",
  },

  // CO-FOUNDED
  {
    id: "campusbuzz",
    title: "CampusBuzz",
    subtitle: "Campus Networking • 550+ Downloads",
    category: "cofounded",
    description:
      "Founded a dynamic platform for the IIT community with campus Q&A, alumni forums, mentorship, marketplace, JEE predictor, and AI chatbot. Top 100 startup by Inflection Point Ventures. Led 30+ interns.",
    stats: [
      { label: "Downloads", value: "550+", icon: "users" },
      { label: "Signups", value: "250+", icon: "trending" },
      { label: "Interns Led", value: "30+", icon: "users" },
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "AWS",
      "AI Chatbot",
    ],
    features: [
      "Campus Q&A Platform",
      "Alumni Forums",
      "Mentorship Programs",
      "Student Marketplace",
      "JEE Predictor",
      "AI-Powered Chatbot",
    ],
    gradient: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  },
  {
    id: "olive-orange",
    title: "Olive Orange",
    subtitle: "AI-Powered EdTech Innovation",
    category: "cofounded",
    description:
      "Co-founded an AI-powered education platform leveraging LLMs to transform teaching and learning with smart lesson planning, adaptive assessments, personalized coaching, and multilingual support.",
    stats: [
      { label: "AI-Powered", value: "LLM", icon: "cpu" },
      { label: "Features", value: "10+", icon: "layers" },
      { label: "Languages", value: "Multi", icon: "globe" },
    ],
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "OpenAI",
      "LangChain",
      "PostgreSQL",
    ],
    features: [
      "Smart Lesson Planning",
      "Test Automation",
      "Adaptive Assessments",
      "Personalized Coaching",
      "Multilingual Support",
      "Parent Dashboard",
    ],
    gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
  },
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "product", name: "Products & SaaS" },
  { id: "analytics", name: "Data & AI Research" },
  { id: "cofounded", name: "Co-Founded" },
];

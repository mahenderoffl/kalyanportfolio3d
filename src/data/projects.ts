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
  // UPCOMING PROJECTS
  {
    id: "wavetrack",
    title: "WaveTrack",
    subtitle: "Job Search Management Platform",
    category: "upcoming",
    description:
      "Personal job search command center that brings structure, clarity, and speed to the job-hunting process. Kanban-style tracking, fresh job alerts, interview scheduling, and ATS resume intelligence.",
    stats: [
      { label: "Pipeline Stages", value: "5+", icon: "layers" },
      { label: "Fresh Alerts", value: "24h", icon: "zap" },
      { label: "Resume AI", value: "ATS", icon: "cpu" },
    ],
    techStack: [
      "React Native",
      "Expo",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "GPT-4",
    ],
    features: [
      "Kanban Application Tracking",
      "Fresh Job Alerts (<24h)",
      "Company & Contact CRM",
      "Interview Scheduling",
      "Goal-Driven Job Search",
      "ATS Resume Intelligence",
    ],
    gradient: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
    isUpcoming: true,
    isNew: true,
  },
  // WAVESEED PRODUCTS
  {
    id: "waveseed-growth",
    title: "WaveSeed Growth",
    subtitle: "End-to-End AI Marketing Agency",
    category: "product",
    description:
      "Full-service AI marketing agency offering Strategy → Execution → Analytics → Growth. AI-driven campaigns, automation, and growth systems.",
    stats: [
      { label: "Service Model", value: "Full-Service", icon: "rocket" },
      { label: "AI-Powered", value: "Yes", icon: "cpu" },
      { label: "Data-Driven", value: "100%", icon: "chart" },
    ],
    techStack: [
      "Next.js",
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "GA4",
      "HubSpot",
      "n8n",
    ],
    features: [
      "AI-Driven Marketing Strategy",
      "Data Analytics & Attribution",
      "Marketing Automation Systems",
      "AI Content Generation",
      "SEO & Content Optimization",
      "Growth Hacking & Experimentation",
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    isNew: true,
  },
  {
    id: "wavebase",
    title: "WaveBase",
    subtitle: "AI-Powered No-Code Website Builder",
    category: "product",
    description:
      "Revolutionary AI website builder that converts natural language prompts into production-ready React code with sub-200ms response time.",
    stats: [
      { label: "Response Time", value: "<200ms", icon: "zap" },
      { label: "Multi-Agent", value: "Yes", icon: "cpu" },
      { label: "Production Ready", value: "100%", icon: "check" },
    ],
    techStack: [
      "Next.js 14",
      "React 19",
      "TypeScript",
      "OpenAI GPT-4",
      "Convex",
      "LangChain",
      "Tailwind",
    ],
    features: [
      "Natural Language to Code",
      "Multi-Agent Orchestration",
      "Real-time Preview",
      "One-Click Deploy",
      "Component Library",
      "Responsive Design Auto-gen",
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: "wavesignals",
    title: "WaveSignals",
    subtitle: "AI Blog Automation Platform",
    category: "product",
    description:
      "Intelligent blog automation handling the entire content lifecycle from topic research to multi-channel distribution.",
    stats: [
      { label: "Content Gen", value: "Automated", icon: "edit" },
      { label: "SEO Optimized", value: "Yes", icon: "search" },
      { label: "Multi-Channel", value: "5+", icon: "layers" },
    ],
    techStack: [
      "Python",
      "FastAPI",
      "OpenAI",
      "Claude",
      "LangChain",
      "MongoDB",
      "Celery",
    ],
    features: [
      "AI Topic Research",
      "Long-form Generation",
      "SEO Optimization",
      "Multi-Platform Publishing",
      "Performance Analytics",
      "Automated Scheduling",
    ],
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  },
  {
    id: "lifeweeks",
    title: "LifeWeeks",
    subtitle: "Productivity & Life Tracking App",
    category: "product",
    description:
      "Minimalist productivity app visualizing life in weeks for better goal tracking and habit formation.",
    stats: [
      { label: "Life View", value: "Weeks", icon: "calendar" },
      { label: "Goal Tracking", value: "Yes", icon: "target" },
      { label: "Habit Streaks", value: "Yes", icon: "check" },
    ],
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
    ],
    features: [
      "Week-Based Life Grid",
      "Goal Management",
      "Habit Tracking",
      "Progress Analytics",
      "Push Notifications",
      "Cloud Sync",
    ],
    gradient: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
  },
  {
    id: "automation-ecosystem",
    title: "Business Automation",
    subtitle: "10,000+ Daily Events Processing",
    category: "product",
    description:
      "Comprehensive automation platform handling marketing, sales, operations through intelligent AI agents and event-driven workflows.",
    stats: [
      { label: "Daily Events", value: "10K+", icon: "chart" },
      { label: "Manual Reduction", value: "85%", icon: "refresh" },
      { label: "Uptime", value: "99.9%", icon: "zap" },
    ],
    techStack: [
      "n8n",
      "Make.com",
      "RabbitMQ",
      "FastAPI",
      "AWS Lambda",
      "Docker",
      "Redis",
    ],
    features: [
      "Marketing Automation",
      "Sales Pipeline Management",
      "Order Fulfillment",
      "CRM with AI Agents",
      "Intelligent Lead Scoring",
      "Automated Scheduling",
    ],
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },

  // DATA ANALYTICS PROJECTS
  {
    id: "student-score",
    title: "Student Score Prediction",
    subtitle: "ML Regression Model - 85% Accuracy",
    category: "analytics",
    description:
      "End-to-end ML pipeline predicting student exam scores based on study habits, attendance, and demographics.",
    stats: [
      { label: "Accuracy", value: "85%", icon: "target" },
      { label: "Records", value: "1K+", icon: "chart" },
      { label: "Features", value: "10+", icon: "cpu" },
    ],
    techStack: [
      "Python",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
    ],
    features: [
      "Feature Engineering",
      "Cross-Validation",
      "Interactive Web UI",
      "Real-time Predictions",
      "Visualization Dashboard",
      "Model Explainability",
    ],
    gradient: "linear-gradient(135deg, #f97316 0%, #fbbf24 100%)",
  },
  {
    id: "sales-dashboard",
    title: "Global Sales Dashboard",
    subtitle: "15 Countries • 50K+ Transactions",
    category: "analytics",
    description:
      "Comprehensive BI dashboard analyzing sales across 15 countries with real-time data pipelines.",
    stats: [
      { label: "Countries", value: "15", icon: "globe" },
      { label: "Transactions", value: "50K+", icon: "dollar" },
      { label: "Speed Boost", value: "50%", icon: "zap" },
    ],
    techStack: [
      "Python",
      "Pandas",
      "Plotly",
      "Streamlit",
      "PostgreSQL",
      "Power BI",
    ],
    features: [
      "Geographic Analysis",
      "Revenue Tracking",
      "Product Analytics",
      "Customer Segmentation",
      "Predictive Forecasting",
      "Export Reports",
    ],
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  },
  {
    id: "ats-analyzer",
    title: "ATS Resume Analyzer",
    subtitle: "AI-Powered • 92% Accuracy",
    category: "analytics",
    description:
      "Intelligent resume analysis tool using GPT-4 for ATS compatibility evaluation and optimization suggestions.",
    stats: [
      { label: "Accuracy", value: "92%", icon: "target" },
      { label: "Resumes", value: "200+", icon: "file" },
      { label: "Criteria", value: "15+", icon: "check" },
    ],
    techStack: [
      "Python",
      "OpenAI GPT-4",
      "FastAPI",
      "LangChain",
      "React",
      "PyPDF2",
    ],
    features: [
      "ATS Compatibility Check",
      "Keyword Analysis",
      "Score Calculation",
      "Improvement Suggestions",
      "Job Description Matching",
      "Export Reports",
    ],
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
  },
  {
    id: "guvi-dashboards",
    title: "GUVI Analytics Suite",
    subtitle: "8 Enterprise BI Dashboards",
    category: "analytics",
    description:
      "Developed 8 production-grade analytics dashboards at GUVI (HCL Group) processing 500K+ records.",
    stats: [
      { label: "Dashboards", value: "8", icon: "chart" },
      { label: "Records", value: "500K+", icon: "database" },
      { label: "Faster Reports", value: "60%", icon: "zap" },
    ],
    techStack: ["Power BI", "Tableau", "Python", "SQL", "PostgreSQL", "Redis"],
    features: [
      "User Engagement Analytics",
      "Revenue Analytics",
      "Customer Segmentation",
      "Marketing Performance",
      "Sales Pipeline",
      "Executive Summary",
    ],
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  },

  // CO-FOUNDED
  {
    id: "campusbuzz",
    title: "CampusBuzz",
    subtitle: "Campus Networking • 5K+ Students",
    category: "cofounded",
    description:
      "Co-founded unified campus networking platform connecting students, mentors, and alumni across 12 institutions.",
    stats: [
      { label: "Students", value: "5K+", icon: "users" },
      { label: "Institutions", value: "12", icon: "building" },
      { label: "MoM Growth", value: "300%", icon: "trending" },
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Redis",
      "Socket.io",
      "AWS",
      "GA4",
    ],
    features: [
      "Job & Internship Hub",
      "Mentorship Matching",
      "Campus Events",
      "Alumni Network",
      "Real-time Notifications",
      "Career Resources",
    ],
    gradient: "linear-gradient(135deg, #fbbf24 0%, #f97316 100%)",
  },
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "upcoming", name: "🚀 Upcoming" },
  { id: "product", name: "Products & SaaS" },
  { id: "analytics", name: "Data Analytics" },
  { id: "cofounded", name: "Co-Founded" },
];

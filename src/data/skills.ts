export interface TechSkill {
  id: string;
  name: string;
  category: 
    | "language"
    | "frontend"
    | "backend"
    | "mobile"
    | "ai"
    | "database"
    | "cloud"
    | "automation"
    | "data"
    | "design";
  ring: 1 | 2 | 3 | 4 | 5 | 6;
  proficiency: 1 | 2 | 3 | 4 | 5;
  color: string;
  description?: string;
}

export const techStack: TechSkill[] = [
  // Ring 1 - Core Languages & Frontend
  { id: "python", name: "Python", category: "language", ring: 1, proficiency: 5, color: "#3776ab" },
  { id: "javascript", name: "JavaScript", category: "language", ring: 1, proficiency: 5, color: "#f7df1e" },
  { id: "typescript", name: "TypeScript", category: "language", ring: 1, proficiency: 5, color: "#3178c6" },
  { id: "react", name: "React", category: "frontend", ring: 1, proficiency: 5, color: "#61dafb" },
  { id: "nextjs", name: "Next.js 14", category: "frontend", ring: 1, proficiency: 5, color: "#ffffff" },
  { id: "tailwind", name: "Tailwind CSS", category: "frontend", ring: 1, proficiency: 5, color: "#06b6d4" },
  { id: "nodejs", name: "Node.js", category: "backend", ring: 1, proficiency: 5, color: "#339933" },
  { id: "html", name: "HTML5", category: "frontend", ring: 1, proficiency: 5, color: "#e34f26" },
  { id: "css", name: "CSS3", category: "frontend", ring: 1, proficiency: 5, color: "#1572b6" },

  // Ring 2 - AI & LLM
  { id: "openai", name: "OpenAI GPT-4", category: "ai", ring: 2, proficiency: 5, color: "#412991" },
  { id: "claude", name: "Claude 4.5", category: "ai", ring: 2, proficiency: 5, color: "#cc785c" },
  { id: "gemini", name: "Gemini", category: "ai", ring: 2, proficiency: 5, color: "#4285f4" },
  { id: "langchain", name: "LangChain", category: "ai", ring: 2, proficiency: 5, color: "#1c3c3c" },
  { id: "langgraph", name: "LangGraph", category: "ai", ring: 2, proficiency: 5, color: "#2d5a5a" },
  { id: "crewai", name: "CrewAI", category: "ai", ring: 2, proficiency: 4, color: "#ff6b6b" },
  { id: "autogen", name: "AutoGen", category: "ai", ring: 2, proficiency: 4, color: "#0078d4" },
  { id: "rag", name: "RAG", category: "ai", ring: 2, proficiency: 5, color: "#9333ea" },
  { id: "llama", name: "LLaMA", category: "ai", ring: 2, proficiency: 4, color: "#0467df" },
  { id: "mcp", name: "MCP", category: "ai", ring: 2, proficiency: 4, color: "#ec4899" },

  // Ring 3 - Databases
  { id: "postgresql", name: "PostgreSQL", category: "database", ring: 3, proficiency: 5, color: "#4169e1" },
  { id: "mongodb", name: "MongoDB", category: "database", ring: 3, proficiency: 5, color: "#47a248" },
  { id: "redis", name: "Redis", category: "database", ring: 3, proficiency: 5, color: "#dc382d" },
  { id: "supabase", name: "Supabase", category: "database", ring: 3, proficiency: 5, color: "#3ecf8e" },
  { id: "convex", name: "Convex", category: "database", ring: 3, proficiency: 5, color: "#ee342f" },
  { id: "pinecone", name: "Pinecone", category: "database", ring: 3, proficiency: 5, color: "#000000" },
  { id: "firebase", name: "Firebase", category: "database", ring: 3, proficiency: 4, color: "#ffca28" },
  { id: "mysql", name: "MySQL", category: "database", ring: 3, proficiency: 5, color: "#4479a1" },

  // Ring 4 - Cloud & DevOps
  { id: "aws", name: "AWS", category: "cloud", ring: 4, proficiency: 5, color: "#ff9900" },
  { id: "gcp", name: "GCP", category: "cloud", ring: 4, proficiency: 4, color: "#4285f4" },
  { id: "docker", name: "Docker", category: "cloud", ring: 4, proficiency: 5, color: "#2496ed" },
  { id: "kubernetes", name: "Kubernetes", category: "cloud", ring: 4, proficiency: 4, color: "#326ce5" },
  { id: "vercel", name: "Vercel", category: "cloud", ring: 4, proficiency: 5, color: "#000000" },
  { id: "terraform", name: "Terraform", category: "cloud", ring: 4, proficiency: 4, color: "#7b42bc" },
  { id: "github-actions", name: "GitHub Actions", category: "cloud", ring: 4, proficiency: 5, color: "#2088ff" },
  { id: "prometheus", name: "Prometheus", category: "cloud", ring: 4, proficiency: 4, color: "#e6522c" },
  { id: "grafana", name: "Grafana", category: "cloud", ring: 4, proficiency: 4, color: "#f46800" },

  // Ring 5 - Automation & APIs
  { id: "n8n", name: "n8n", category: "automation", ring: 5, proficiency: 5, color: "#ea4b71" },
  { id: "make", name: "Make.com", category: "automation", ring: 5, proficiency: 5, color: "#6d4aff" },
  { id: "zapier", name: "Zapier", category: "automation", ring: 5, proficiency: 5, color: "#ff4a00" },
  { id: "fastapi", name: "FastAPI", category: "backend", ring: 5, proficiency: 5, color: "#009688" },
  { id: "express", name: "Express.js", category: "backend", ring: 5, proficiency: 4, color: "#000000" },
  { id: "nestjs", name: "NestJS", category: "backend", ring: 5, proficiency: 4, color: "#e0234e" },
  { id: "rabbitmq", name: "RabbitMQ", category: "automation", ring: 5, proficiency: 4, color: "#ff6600" },
  { id: "graphql", name: "GraphQL", category: "backend", ring: 5, proficiency: 4, color: "#e10098" },
  { id: "websockets", name: "WebSockets", category: "backend", ring: 5, proficiency: 4, color: "#010101" },

  // Ring 6 - Data Science & Analytics
  { id: "pandas", name: "Pandas", category: "data", ring: 6, proficiency: 5, color: "#150458" },
  { id: "numpy", name: "NumPy", category: "data", ring: 6, proficiency: 5, color: "#013243" },
  { id: "scikit", name: "scikit-learn", category: "data", ring: 6, proficiency: 5, color: "#f7931e" },
  { id: "matplotlib", name: "Matplotlib", category: "data", ring: 6, proficiency: 5, color: "#11557c" },
  { id: "powerbi", name: "Power BI", category: "data", ring: 6, proficiency: 5, color: "#f2c811" },
  { id: "tableau", name: "Tableau", category: "data", ring: 6, proficiency: 5, color: "#e97627" },
  { id: "plotly", name: "Plotly", category: "data", ring: 6, proficiency: 5, color: "#3f4f75" },
  { id: "tensorflow", name: "TensorFlow", category: "data", ring: 6, proficiency: 4, color: "#ff6f00" },

  // Mobile Development
  { id: "react-native", name: "React Native", category: "mobile", ring: 1, proficiency: 5, color: "#61dafb" },
  { id: "expo", name: "Expo", category: "mobile", ring: 2, proficiency: 5, color: "#000020" },
  { id: "android-studio", name: "Android Studio", category: "mobile", ring: 3, proficiency: 4, color: "#3ddc84" },
  { id: "kotlin", name: "Kotlin", category: "mobile", ring: 3, proficiency: 3, color: "#7f52ff" },
  { id: "swift", name: "Swift", category: "mobile", ring: 4, proficiency: 3, color: "#fa7343" },
  { id: "flutter", name: "Flutter", category: "mobile", ring: 4, proficiency: 3, color: "#02569b" },

  // Design & UI/UX
  { id: "figma", name: "Figma", category: "design", ring: 1, proficiency: 5, color: "#f24e1e" },
  { id: "adobe-xd", name: "Adobe XD", category: "design", ring: 3, proficiency: 4, color: "#ff61f6" },
  { id: "sketch", name: "Sketch", category: "design", ring: 4, proficiency: 3, color: "#f7b500" },
  { id: "framer", name: "Framer", category: "design", ring: 2, proficiency: 4, color: "#0055ff" },
  { id: "photoshop", name: "Photoshop", category: "design", ring: 3, proficiency: 4, color: "#31a8ff" },
  { id: "illustrator", name: "Illustrator", category: "design", ring: 4, proficiency: 3, color: "#ff9a00" },
  { id: "canva", name: "Canva", category: "design", ring: 2, proficiency: 5, color: "#00c4cc" },
  { id: "prototyping", name: "Prototyping", category: "design", ring: 2, proficiency: 5, color: "#9333ea" },
  { id: "ui-design", name: "UI Design", category: "design", ring: 1, proficiency: 5, color: "#ec4899" },
  { id: "ux-research", name: "UX Research", category: "design", ring: 3, proficiency: 4, color: "#14b8a6" },
];

export const categories = [
  { id: "all", name: "All", color: "#8b5cf6" },
  { id: "language", name: "Languages", color: "#f7df1e" },
  { id: "frontend", name: "Frontend", color: "#61dafb" },
  { id: "backend", name: "Backend", color: "#339933" },
  { id: "mobile", name: "Mobile", color: "#3ddc84" },
  { id: "ai", name: "AI & LLM", color: "#9333ea" },
  { id: "database", name: "Databases", color: "#4169e1" },
  { id: "cloud", name: "Cloud & DevOps", color: "#ff9900" },
  { id: "automation", name: "Automation", color: "#ea4b71" },
  { id: "data", name: "Data Science", color: "#f2c811" },
  { id: "design", name: "Design & UI/UX", color: "#f24e1e" },
];

export const ringLabels = [
  { ring: 1, label: "Core Foundation", speed: "fastest" },
  { ring: 2, label: "AI & Agents", speed: "fast" },
  { ring: 3, label: "Databases", speed: "medium" },
  { ring: 4, label: "Cloud & DevOps", speed: "slow" },
  { ring: 5, label: "Automation & APIs", speed: "slower" },
  { ring: 6, label: "Data & Analytics", speed: "slowest" },
];

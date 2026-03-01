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
  { id: "sql", name: "SQL", category: "language", ring: 1, proficiency: 5, color: "#336791" },
  { id: "react", name: "React", category: "frontend", ring: 1, proficiency: 5, color: "#61dafb" },
  { id: "nextjs", name: "Next.js", category: "frontend", ring: 1, proficiency: 5, color: "#ffffff" },
  { id: "html", name: "HTML5", category: "frontend", ring: 1, proficiency: 5, color: "#e34f26" },
  { id: "css", name: "CSS3", category: "frontend", ring: 1, proficiency: 5, color: "#1572b6" },
  { id: "nodejs", name: "Node.js", category: "backend", ring: 1, proficiency: 5, color: "#339933" },
  { id: "typescript", name: "TypeScript", category: "language", ring: 1, proficiency: 4, color: "#3178c6" },

  // Ring 2 - AI & LLM
  { id: "openai", name: "OpenAI GPT-4", category: "ai", ring: 2, proficiency: 5, color: "#412991" },
  { id: "claude", name: "Claude 3", category: "ai", ring: 2, proficiency: 5, color: "#cc785c" },
  { id: "gemini", name: "Gemini", category: "ai", ring: 2, proficiency: 5, color: "#4285f4" },
  { id: "llama", name: "Llama 3", category: "ai", ring: 2, proficiency: 5, color: "#0467df" },
  { id: "langchain", name: "LangChain", category: "ai", ring: 2, proficiency: 5, color: "#1c3c3c" },
  { id: "llamaindex", name: "LlamaIndex", category: "ai", ring: 2, proficiency: 5, color: "#7c3aed" },
  { id: "crewai", name: "CrewAI", category: "ai", ring: 2, proficiency: 5, color: "#ff6b6b" },
  { id: "autogen", name: "AutoGen", category: "ai", ring: 2, proficiency: 4, color: "#0078d4" },
  { id: "rag", name: "RAG Pipelines", category: "ai", ring: 2, proficiency: 5, color: "#9333ea" },
  { id: "langgraph", name: "LangGraph", category: "ai", ring: 2, proficiency: 5, color: "#2d5a5a" },
  { id: "mcp", name: "MCP", category: "ai", ring: 2, proficiency: 5, color: "#ec4899" },

  // Ring 3 - Databases & Vector DBs
  { id: "postgresql", name: "PostgreSQL", category: "database", ring: 3, proficiency: 5, color: "#4169e1" },
  { id: "redis", name: "Redis", category: "database", ring: 3, proficiency: 5, color: "#dc382d" },
  { id: "chromadb", name: "ChromaDB", category: "database", ring: 3, proficiency: 5, color: "#00c853" },
  { id: "pinecone", name: "Pinecone", category: "database", ring: 3, proficiency: 5, color: "#000000" },
  { id: "faiss", name: "FAISS", category: "database", ring: 3, proficiency: 5, color: "#4267b2" },
  { id: "mongodb", name: "MongoDB", category: "database", ring: 3, proficiency: 4, color: "#47a248" },
  { id: "firestore", name: "Firestore", category: "database", ring: 3, proficiency: 4, color: "#ffca28" },
  { id: "mysql", name: "MySQL/Cloud SQL", category: "database", ring: 3, proficiency: 4, color: "#4479a1" },

  // Ring 4 - Cloud & DevOps
  { id: "gcp", name: "GCP", category: "cloud", ring: 4, proficiency: 5, color: "#4285f4" },
  { id: "aws", name: "AWS", category: "cloud", ring: 4, proficiency: 4, color: "#ff9900" },
  { id: "azure", name: "Azure", category: "cloud", ring: 4, proficiency: 4, color: "#0078d4" },
  { id: "docker", name: "Docker", category: "cloud", ring: 4, proficiency: 5, color: "#2496ed" },
  { id: "kubernetes", name: "Kubernetes", category: "cloud", ring: 4, proficiency: 4, color: "#326ce5" },
  { id: "vercel", name: "Vercel", category: "cloud", ring: 4, proficiency: 5, color: "#000000" },
  { id: "github-actions", name: "CI/CD Pipelines", category: "cloud", ring: 4, proficiency: 4, color: "#2088ff" },

  // Ring 5 - Backend Frameworks & APIs
  { id: "fastapi", name: "FastAPI", category: "backend", ring: 5, proficiency: 5, color: "#009688" },
  { id: "django", name: "Django", category: "backend", ring: 5, proficiency: 4, color: "#092e20" },
  { id: "flask", name: "Flask", category: "backend", ring: 5, proficiency: 4, color: "#000000" },
  { id: "nestjs", name: "NestJS", category: "backend", ring: 5, proficiency: 4, color: "#e0234e" },
  { id: "n8n", name: "n8n", category: "automation", ring: 5, proficiency: 5, color: "#ea4b71" },
  { id: "graphql", name: "GraphQL", category: "backend", ring: 5, proficiency: 4, color: "#e10098" },
  { id: "restapi", name: "REST APIs", category: "backend", ring: 5, proficiency: 5, color: "#61dafb" },
  { id: "postman", name: "Postman", category: "backend", ring: 5, proficiency: 5, color: "#ff6c37" },
  { id: "streamlit", name: "Streamlit", category: "backend", ring: 5, proficiency: 5, color: "#ff4b4b" },

  // Ring 6 - Data Science & ML
  { id: "tensorflow", name: "TensorFlow", category: "data", ring: 6, proficiency: 5, color: "#ff6f00" },
  { id: "pytorch", name: "PyTorch", category: "data", ring: 6, proficiency: 5, color: "#ee4c2c" },
  { id: "pandas", name: "Pandas", category: "data", ring: 6, proficiency: 5, color: "#150458" },
  { id: "numpy", name: "NumPy", category: "data", ring: 6, proficiency: 5, color: "#013243" },
  { id: "scikit", name: "scikit-learn", category: "data", ring: 6, proficiency: 5, color: "#f7931e" },
  { id: "matplotlib", name: "Matplotlib", category: "data", ring: 6, proficiency: 5, color: "#11557c" },
  { id: "powerbi", name: "Power BI", category: "data", ring: 6, proficiency: 5, color: "#f2c811" },
  { id: "tableau", name: "Tableau", category: "data", ring: 6, proficiency: 4, color: "#e97627" },
  { id: "opencv", name: "OpenCV", category: "data", ring: 6, proficiency: 4, color: "#5c3ee8" },
  { id: "huggingface", name: "Hugging Face", category: "data", ring: 6, proficiency: 4, color: "#ffbe00" },

  // Design & Tools
  { id: "figma", name: "Figma", category: "design", ring: 1, proficiency: 4, color: "#f24e1e" },
  { id: "android-studio", name: "Android Studio", category: "mobile", ring: 3, proficiency: 3, color: "#3ddc84" },
  { id: "matlab", name: "MATLAB", category: "language", ring: 4, proficiency: 3, color: "#e16737" },
  { id: "git", name: "Git & GitHub", category: "cloud", ring: 1, proficiency: 5, color: "#f05032" },
];

export const categories = [
  { id: "all", name: "All", color: "#8b5cf6" },
  { id: "language", name: "Languages", color: "#f7df1e" },
  { id: "frontend", name: "Frontend", color: "#61dafb" },
  { id: "backend", name: "Backend", color: "#339933" },
  { id: "ai", name: "AI & LLM", color: "#9333ea" },
  { id: "database", name: "Databases", color: "#4169e1" },
  { id: "cloud", name: "Cloud & DevOps", color: "#ff9900" },
  { id: "automation", name: "Automation", color: "#ea4b71" },
  { id: "data", name: "Data Science & ML", color: "#f2c811" },
  { id: "design", name: "Design & Tools", color: "#f24e1e" },
  { id: "mobile", name: "Mobile", color: "#3ddc84" },
];

export const ringLabels = [
  { ring: 1, label: "Core Foundation", speed: "fastest" },
  { ring: 2, label: "AI & Agents", speed: "fast" },
  { ring: 3, label: "Databases", speed: "medium" },
  { ring: 4, label: "Cloud & DevOps", speed: "slow" },
  { ring: 5, label: "Backend & APIs", speed: "slower" },
  { ring: 6, label: "Data Science & ML", speed: "slowest" },
];

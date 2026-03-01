import { NextResponse } from 'next/server';

export async function GET() {
  // Redirect to the actual PDF resume
  const resumeContent = `
BODA KALYAN SINGH
Software Engineer (AI Developer) | Full-Stack Developer | IIT Kharagpur
================================================================================

CONTACT
-------
Email: bodakalyansingh@gmail.com
LinkedIn: linkedin.com/in/bodakalyansingh
Phone: +91 9885358212
Location: India

SUMMARY
-------
Software Engineer (AI Developer) at Xenspire Group, building end-to-end SaaS 
platforms with AI-powered automation. MTech from IIT Kharagpur (Dept Topper, 
CGPA 8.84). Founder of CampusBuzz (550+ downloads, Top 100 Startup). Built 
50+ AI agents. Full-stack expertise in React, FastAPI, LangChain, and GenAI.

EDUCATION
---------
IIT Kharagpur | M.Tech (Earth System Science & Tech) | 2023 - 2025 | CGPA: 8.84
JNTUH College of Engineering Manthani | B.Tech (Civil) | 2018 - 2022 | CGPA: 6.44
Sri Chaitanya Junior College | TSBIE | 2018 | 97.4%

EXPERIENCE
----------
Xenspire Group | Software Engineer (AI Developer) | Aug 2025 - Present
- Building complete SaaS platform (solo dev): email automation, SMS, campaigns
- Job posting extraction (Brightdata), contact sourcing (Apollo, ByteMine)
- LinkedIn candidate search, AI agents. Stack: React + FastAPI

JUTEQ | Full Stack AI Developer | Jun 2025 - Jul 2025
- Automotive agents, ReAct-style agents, Agentic RAG pipelines
- LangChain, CrewAI, Node.js, NestJS, React

NagentAI | Full-Stack GenAI Trainee | Feb 2025 - May 2025
- Developed 50+ AI agents (GPT-4, Claude 3, Llama3, Gemini, Mistral)
- Advanced RAG pipelines, multimodal AI, n8n automation

ISRO NRSC | AI Research Intern | May 2024 - Jul 2024
- CNN model (84.5% accuracy), satellite data, water quality prediction

STARTUPS
--------
CampusBuzz | Founder | Aug 2024
- 550+ downloads, 250+ signups, Top 100 startups (Inflection Point Ventures)
- Led 30+ interns, recognized by E-Cell IIT KGP

Olive Orange | Co-Founder | Dec 2024
- AI-powered EdTech platform with adaptive assessments

SKILLS
------
Languages: Python, JavaScript, TypeScript, SQL
Frontend: React, Next.js, HTML5, CSS3
Backend: FastAPI, Django, Flask, NestJS, Node.js
AI/ML: LangChain, LlamaIndex, CrewAI, AutoGen, TensorFlow, PyTorch
LLMs: GPT-4, Claude 3, Gemini, Llama3, Mistral
Databases: PostgreSQL, Redis, ChromaDB, FAISS, Pinecone, MongoDB
Cloud: GCP, AWS, Azure, Docker, Kubernetes
Automation: n8n, MCP, LangGraph

AWARDS
------
- Best Performance in Technology Award (2024-25), IIT Kharagpur
- Department Topper (CGPA 8.84)
- Gold Medal - JNTU B-Zone Football Tournament

================================================================================
`;

  return new NextResponse(resumeContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="Boda_Kalyan_Singh_Resume.txt"',
    },
  });
}

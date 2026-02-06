import { NextResponse } from 'next/server';

export async function GET() {
  // In production, this would generate or serve a PDF resume
  // For now, redirect to a resume file or generate one
  
  const resumeContent = `
MAHENDER BANOTH
Tech Entrepreneur | Product Architect | Data Scientist
================================================================================

CONTACT
-------
Email: mahenderbanoth@gmail.com
LinkedIn: linkedin.com/in/mahenderbanoth
GitHub: github.com/mahender-banoth
Location: Hyderabad, India

SUMMARY
-------
Tech entrepreneur and product architect with expertise in building AI-powered 
products, data analytics solutions, and scalable business automation systems. 
Currently pursuing Executive Program in Product Management at IIM Bangalore while 
leading WaveTech Founders Lab.

EDUCATION
---------
Indian Institure of Technology Patna | Bachelor of Business Administration | 2023 - 2026
TSMS Jr College |Intermediate Education | 2021 -2023
Balaji Techno School Narsampet | Secondary Education | 2019 - 2021

EXPERIENCE
----------
WaveTech Founders Lab | Co-Founder & Product Architect | Dec 2024 - Present
- Built WaveSeed Growth platform with 500+ daily active users
- Developed WaveBase AI assistant for business automation
- Created WaveSignals for Nifty 50 market alerts

GUVI - HCL Group Company | Data Analyst | Mar 2023 - Jul 2024
- Built interactive Power BI dashboards for business intelligence
- Automated reporting systems reducing manual work by 60%

PROJECTS
--------
- CampusBuzz: Co-founded student community platform (500+ users)
- AI Model Fine-tuning: Llama-2, Mistral, Phi for domain applications
- Student Score Prediction: ML model with 94% accuracy
- Global Sales Dashboard: Real-time analytics for 50+ countries
- ATS Resume Analyzer: NLP-powered resume optimization tool

SKILLS
------
Languages: Python, JavaScript, TypeScript, SQL, R
Frameworks: Next.js, React, Node.js, FastAPI, Django
AI/ML: TensorFlow, PyTorch, Scikit-learn, LangChain, OpenAI
Data: Pandas, NumPy, Power BI, Tableau, Excel
Cloud: AWS, GCP, Azure, Vercel, Netlify
Databases: PostgreSQL, MongoDB, Redis, Firebase

CERTIFICATIONS
--------------
- IBM Data Science Professional Certificate
- Google Analytics Certified
- AWS Cloud Practitioner

================================================================================
References available upon request
`;

  return new NextResponse(resumeContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="Mahender_Banoth_Resume.txt"',
    },
  });
}

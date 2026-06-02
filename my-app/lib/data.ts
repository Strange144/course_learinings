export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  title: string;
  provider: string;
}

export const personalInfo = {
  name: "ANSUL JOSHI",
  tagline: "Full-Stack Web Developer",
  quote: "Building end-to-end solutions — from database design to UI.",
  email: "ansuljoshi144@gmail.com",
  phone: "+91-7021112899",
  linkedin: "https://linkedin.com/in/ansuljoshi",
  github: "https://github.com/Ansul-Joshi",
  location: "Panvel, Maharashtra",
  summary:
    "Full-stack web developer with hands-on experience building and deploying responsive web applications across Java, PHP, and Python stacks. Proven ability to deliver end-to-end solutions – from database design to UI – across academic, NGO, and warehouse domains. Adept at integrating third-party APIs, AI services, and automation tools in production environments.",
};

export const skills: SkillCategory[] = [
  { category: "Languages", items: ["Java", "Python", "PHP", "JavaScript", "SQL"] },
  { category: "Frontend", items: ["HTML5", "CSS3", "Bootstrap", "React", "jQuery"] },
  {
    category: "Backend",
    items: ["Java Servlets", "JSP", "PHP (PDO/MVC)", "Python (Eel)", "pyttsx3"],
  },
  { category: "Databases", items: ["MySQL", "MongoDB", "SQLite", "Oracle"] },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Apache Tomcat",
      "Eclipse IDE",
      "n8n",
      "WordPress",
      "Shopify",
      "Google Cloud",
      "AWS",
    ],
  },
  {
    category: "AI / APIs",
    items: [
      "Google Gemini API",
      "Google Speech Recognition",
      "Generative AI Integration",
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "KS Softech",
    period: "Apr 2025 – Oct 2025",
    bullets: [
      "Built and maintained responsive client websites using HTML, CSS, JavaScript, and PHP",
      "Developed and customized WordPress and Shopify storefronts; automated multi-step marketing workflows via n8n and Klaviyo",
      "Optimized on-page content and site architecture for SEO",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Healing Up NGO",
    period: "Jun 2024 – Feb 2025",
    bullets: [
      "Designed and deployed a fully responsive website for an NGO",
      "Integrated third-party APIs for donation and contact workflows",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Acadify",
    description:
      "Academic & Attendance Management System — full-stack web app for managing student records, attendance, and academic data with role-based access control.",
    tech: ["Java", "JSP", "Servlets", "MySQL", "Maven"],
  },
  {
    name: "Warehouse Management System",
    description:
      "Inventory and warehouse operations platform with admin dashboard, product tracking, stock management, and detailed reporting.",
    tech: ["PHP", "MySQL", "Bootstrap 5", "AdminLTE", "PDO"],
  },
  {
    name: "Jitter",
    description:
      "AI-powered voice assistant with natural language processing, text-to-speech output, and Google Gemini AI integration for intelligent responses.",
    tech: ["Python", "Eel", "pyttsx3", "Gemini API", "HTML/CSS/JS"],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Science – Computer Science",
    institution: "Pillai College of Arts, Commerce and Science",
    period: "2023 – 2025",
  },
];

export const certifications: Certification[] = [
  {
    title: "Build Responsive Real-World Websites with HTML and CSS",
    provider: "Udemy",
  },
  {
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    provider: "Udemy",
  },
];

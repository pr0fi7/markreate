/**
 * Single source of truth for every piece of copy on the site.
 * Edit this file to update the portfolio — the components read from it.
 */

export interface Job {
  company: string;
  url: string;
  role: string;
  period: string;
  meta: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  num: string;
  title: string;
  url: string;
  blurb: string;
  stack: string;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SocialLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
  /** Rendered as a solid dark button rather than an outlined one. */
  primary?: boolean;
}

/** Flip to false when you are no longer looking for new roles. */
export const AVAILABLE: boolean = true;

export const availabilityHeadline = AVAILABLE
  ? "Based in Brussels, Belgium — open to AI Engineer, ML Engineer and Data Scientist roles, on-site or remote across Europe."
  : "Based in Brussels, Belgium — currently heads-down at Harmix, but always happy to talk.";

/** Prefixed with Vite's base URL so links keep working under /markreate/. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const CV_FILENAME = "Mark_Shevchenko_CV.pdf";

export const profile = {
  name: "Mark Shevchenko",
  kicker: "Applied AI Engineer · RAG & ML Systems",
  tagline:
    "I build production AI products — RAG, agents and ML systems — with Python, FastAPI, Docker and cloud infrastructure.",
  location: "shipping AI systems from Brussels, Belgium",
  email: "mark4.shevchenko@gmail.com",
  linkedin: "https://www.linkedin.com/in/mark-shevchenko-218149259/",
  github: "https://github.com/pr0fi7/",
  telegram: "https://t.me/llMarkll",
  upwork: "https://www.upwork.com/freelancers/~015b0e8d89b2b5587d",
  photo: "assets/mark.jpg",
  cv: `assets/${CV_FILENAME}`,
};

export const highlights: string[] = [
  "Built and deployed FastAPI, Cloud Run and MCP systems at **Harmix** (pam.harmix.ai)",
  "Delivered recommendation, forecasting and document-intelligence solutions for clients",
  "**Azure Data Scientist Associate** (DP-100) & AWS Cloud Practitioner",
];

export const experience: Job[] = [
  {
    company: "Harmix Group",
    url: "https://manager.harmix.ai/",
    role: "AI Engineer",
    period: "Oct 2025 — Aug 2026",
    meta: "Full-time",
    bullets: [
      "Built and deployed the Proactive AI Manager platform (pam.harmix.ai): FastAPI services on Cloud Run, MCP servers and tools, and an in-production agent runtime.",
      "Developed AI-assisted CV screening and interview-evaluation workflows for Qsamruk, scored with Gemini.",
      "Integrated Euroformat's elevator BOM/spec engine as an MCP tool behind an agent interface.",
    ],
    tags: ["FastAPI", "Cloud Run", "MCP", "AI agents", "Gemini"],
  },
  {
    company: "Troople",
    url: "https://troople.be/",
    role: "Junior Data Scientist",
    period: "Oct 2024 — Jan 2025",
    meta: "Part-time, alongside studies",
    bullets: [
      "Delivered recommendation and document-processing workflows for Troople clients using OmniParser and advanced RAG.",
      "Built retrieval pipelines that improved recommendation relevance over the previous baseline.",
    ],
    tags: ["Advanced RAG", "OmniParser", "Recommenders", "Python"],
  },
  {
    company: "akkanto",
    url: "https://www.akkanto.com/en/",
    role: "Data Scientist Intern",
    period: "Sep 2024 — Feb 2025",
    meta: "Internship",
    bullets: [
      "Developed and deployed a web application on Azure automating internal document processes with AI — generation, embedding and retrieval.",
      "Owned data-security and privacy requirements across the stack.",
    ],
    tags: ["Azure", "Django", "RAG", "Data security"],
  },
  {
    company: "BeCode",
    url: "https://becode.org/",
    role: "Data Science Bootcamp",
    period: "2023 — 2024",
    meta: "Training",
    bullets: [
      "Built end-to-end ML projects: a property-price prediction app from web-scraped data, a tariff-change forecasting pipeline, and a brand-guided image-generation tool.",
      "Delivered a client analytics project with Accenture in Tableau.",
    ],
    tags: ["ML pipelines", "Forecasting", "Tableau", "Accenture"],
  },
];

export const earlierRoles =
  "Earlier: Marketing Specialist at TipTape · Arduino Tutor at Ukrainian Voice · Project Manager at Promote Ukraine";

export const projects: Project[] = [
  {
    num: "01",
    title: "MultiRAG Advanced",
    url: "https://github.com/pr0fi7/multi_agent_rag",
    blurb:
      "Multi-agent RAG system exploring late chunking, function calling and retrieval feedback to improve context relevance across complex document queries.",
    stack: "LightRAG · Qdrant · FastAPI · Docker",
  },
  {
    num: "02",
    title: "DocIntel Hub",
    url: "https://github.com/pr0fi7/doc_intel",
    blurb:
      "One-stop platform for text extraction, embedding and chunking — document intelligence made effortless.",
    stack: "FastAPI · Celery · Gemini · OpenAI",
  },
  {
    num: "03",
    title: "Licence Plates Vision",
    url: "https://github.com/pr0fi7/driving_licence_detection",
    blurb:
      "Real-time computer vision pipeline that detects and reads license plates from surveillance feeds.",
    stack: "YOLO · PyTorch · OpenCV · Docker",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    name: "GenAI & RAG",
    items: ["LLM agents", "MCP", "RAG pipelines", "Qdrant", "Gemini", "OpenAI", "Hugging Face"],
  },
  { name: "Core", items: ["Python", "SQL", "R", "Bash", "Git"] },
  {
    name: "ML & Computer Vision",
    items: ["PyTorch", "scikit-learn", "TensorFlow", "YOLO", "OpenCV", "spaCy", "MLflow"],
  },
  {
    name: "Cloud & DevOps",
    items: ["GCP", "Azure", "AWS", "Docker", "Kubernetes", "Cloud Run"],
  },
  { name: "Web & Apps", items: ["FastAPI", "Django", "Flask", "React", "Streamlit"] },
  {
    name: "Education",
    items: [
      "BS Engineering Technology & Robotics — KU Leuven",
      "BS Business Economics & Technologies — VUB",
      "MBA Data Science & AI Management",
    ],
  },
  {
    name: "Certifications",
    items: ["Azure Data Scientist Associate — DP-100", "AWS Cloud Practitioner — CLF-C02"],
  },
  {
    name: "Languages",
    items: ["English — C1", "French — B1", "Ukrainian — native", "Russian — C2"],
  },
];

export const showTestimonials: boolean = true;

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mark took the Proactive AI Manager from prototype to production, owning the FastAPI services, agent integrations and Cloud Run deployment. He consistently turned ambiguous client requirements into working systems.",
    author: "Oleksandr Kuprii",
    role: "CTO, Harmix",
  },
  {
    quote:
      "Mark combines real engineering depth with the rare ability to understand what a business actually needs. Every automation he touched ended up simpler, faster and more reliable.",
    author: "Bohdan Yeremenko",
    role: "Automation Lead, Etex",
  },
];

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  ...(showTestimonials ? [{ label: "Testimonials", href: "#testimonials" }] : []),
];

export const contactLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${profile.email}`, primary: true },
  { label: "LinkedIn", href: profile.linkedin, external: true, primary: true },
  { label: "Download CV", href: profile.cv, download: true },
  { label: "GitHub", href: profile.github, external: true },
  { label: "Telegram", href: profile.telegram, external: true },
  { label: "Upwork", href: profile.upwork, external: true },
];

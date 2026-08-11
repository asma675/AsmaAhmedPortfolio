import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { PROJECT_VAULT } from "./projectData";

const NAME = "Asma Ahmed Syrotkin";

const LINKS = {
  github: "https://github.com/asma675",
  linkedin: "https://www.linkedin.com/in/asma-ahmed67",
  email: "mailto:asma.ahmed.work@gmail.com",
  instagram: "https://www.instagram.com/asma.a15__/",
  resume:
    "https://www.linkedin.com/in/asma-ahmed67/overlay/1761849807562/single-media-viewer/?profileId=ACoAADRSu5IB5sVYbHSyGtnWPhEcVQmgyeDUzAA",
};

const NAV = [
  ["#home", "Home"],
  ["#projects", "Projects"],
  ["#experience", "Experience"],
  ["#skills", "Skills"],
  ["#wins", "Wins"],
  ["#certificates", "Certificates"],
  ["#leadership", "Leadership"],
  ["#contact", "Contact"],
];

const ROTATING_ROLES = [
  "Software Engineering",
  "AI / ML Systems",
  "Cloud + Enterprise",
  "Technology Consulting",
];

const FEATURED_PROJECTS = [
  {
    title: "LegalAssist",
    kicker: "AI product engineering • Founder build",
    description:
      "Full-stack AI legal workflow + CRM platform combining case management, legal research, document generation, task tracking, risk classification, and SaaS product thinking.",
    stack: ["Next.js", "React", "Tailwind", "LLMs", "SaaS"],
    code: "https://github.com/asma675/LegalAssist",
    icon: ShieldCheck,
  },
  {
    title: "Forest Intelligence Platform",
    kicker: "Geospatial AI • Climate resilience",
    description:
      "AI-powered wildfire and forest analytics platform using satellite/drone imagery, LiDAR, CNNs, Random Forest and XGBoost for risk, health and sustainability intelligence.",
    stack: ["Python", "FastAPI", "React", "GIS", "LiDAR", "ML"],
    code: null,
    icon: Globe2,
  },
  {
    title: "LLM Guardian",
    kicker: "AI safety • LLMOps • Observability",
    description:
      "Production-minded observability and safety platform for LLM apps with latency/cost telemetry, PII and hallucination signals, monitoring rules and incident workflows.",
    stack: ["Next.js", "Postgres", "Prisma", "Datadog", "Gemini"],
    code:
      "https://github.com/asma675/LLM-Guardian-App_AI-Partner-Catalyst-Accelerate-Innovation-Hackathon",
    demo: "https://devpost.com/software/llm-guardian-pbunz5",
    icon: BrainCircuit,
  },
  {
    title: "ChadGPT",
    kicker: "Full-stack generative AI",
    description:
      "ChatGPT-style application with persistent conversations, streaming responses, file uploads, image generation and database-backed memory on a modern Next.js architecture.",
    stack: ["Next.js", "React", "AI", "Streaming", "Vercel"],
    code: "https://github.com/asma675/ChadGPT",
    icon: Terminal,
  },
  {
    title: "FireWatch AI",
    kicker: "Public safety • Geospatial decision support",
    description:
      "Wildfire early-threat radar for Canada that combines risk visualization, AI-style predictions and emergency resources in a modern decision-support dashboard.",
    stack: ["React", "AI", "Geospatial", "Public Safety"],
    code: "https://github.com/asma675/WildfireWatch-AI",
    demo: "https://wildfire-watch-ai-z1kd.vercel.app",
    icon: Zap,
  },
  {
    title: "GovGuide AI",
    kicker: "G7 GovAI Grand Challenge submission",
    description:
      "Human-centred policy navigator that restructures dense government content into plain-language summaries, obligations, eligibility signals, required documents and next actions.",
    stack: ["AI", "GovTech", "UX", "Policy"],
    code: "https://github.com/asma675/GovGuideAI",
    demo: "https://www.youtube.com/watch?v=E4givpGrdC0",
    icon: Sparkles,
  },
  {
    title: "Unseen Gems",
    kicker: "UofT Hacks • Multi-agent systems",
    description:
      "AI discovery platform with four parallel agents, consensus analysis, fault-tolerant fallbacks, smart caching and an interactive 3D globe + dynamic maps.",
    stack: ["React", "Node.js", "Gemini", "Three.js", "Leaflet"],
    code: "https://github.com/asma675/Unseen-Gems-UofT-Hacks",
    icon: Globe2,
  },
  {
    title: "CareerLift AI",
    kicker: "Sheridan Datathon • Top 5 overall",
    description:
      "Résumé intelligence platform using Gemini for job-alignment scoring, missing-skill detection and personalized learning recommendations; Top 2 finalist for Best Use of Gemini.",
    stack: ["React", "Firebase", "Gemini 2.5", "Node.js"],
    code: "https://github.com/asma675/CareerLiftAI",
    demo: "https://www.youtube.com/watch?v=n-F_L20QB0k",
    icon: Rocket,
  },
];

const EXPERIENCE = [
  {
    role: "Geographic Information System (GIS) Assistant",
    org: "Ontario Government • Ontario Forest Research Institute (OFRI)",
    when: "May 2026 — Present",
    meta: "Sault Ste. Marie, Ontario",
    icon: Globe2,
    bullets: [
      "Selected as 1 of 3 interns from 550+ applicants for a competitive environmental AI/GIS research role.",
      "Work with satellite imagery, geospatial data and spatial analysis for wetland, forest and ecosystem monitoring.",
      "Build user-friendly GIS workflows and translate technical findings into conservation and decision-support outputs.",
    ],
    tags: ["Python", "GIS", "Remote Sensing", "Data", "Environmental AI"],
  },
  {
    role: "Software Engineer & Student Researcher",
    org: "Cominfo, Inc.",
    when: "Jan 2026 — Present",
    meta: "Remote",
    icon: BrainCircuit,
    bullets: [
      "Build production-oriented AI prototypes across LLMs, agents, RAG and autonomous reasoning workflows.",
      "Experiment with LangGraph/LangChain planning, memory, retrieval, tool use, structured outputs and self-correction.",
      "Benchmark model workflows across GPT, Claude, Gemini and IBM Granite-style models for quality, latency, relevance and hallucination risk.",
    ],
    tags: ["Python", "LangGraph", "LangChain", "RAG", "LLMs"],
  },
  {
    role: "Founder & CEO",
    org: "LegalAssist",
    when: "Jan 2026 — Present",
    meta: "Remote • Mississauga, Ontario",
    icon: Rocket,
    bullets: [
      "Own product vision, architecture, UX and AI integration for a full-stack legal workflow and CRM platform.",
      "Designed case intelligence, legal research, document generation, tasks/calendar and SaaS monetization flows.",
      "Built a modular cloud-ready architecture designed for regulated, high-stakes professional workflows.",
    ],
    tags: ["Next.js", "Product", "AI", "SaaS", "Architecture"],
  },
  {
    role: "IBM Z Student Ambassador",
    org: "IBM Z Student Ambassador Program",
    when: "Dec 2025 — Present",
    meta: "Oakville, Ontario",
    icon: Server,
    bullets: [
      "Represent IBM on campus through technical workshops, outreach and mentoring around enterprise computing and hybrid cloud.",
      "Achieved Superstar Tier (highest program level) with 115+ points.",
      "Led an IBM Z mini-hackathon with 100+ participants, recognized as TMU Tech Week’s Most Impactful Event.",
    ],
    tags: ["IBM Z", "z/OS", "Linux on Z", "DevOps", "Hybrid Cloud"],
  },
  {
    role: "President",
    org: "Enactus Sheridan",
    when: "Apr 2026 — Present",
    meta: "Oakville, Ontario",
    icon: Users,
    bullets: [
      "Lead strategy, operations and partnerships for student-led entrepreneurship, sustainability and social-impact initiatives.",
      "Mentor cross-functional teams in project development, business strategy and competition readiness.",
    ],
    tags: ["Leadership", "Strategy", "Social Impact", "Partnerships"],
  },
  {
    role: "Hackathon Team Lead",
    org: "Multiple organizations",
    when: "Sep 2025 — Present",
    meta: "Greater Toronto Area",
    icon: Trophy,
    bullets: [
      "Led cross-functional teams across 15+ major hackathons and fast-build technical challenges.",
      "Drive sprint planning, role coordination, delivery, technical direction and final pitch strategy under tight deadlines.",
    ],
    tags: ["React", "Next.js", "Firebase", "AWS", "Gemini"],
  },
  {
    role: "Information Technology Help Desk Assistant",
    org: "Niagara College",
    when: "Oct 2018 — Jul 2019",
    meta: "Welland, Ontario",
    icon: BriefcaseBusiness,
    bullets: [
      "Resolved 100+ technical incidents across operating systems, networking and authentication issues.",
      "Provided first-level technical support to students, faculty and staff for accounts, hardware, software and connectivity.",
      "Performed workstation configuration and system imaging while following institutional security standards.",
      "Improved operational reliability through root-cause analysis, troubleshooting and documentation.",
    ],
    tags: ["IT Support", "Troubleshooting", "Networking", "System Imaging", "Authentication"],
  },
];

const SKILL_GROUPS = [
  {
    label: "Languages",
    icon: Code2,
    items: ["Python", "TypeScript", "JavaScript", "Java", "C#", "C++", "SQL", "R"],
  },
  {
    label: "AI / ML",
    icon: BrainCircuit,
    items: ["LangGraph", "LangChain", "RAG", "LLM evaluation", "scikit-learn", "Random Forest", "XGBoost", "Computer Vision"],
  },
  {
    label: "Full Stack",
    icon: Terminal,
    items: ["React", "Next.js", "FastAPI", "Node.js", "REST APIs", "Tailwind", "Spring Boot", ".NET"],
  },
  {
    label: "Cloud / Data",
    icon: Cloud,
    items: ["AWS", "Azure", "Google Cloud", "Docker", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    label: "Geo / Enterprise",
    icon: Server,
    items: ["GIS", "QGIS", "Remote Sensing", "LiDAR", "Leaflet", "IBM Z", "z/OS", "Linux"],
  },
  {
    label: "Ways of Working",
    icon: Users,
    items: ["System Design", "Agile", "Git/GitHub", "Technical Leadership", "Product Thinking", "Public Speaking", "Mentoring", "Consulting Mindset"],
  },
];

const WINS = [
  {
    title: "2nd Place • IBM Bobathon 2026",
    org: "IBM • Bobathon",
    detail:
      "Placed 2nd in IBM Bobathon 2026 for an AI build, demonstrating rapid prototyping, product thinking and technical delivery under competition constraints.",
    icon: Trophy,
  },
  {
    title: "MLH Stream Winner • ElevenLabs Track",
    org: "DeerHacks 2026 • Major League Hacking",
    detail:
      "Won the ElevenLabs track for JEE — Just Enough Emotions, an AI communication coach using voice AI for realistic, tone-aware conversation practice built and pitched within 36 hours.",
    icon: Trophy,
  },
  {
    title: "2nd Place • Shark Tank Sprint",
    org: "Sheridan Finance Club • Apr 2026",
    detail:
      "Placed 2nd overall after developing and pitching an AI-powered sustainability platform focused on upcycling donated goods, reducing fast-fashion waste and supporting UN SDG 12.",
    icon: Award,
  },
  {
    title: "Most Impactful Event",
    org: "TMU Tech Week 2026 • IBM Z Mini-Hackathon",
    detail:
      "Recognized for leading and organizing a 100+ participant enterprise-tech hackathon focused on hands-on innovation and IBM Z.",
    icon: Trophy,
  },
  {
    title: "Top 5 Overall • Top 2 Best Use of Gemini",
    org: "Sheridan Datathon 2025 • CareerLift AI",
    detail: "Built and delivered a complete AI product under hackathon constraints.",
    icon: Award,
  },
  {
    title: "IBM Z × UNSA Hackathon 2026",
    org: "IBM Z • UNSA Sheridan",
    detail:
      "Helped organize and deliver a student-focused enterprise technology hackathon connecting participants with IBM leaders, technical mentors and hands-on problem solving.",
    icon: Users,
  },
  {
    title: "Superstar Tier • 115+ points",
    org: "IBM Z Student Ambassador Program",
    detail: "Reached the highest ambassador performance tier across the global program structure.",
    icon: BadgeCheck,
  },
  {
    title: "Honor Roll",
    org: "Sheridan College • 2023 & 2024",
    detail: "Academic recognition while completing the Honours BCS in Cloud Computing.",
    icon: GraduationCap,
  },
];

const ADDITIONAL_RECOGNITION = [
  "2nd Place • Tier 1 Basketball • Winter 2026",
  "Sheridan Degree Entrance Scholarship • 2023",
  "Dean’s Honors List • Humber College",
  "Honors Roll • Niagara College • 2019",
  "Rotary Club of St. Catharines Scholarship • 2018",
  "2nd Highest Average • Grade 12 Mathematics",
  "Highest Average • Grade 12 Biology",
  "Highest Average • Grade 12 Chemistry",
];

const CERTIFICATES = [
  {
    title: "Artificial Intelligence - Foundations 2024",
    issuer: "Interskill Learning",
    issued: "Aug 2026",
    category: "AI / ML",
    credential: "https://interskill.com/badge/artificial-intelligence-foundations-2024/",
  },
  {
    title: "AI - Artificial Intelligence and Modern Business",
    issuer: "Interskill Learning",
    issued: "Aug 2026",
    category: "AI / ML",
  },
  {
    title: "IBM Z and LinuxONE Community Advocate - 2026 (Level 2)",
    issuer: "IBM",
    issued: "Jan 2026",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/37139816-5950-4a08-8125-caef305a67e1/linked_in_profile",
  },
  {
    title: "IBM Z and LinuxONE Community Contributor - 2026 (Level 1)",
    issuer: "IBM",
    issued: "Jan 2026",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/5f25b0ea-5a66-41fa-b0e0-81c816029f14/linked_in_profile",
  },
  {
    title: "IBM Z Xplore - Advanced",
    issuer: "IBM",
    issued: "Jan 2026",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/8bd5cecc-02ab-4188-9265-a214a5adec23",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/979103836/treasury/",
  },
  {
    title: "IBM Dev Day: AI Demystified",
    issuer: "IBM",
    issued: "Feb 2026",
    category: "AI / ML",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/483076028/treasury/",
  },
  {
    title: "Google Cloud Innovator",
    issuer: "Google Developers Group",
    issued: "Nov 2025",
    category: "Cloud / DevOps",
    credential: "https://lnkd.in/e7TMd7jH",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    issued: "Dec 2025",
    category: "UX / Product",
    grade: "96.72%",
    credential: "https://www.coursera.org/account/accomplishments/records/U9PSVNWMESZH",
  },
  {
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM",
    issued: "Dec 2025",
    category: "AI / ML",
    grade: "97.50%",
    credential: "https://www.coursera.org/account/accomplishments/records/53POW3FZO598",
  },
  {
    title: "Develop Generative AI Applications: Get Started",
    issuer: "IBM",
    issued: "Dec 2025",
    category: "AI / ML",
    grade: "100%",
    credential: "https://www.coursera.org/account/accomplishments/records/X0TKETQTHL36",
  },
  {
    title: "GenAI for Application Developers",
    issuer: "Coursera",
    issued: "Dec 2025",
    category: "AI / ML",
    grade: "100%",
    credential: "https://www.coursera.org/account/accomplishments/records/TCVLATHSEJQJ",
  },
  {
    title: "IBM Z Xplore - Concepts",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/1d17fb7e-adb3-463e-9d39-56de97c7d9e8/public_url",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/770065137/treasury/",
  },
  {
    title: "Getting Started with Git and GitHub",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "Cloud / DevOps",
    credential: "https://www.coursera.org/account/accomplishments/records/8T18FCP7R70G",
  },
  {
    title: "Introduction to Systems Architecture",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "SWE / Data",
    grade: "94.85%",
    credential: "https://www.coursera.org/account/accomplishments/records/WAQ33MSVYY5A",
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "Cloud / DevOps",
    grade: "91.50%",
    credential: "https://www.coursera.org/account/accomplishments/records/MI0N25I976IY",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    issued: "Nov 2025",
    category: "Security",
    grade: "98.81%",
    credential: "https://www.coursera.org/account/accomplishments/records/QOECOBX08K5Q",
  },
  {
    title: "IBM Ethical Hacking with Open Source Tools Professional Certificate",
    issuer: "SkillUp / IBM",
    issued: "Nov 2025",
    category: "Security",
    grade: "100%",
    credential: "https://www.coursera.org/account/accomplishments/records/9C6RSL5VVZ3T",
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "AI / ML",
    grade: "95.71%",
    credential: "https://www.coursera.org/account/accomplishments/records/T3CE2E8ER7J9",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "AI / ML",
    credential: "https://www.coursera.org/account/accomplishments/records/SA13BC7X3U4U",
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "SWE / Data",
    grade: "92.80%",
    credential: "https://www.coursera.org/account/accomplishments/records/ZEZFB6MF92OH",
  },
  {
    title: "IBM Developer for z/OS Basics",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/20941abc-ef7a-4ceb-843d-83add31799e9/linked_in_profile",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1899520890/treasury/",
  },
  {
    title: "IBM z/OS Security Essentials",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/0d565253-275b-40b9-8acc-6b11a26c5a09/linked_in_profile",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1881562459/treasury/",
  },
  {
    title: "Introduction to IBM z/OS",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/f7690fd3-4b03-4f7f-9b70-c91f1579a783/linked_in_profile",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1877300024/treasury/",
  },
  {
    title: "IBM Z Resiliency",
    issuer: "IBM",
    issued: "Nov 2025",
    category: "IBM Z",
    credential: "https://www.credly.com/badges/bec27cde-7e02-49b2-8235-27dcd8471e84/linked_in_profile",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1868362721/treasury/",
  },
  {
    title: "Understanding and Visualizing Data with Python",
    issuer: "University of Michigan",
    issued: "Nov 2025",
    category: "SWE / Data",
    grade: "95.50%",
    credential: "https://www.coursera.org/account/accomplishments/verify/Y0KZMU59A74H",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1119277089/treasury/",
  },
  {
    title: "MongoDB Certificates",
    issuer: "MongoDB",
    issued: "Mar 2025",
    category: "SWE / Data",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1125182885/treasury/",
  },
  {
    title: "MLPAO Medical Laboratory Assistant/Technician (MLA/T) Certification",
    issuer: "Medical Laboratory Professionals' Association of Ontario",
    issued: "Sep 2025",
    category: "Other",
    media: "https://www.linkedin.com/in/asma-ahmed67/overlay/Certifications/1417632734/treasury/",
  },
];

const LEADERSHIP = [
  {
    title: "President • Enactus Sheridan",
    description:
      "Lead strategy, operations and partnerships for student-led entrepreneurship, sustainability and social-impact initiatives while mentoring cross-functional teams in project development, business strategy and competition readiness.",
    metric: "Strategy • entrepreneurship • social impact",
  },
  {
    title: "President • IBM Z Sheridan",
    description:
      "Lead a student organization focused on enterprise computing education, technical workshops, career readiness and collaboration with IBM professionals, faculty and student leaders.",
    metric: "Enterprise tech + campus leadership",
  },
  {
    title: "Founder • UNSA Sheridan",
    description:
      "Founded Sheridan’s United Nations Student Association, grew the community from 0 to 25+ members in the first week, and continue as a technical/events lead focused on SDGs, community outreach and partnerships.",
    metric: "0 → 25+ members in week one",
  },
  {
    title: "Human Appeal • Volunteer Team Leader",
    description:
      "Led and coordinated volunteers during a 3-day humanitarian fundraising campaign supporting orphans and families; personally raised $5K+ and supported campaign execution at scale.",
    metric: "$5K+ personally raised",
  },
  {
    title: "Public-Sector Experience",
    description:
      "Internship experience supporting research, constituent outreach, communications and event operations in a fast-paced Canadian federal office environment.",
    metric: "Policy + stakeholder exposure",
  },
];

const STATS = [
  ["52+", "Projects in portfolio"],
  ["15+", "Hackathons led / built"],
  ["1 of 3", "Selected from 550+"],
  ["100+", "IBM Z hackathon sign-ups"],
];

const cn = (...parts) => parts.filter(Boolean).join(" ");

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <div className="eyebrow"><Sparkles size={14} /> {eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}

function GlowButton({ href, children, secondary = false, external = false }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={cn("button", secondary && "button-secondary")}
    >
      {children}
    </a>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="social-link">
      {children}
    </a>
  );
}

function AppBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="digital-field" />
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="grid-plane" />
      <div className="particle-specks" />
      <div className="particle-specks particle-specks-two" />
      <div className="cursor-aura" />
    </div>
  );
}

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setRoleIndex((x) => (x + 1) % ROTATING_ROLES.length), 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="availability-pill"
        >
          <span className="status-dot" /> Open to SWE • AI/ML • Cloud • Tech Consulting
        </motion.div>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="hero-kicker">
          COMPUTER SCIENCE • CLOUD COMPUTING • SHERIDAN COLLEGE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          I build <span className="text-glow">production-minded tech</span> that connects AI, software and real-world impact.
        </motion.h1>

        <div className="role-line" aria-live="polite">
          <span>Focused on</span>
          <AnimatePresence mode="wait">
            <motion.strong
              key={ROTATING_ROLES[roleIndex]}
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.28 }}
            >
              {ROTATING_ROLES[roleIndex]}
            </motion.strong>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="hero-summary"
        >
          I’m Asma Ahmed Syrotkin — a software engineer, applied AI builder and cloud-computing student. I currently work across environmental GIS/AI at the Ontario Government, applied AI research at Cominfo, and product engineering through LegalAssist, while leading enterprise-tech and entrepreneurship communities.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.34 }} className="hero-actions">
          <GlowButton href="#projects">
            Explore my work <ArrowRight size={17} />
          </GlowButton>
          <GlowButton href={LINKS.github} secondary external>
            <Github size={17} /> GitHub
          </GlowButton>
          <GlowButton href={LINKS.linkedin} secondary external>
            <Linkedin size={17} /> LinkedIn
          </GlowButton>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="hero-mini-meta">
          <span><MapPin size={15} /> Greater Toronto Area</span>
          <span><GraduationCap size={15} /> Honours BCS • Expected Apr 2027</span>
          <span><BadgeCheck size={15} /> Honor Roll 2023 & 2024</span>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="portrait-shell">
          <div className="portrait-light" />
          <img src="/images/profile-new.png" alt="Asma Ahmed Syrotkin" className="portrait" />
          <div className="portrait-gradient" />
          <div className="portrait-caption">
            <span className="caption-label">Asma Ahmed</span>
            <strong>Software • AI • Cloud</strong>
          </div>
        </div>
        <motion.div className="float-card float-card-a" animate={{ y: [0, -10, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
          <BrainCircuit size={18} /> Applied AI
        </motion.div>
        <motion.div className="float-card float-card-b" animate={{ y: [0, 9, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
          <Cloud size={18} /> Cloud Systems
        </motion.div>
        <motion.div className="float-card float-card-c" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}>
          <Globe2 size={18} /> Geospatial AI
        </motion.div>
      </motion.div>
    </section>
  );
}

function SignalStrip() {
  return (
    <section className="signal-strip section-shell" aria-label="Portfolio highlights">
      {STATS.map(([value, label], index) => (
        <Reveal key={label} delay={index * 0.05}>
          <div className="stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="content-section section-shell">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects that show how I think, build and ship."
        description="Recruiter-first selection: strong software engineering, AI systems, cloud, geospatial intelligence and product thinking — followed by a searchable project vault with the rest of my work."
      />

      <div className="featured-grid">
        {FEATURED_PROJECTS.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal key={project.title} delay={(index % 4) * 0.04}>
              <motion.article whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 260, damping: 22 }} className="project-card glass-card">
                <div className="project-topline">
                  <div className="project-icon"><Icon size={21} /></div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="project-kicker">{project.kicker}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tag-row">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  {project.code && (
                    <a href={project.code} target="_blank" rel="noreferrer"><Github size={16} /> Code <ArrowUpRight size={14} /></a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Demo <ArrowUpRight size={14} /></a>
                  )}
                  {!project.code && !project.demo && (
                    <a href={LINKS.github} target="_blank" rel="noreferrer"><Github size={16} /> Explore GitHub <ArrowUpRight size={14} /></a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>

      <ProjectVault />
    </section>
  );
}

function ProjectVault() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const categories = ["All", "AI / ML", "Geo / Climate", "Full Stack", "Cloud", "Health Tech", "Interactive"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECT_VAULT.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      const matchesQuery = !q || `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  const visible = showAll || query || filter !== "All" ? filtered : filtered.slice(0, 12);

  return (
    <div className="vault glass-card">
      <div className="vault-heading">
        <div>
          <p className="mini-eyebrow">Project vault</p>
          <h3>52+ builds, prototypes, hackathon projects and coursework.</h3>
          <p>Search by project name or browse by area.</p>
        </div>
        <div className="vault-count">{filtered.length}<span>matching</span></div>
      </div>

      <div className="vault-tools">
        <label className="search-box">
          <Search size={17} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects…" />
        </label>
        <div className="filter-row">
          {categories.map((category) => (
            <button key={category} className={cn("filter-chip", filter === category && "active")} onClick={() => setFilter(category)}>
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="vault-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="vault-item"
            >
              <div>
                <span className="vault-category">{project.category}</span>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
              <div className="vault-links">
                {project.code && <a href={project.code} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={16} /></a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} demo`}><ExternalLink size={16} /></a>}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {!query && filter === "All" && filtered.length > 12 && (
        <button className="vault-more" onClick={() => setShowAll((x) => !x)}>
          {showAll ? "Show fewer projects" : `Show all ${filtered.length} projects`} <ChevronRight size={16} className={showAll ? "rotate-90" : ""} />
        </button>
      )}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="content-section section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="I’m already working across software, AI, government data and enterprise tech."
        description="The thread across my roles is consistent: translate ambiguity into useful systems, communicate clearly, and ship work that people can actually use."
      />
      <div className="timeline">
        <div className="timeline-line" />
        {EXPERIENCE.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={`${item.role}-${item.org}`} delay={index * 0.04}>
              <article className="timeline-item">
                <div className="timeline-node"><Icon size={18} /></div>
                <div className="experience-card glass-card">
                  <div className="experience-head">
                    <div>
                      <p>{item.org}</p>
                      <h3>{item.role}</h3>
                    </div>
                    <div className="experience-meta">
                      <span>{item.when}</span>
                      <span>{item.meta}</span>
                    </div>
                  </div>
                  <ul>
                    {item.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={15} /> <span>{bullet}</span></li>)}
                  </ul>
                  <div className="tag-row compact">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

    </section>
  );
}

function Skills() {
  const marquee = ["Python", "React", "Next.js", "FastAPI", "LangGraph", "RAG", "PostgreSQL", "Docker", "AWS", "Azure", "GIS", "IBM Z", "System Design"];
  return (
    <section id="skills" className="content-section section-shell">
      <SectionHeading
        eyebrow="Technical toolkit"
        title="Breadth for consulting. Depth for engineering."
        description="I’m strongest when a problem crosses boundaries — backend + frontend, AI + product, data + users, or technical systems + stakeholder communication."
      />

      <div className="marquee-shell" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((item, i) => <span key={`${item}-${i}`}>{item}<span>✦</span></span>)}
        </div>
      </div>

      <div className="skill-grid">
        {SKILL_GROUPS.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.label} delay={index * 0.04}>
              <motion.article className="skill-card glass-card" whileHover={{ y: -5 }}>
                <div className="skill-icon"><Icon size={20} /></div>
                <h3>{group.label}</h3>
                <div className="skill-list">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Wins() {
  return (
    <section id="wins" className="content-section section-shell">
      <SectionHeading
        eyebrow="Recognition"
        title="Wins, awards and proof that I execute under pressure."
        description="Competition placements, hackathon wins, technical leadership and academic recognition — presented as evidence of how I build, lead and deliver."
      />
      <div className="wins-grid">
        {WINS.map((win, index) => {
          const Icon = win.icon;
          return (
            <Reveal key={win.title} delay={index * 0.04}>
              <motion.article whileHover={{ scale: 1.015, y: -4 }} className="win-card glass-card">
                <div className="win-icon"><Icon size={23} /></div>
                <h3>{win.title}</h3>
                <p className="win-org">{win.org}</p>
                <p>{win.detail}</p>
              </motion.article>
            </Reveal>
          );
        })}
      </div>

      <Reveal>
        <div className="credentials glass-card">
          <div className="credentials-head">
            <div>
              <p className="mini-eyebrow">Additional recognition</p>
              <h3>Academic, scholarship and team achievements</h3>
            </div>
            <Award size={28} />
          </div>
          <div className="credential-cloud">
            {ADDITIONAL_RECOGNITION.map((item) => (
              <span key={item}><CheckCircle2 size={14} /> {item}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Certificates() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const categories = ["All", "AI / ML", "IBM Z", "Cloud / DevOps", "Security", "SWE / Data", "UX / Product", "Other"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CERTIFICATES.filter((certificate) => {
      const matchesFilter = filter === "All" || certificate.category === filter;
      const haystack = `${certificate.title} ${certificate.issuer} ${certificate.category} ${certificate.issued}`.toLowerCase();
      return matchesFilter && (!q || haystack.includes(q));
    });
  }, [query, filter]);

  const visible = showAll || query || filter !== "All" ? filtered : filtered.slice(0, 9);

  return (
    <section id="certificates" className="content-section section-shell">
      <SectionHeading
        eyebrow="Certificates + credentials"
        title="Continuous learning across AI, software, cloud, security and enterprise systems."
        description="A searchable credential wall with direct verification links where available. Badge/media links open the certificate or supporting image hosted on the original credential platform or LinkedIn."
      />

      <div className="vault glass-card">
        <div className="vault-heading">
          <div>
            <p className="mini-eyebrow">Credential library</p>
            <h3>{CERTIFICATES.length} selected certificates and professional credentials.</h3>
            <p>Filter by technical area or search by issuer, course or platform.</p>
          </div>
          <div className="vault-count">{filtered.length}<span>matching</span></div>
        </div>

        <div className="vault-tools">
          <label className="search-box">
            <Search size={17} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certificates…"
            />
          </label>
          <div className="filter-row">
            {categories.map((category) => (
              <button
                key={category}
                className={cn("filter-chip", filter === category && "active")}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="vault-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((certificate) => (
              <motion.article
                layout
                key={`${certificate.title}-${certificate.issuer}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -5 }}
                className="vault-item"
              >
                <div>
                  <div className="project-topline">
                    <div className="project-icon"><BadgeCheck size={20} /></div>
                    <span>{certificate.issued}</span>
                  </div>
                  <span className="vault-category">{certificate.category}</span>
                  <h4>{certificate.title}</h4>
                  <p>{certificate.issuer}</p>
                  <div className="tag-row compact">
                    {certificate.grade && <span>Grade {certificate.grade}</span>}
                    <span>{certificate.issued}</span>
                  </div>
                </div>

                <div className="project-links">
                  {certificate.credential && (
                    <a href={certificate.credential} target="_blank" rel="noreferrer">
                      <BadgeCheck size={16} /> Verify <ArrowUpRight size={14} />
                    </a>
                  )}
                  {certificate.media && (
                    <a href={certificate.media} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} /> Badge / media <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {!query && filter === "All" && filtered.length > 9 && (
          <button className="vault-more" onClick={() => setShowAll((x) => !x)}>
            {showAll ? "Show fewer certificates" : `Show all ${filtered.length} certificates`} <ChevronRight size={16} className={showAll ? "rotate-90" : ""} />
          </button>
        )}
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="content-section section-shell">
      <SectionHeading
        eyebrow="Leadership + impact"
        title="I like building teams and communities as much as products."
        description="This is where my consulting side shows up: stakeholder alignment, communication, events, mentoring, partnerships, service and turning ideas into organized execution."
      />
      <div className="leadership-layout">
        <div className="leadership-grid">
          {LEADERSHIP.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="leadership-card glass-card">
                <HeartHandshake size={20} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.metric}</span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <aside className="education-card glass-card">
            <div className="education-icon"><GraduationCap size={25} /></div>
            <p className="mini-eyebrow">Education</p>
            <h3>Sheridan College</h3>
            <strong>Honours Bachelor of Computer Science • Cloud Computing</strong>
            <p>2023 — Expected April 2027</p>
            <div className="education-badges">
              <span>Honor Roll 2023</span>
              <span>Honor Roll 2024</span>
            </div>
            <div className="education-divider" />
            <p className="education-copy">Relevant study spans data structures & algorithms, AI/ML, cloud systems, databases, software engineering, networking and enterprise computing.</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-shell">
      <Reveal>
        <div className="contact-panel">
          <div className="contact-orb" />
          <div className="contact-copy">
            <p className="mini-eyebrow">Let’s build something useful</p>
            <h2>Looking for a software engineer who can also speak product, AI and stakeholders?</h2>
            <p>I’m interested in software engineering internships and early-career tech roles, especially where AI, cloud, enterprise systems, public-sector technology or technology consulting intersect.</p>
            <div className="contact-actions">
              <GlowButton href={LINKS.email}><Mail size={17} /> Email me</GlowButton>
              <GlowButton href={LINKS.linkedin} secondary external><Linkedin size={17} /> Connect on LinkedIn</GlowButton>
              <GlowButton href={LINKS.github} secondary external><Github size={17} /> Review GitHub</GlowButton>
            </div>
          </div>
          <div className="contact-terminal" aria-hidden="true">
            <div className="terminal-top"><span /><span /><span /></div>
            <code>
              <span className="term-purple">const</span> candidate = {'{'}<br />
              &nbsp;&nbsp;name: <span className="term-green">"Asma Ahmed Syrotkin"</span>,<br />
              &nbsp;&nbsp;focus: [<span className="term-green">"SWE"</span>, <span className="term-green">"AI"</span>, <span className="term-green">"Cloud"</span>],<br />
              &nbsp;&nbsp;ships: <span className="term-purple">true</span>,<br />
              &nbsp;&nbsp;curious: <span className="term-purple">true</span><br />
              {'}'};
            </code>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span>AA</span>
          <div><strong>Asma Ahmed Syrotkin</strong><small>Software • AI • Cloud</small></div>
        </a>
        <nav className="desktop-nav">
          {NAV.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="nav-socials">
          <SocialLink href={LINKS.github} label="GitHub"><Github size={17} /></SocialLink>
          <SocialLink href={LINKS.linkedin} label="LinkedIn"><Linkedin size={17} /></SocialLink>
          <SocialLink href={LINKS.email} label="Email"><Mail size={17} /></SocialLink>
          <button className="menu-button" onClick={() => setOpen((x) => !x)} aria-label="Toggle navigation">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mobile-nav">
            {NAV.map(([href, label]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ChevronRight size={16} /></a>)}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default function Portfolio() {
  useEffect(() => {
    const root = document.documentElement;
    const onMove = (event) => {
      root.style.setProperty("--mouse-x", `${event.clientX}px`);
      root.style.setProperty("--mouse-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="portfolio-shell">
      <AppBackdrop />
      <Header />
      <main>
        <Hero />
        <SignalStrip />
        <FeaturedProjects />
        <Experience />
        <Skills />
        <Wins />
        <Certificates />
        <Leadership />
        <Contact />
      </main>
      <footer className="site-footer section-shell">
        <p>© {new Date().getFullYear()} {NAME}. Built with React, motion and a lot of purple glow.</p>
        <div>
          <SocialLink href={LINKS.github} label="GitHub"><Github size={17} /></SocialLink>
          <SocialLink href={LINKS.linkedin} label="LinkedIn"><Linkedin size={17} /></SocialLink>
          <SocialLink href={LINKS.email} label="Email"><Mail size={17} /></SocialLink>
          <SocialLink href={LINKS.instagram} label="Instagram"><Instagram size={17} /></SocialLink>
        </div>
      </footer>
    </div>
  );
}

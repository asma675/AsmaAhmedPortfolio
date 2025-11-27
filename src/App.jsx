import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  Award,
  Zap,
} from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

/* ---------------- Lightweight UI ---------------- */
const Button = ({
  children,
  asChild,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center rounded-md border text-sm font-medium transition disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
  const variants = {
    default:
      "bg-primary text-primary-foreground hover:opacity-90 border-transparent px-4 py-2",
    secondary:
      "bg-muted text-foreground hover:bg-muted/80 border-transparent px-4 py-2",
    outline: "bg-transparent border-border px-4 py-2",
    ghost: "bg-transparent border-transparent px-2 py-1",
  };
  const sizes = { sm: "text-xs px-3 py-1.5", md: "text-sm px-4 py-2" };
  const cls = `${base} ${
    variants[variant] || variants.default
  } ${sizes[size] || sizes.md} ${className}`;
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${children.props.className || ""} ${cls}`.trim(),
      ...props,
    });
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const Card = ({ className = "", children }) => (
  <div
    className={`group relative rounded-2xl border border-purple-200/20 bg-black/45 shadow-[0_0_22px_rgba(0,0,0,0.8)] backdrop-blur-md transition hover:border-purple-400/90 hover:shadow-[0_0_32px_rgba(168,85,247,0.9)] ${className}`}
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(147,51,234,0.3),_transparent_60%)] opacity-0 blur-xl transition group-hover:opacity-100" />
    <div className="relative">{children}</div>
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-5 border-b border-purple-200/15">{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <h3 className={`text-base font-semibold text-white ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);

/* ---------------- Helpers ---------------- */
const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="scroll-mt-24 py-20" aria-label={title}>
    <div className="mx-auto max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h2 className="inline-block bg-gradient-to-r from-purple-200 via-fuchsia-300 to-purple-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent drop-shadow-[0_0_20px_rgba(0,0,0,0.7)]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-3xl text-purple-50/85 [text-shadow:0_0_10px_rgba(0,0,0,0.6)]">
            {subtitle}
          </p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
);

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

/* ---------------- Data ---------------- */
const NAME = "Asma Ahmed";
const TAGLINE = "Software Engineer • Cloud & Full-Stack";

const INTRO =
  "I’m a software engineer focused on building scalable, user-centric applications across web, cloud, and mobile. I work with React, .NET, Spring Boot, and cloud platforms including AWS, Azure, and GCP.\n\n🎯 Open and actively applying to Internship Opportunities — Software Engineering, Full-Stack Development, Cloud Engineering, and AI/ML engineering roles.\n\nLet’s build something impactful together. Feel free to reach out if you’re hiring.";

const LINKS = {
  resumeUrl:
    "https://www.linkedin.com/in/asma-ahmed67/overlay/1761849807562/single-media-viewer/?profileId=ACoAADRSu5IB5sVYbHSyGtnWPhEcVQmgyeDUzAA",
  github: "https://github.com/asma675",
  linkedin: "https://www.linkedin.com/in/asma-ahmed67",
  email: "mailto:asma.ahmed.work@gmail.com",
  instagramMain: "https://www.instagram.com/asma.a15__/?hl=en",
  instagramHenna: "https://www.instagram.com/henna.hearted/?hl=en",
  instagramPhoto: "https://www.instagram.com/_purelyphotography/?hl=en",
  instagramArt: "https://www.instagram.com/asmaahmedart/?hl=en",
  instagramModel: "https://www.instagram.com/asma.ahmed.model/?hl=en",
};

/* --------- Skills (lego-style tiles with Devicon) --------- */

const SKILLS = [
  // row 1
  { name: "Python", short: "Py", icon: "devicon-python-plain" },
  { name: "Java", short: "Java", icon: "devicon-java-plain" },
  { name: "JavaScript", short: "JS", icon: "devicon-javascript-plain" },
  { name: "TypeScript", short: "TS", icon: "devicon-typescript-plain" },
  { name: "C", short: "C", icon: "devicon-c-plain" },
  { name: "C++", short: "C++", icon: "devicon-cplusplus-plain" },
  { name: "C#", short: "C#", icon: "devicon-csharp-plain" },

  // row 2
  { name: "Go", short: "Go", icon: "devicon-go-plain" },
  { name: "R", short: "R", icon: "devicon-r-plain" },
  { name: "Swift", short: "Swift", icon: "devicon-swift-plain" },
  { name: "HTML5", short: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS3", short: "CSS", icon: "devicon-css3-plain" },
  { name: "Web Design / UI", short: "UI" },

  // row 3
  { name: "API Integration", short: "API" },
  { name: "REST APIs", short: "REST" },
  { name: "React", short: "React", icon: "devicon-react-original" },
  { name: "Redux", short: "Redux" },
  { name: "Node.js", short: "Node", icon: "devicon-nodejs-plain" },
  { name: "Express.js", short: "Express", icon: "devicon-express-original" },

  // row 4 – backend frameworks
  {
    name: "Spring Boot",
    short: "Spring",
    icon: "devicon-spring-plain",
  },
  {
    name: ".NET / ASP.NET Core",
    short: ".NET",
    icon: "devicon-dotnetcore-plain",
  },
  { name: "Thymeleaf", short: "TL" },
  { name: "Bootstrap", short: "BS" },
  { name: "Pygame", short: "PyG" },
  { name: "SQL (General)", short: "SQL" },

  // row 5 – data & infra
  { name: "MySQL", short: "MySQL", icon: "devicon-mysql-plain" },
  { name: "MongoDB", short: "MongoDB", icon: "devicon-mongodb-plain" },
  {
    name: "DynamoDB",
    short: "DDB",
    icon: "devicon-amazonwebservices-plain",
  },
  { name: "Docker", short: "Docker", icon: "devicon-docker-plain" },
  { name: "Kubernetes", short: "K8s", icon: "devicon-kubernetes-plain" },

  // row 6 – cloud
  {
    name: "AWS (Lambda, DynamoDB, S3)",
    short: "AWS",
    icon: "devicon-amazonwebservices-plain-wordmark",
  },
  { name: "Azure", short: "Azure", icon: "devicon-azure-plain" },
  {
    name: "Google Cloud",
    short: "GCP",
    icon: "devicon-googlecloud-plain",
  },
  { name: "Cloud Deployment", short: "Cloud" },

  // row 7 – CS fundamentals
  { name: "Object-Oriented Programming", short: "OOP" },
  { name: "Data Structures", short: "DS" },
  { name: "Algorithms", short: "Algo" },
  { name: "SDLC", short: "SDLC" },
  { name: "Agile & Scrum", short: "Agile" },
  { name: "Test-Driven Development", short: "TDD" },

  // row 8 – tools
  { name: "Git", short: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", short: "GH", icon: "devicon-github-original" },
  { name: "Linux", short: "Linux", icon: "devicon-linux-plain" },

  // row 9 – web / mobile / design
  { name: "Web Development", short: "Web" },
  { name: "Mobile Development", short: "Mobile" },
  { name: "Android", short: "Android", icon: "devicon-android-plain" },
  { name: "Photoshop", short: "Ps", icon: "devicon-photoshop-plain" },
];

/* --------- Projects --------- */
const PROJECTS = [
  {
    title: "LYTHOS — AI-Powered Carbon Offset Feasibility",
    blurb:
      "Transforms Canadian industrial emissions and policy data into decision-ready carbon offset intelligence, helping industrial facilities cut emissions while protecting communities, ecosystems, and Indigenous lands.",
    stack: ["GHGRP Data", "Python", "Space Data", "Leaflet", "ESG", "AI"],
    links: {
      demo: "#",
      code: "https://github.com/asma675/BramHacks25.git",
    },
  },
  {
    title: "LYTHOS — Space Data + AI for Ethical Critical Mineral Exploration",
    blurb:
      "Uses Sentinel-2 spectral indices, GEDI forest structure, and GRACE-FO groundwater stress to identify low-impact exploration zones, flag high-risk no-go areas, and support protection-first critical mineral siting across Canada.",
    stack: [
      "Sentinel-2",
      "GEDI",
      "GRACE-FO",
      "Leaflet",
      "NASA GIBS",
      "ESA Copernicus",
      "Python",
    ],
    links: {
      demo: "#",
      code: "https://github.com/asma675/LYTHOS_Space-Data-AI-for-Ethical-Critical-Mineral-Exploration_BramHacks_Hackathon-Project-.git",
    },
  },
  {
    title: "WeatherWise – Cloud Application",
    blurb:
      "Cloud-ready weather dashboard using OpenWeatherMap API, designed with Government of Canada cloud standards in mind. Uses AWS Amplify, serverless APIs, and DynamoDB/localStorage fallback for resilience.",
    stack: ["AWS Amplify", "Lambda", "API Gateway", "DynamoDB", "JavaScript"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "CareerLift AI – Résumé Insights Platform",
    blurb:
      "Full-stack AI platform that scores résumé–job fit, detects missing skills, and recommends courses and opportunities. Built for Sheridan Datathon 2025 (Top 5 overall, Top 2 Best Use of Gemini).",
    stack: ["React", "Tailwind", "Firebase", "Firestore", "Google Gemini", "Node.js"],
    links: {
      demo: "https://devpost.com/software/careerlift-ai",
      code: "https://github.com/asma675/CareerLiftAI",
    },
  },
  {
    title: "Asma Gym — Membership Signup & Admin Portal",
    blurb:
      "End-to-end membership signup experience using ASP.NET Core (.NET 8) with validation, admin search, and Swagger-documented APIs that feel like a real gym production system.",
    stack: [".NET 8", "ASP.NET Core", "Bootstrap", "Swagger"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Word Rewriter – Chrome Extension",
    blurb:
      "Google Chrome Built-in AI Challenge 2025 submission. Lets users highlight text on any page and instantly get simplified or rephrased versions using on-device Gemini Nano, keeping everything private and fast.",
    stack: ["JavaScript", "Chrome APIs", "Tailwind CSS", "Gemini Nano"],
    links: {
      demo: "https://github.com/asma675/WordRewriter_ChromeExtension_Google-Chrome-Built-in-AI-Challenge-2025",
      code: "https://github.com/asma675/WordRewriter_ChromeExtension_Google-Chrome-Built-in-AI-Challenge-2025",
    },
  },
];

/* --------- Hackathon Experience --------- */
const HACKATHONS = [
  {
    title: "LYTHOS — Space Data + AI for Ethical Critical Mineral Exploration",
    event: "BramHacks 2025 • Sustainability",
    role: "Product Lead · Data/AI Engineer · Full Stack",
    outcome:
      "Fused Sentinel-2, GEDI, and GRACE-FO datasets into an ethical siting engine that flags no-go zones and highlights low-impact exploration regions. Received a 95% judging score and delivered a working demo in under 48 hours.",
    stack: [
      "Sentinel-2",
      "GEDI",
      "GRACE-FO",
      "Leaflet",
      "NASA GIBS",
      "ESA Copernicus",
      "Python",
    ],
    link: "#",
  },
  {
    title:
      "LYTHOS — AI-Powered Carbon Offset Feasibility for Canadian Industrial Facilities",
    event: "BramHacks 2025 • Climate & ESG",
    role: "Frontend / Full-Stack Engineer · Maps & Data",
    outcome:
      "Built emissions-aware intelligence for 800+ Canadian facilities with 5 years of history, generating AI compliance briefs and credit feasibility scores in under 5 minutes per facility.",
    stack: ["GHGRP", "Space Data", "Leaflet", "Risk Models", "ESG", "AI"],
    link: "#",
  },
  {
    title: "CareerLift AI – Smarter Résumés, Stronger Futures",
    event: "Sheridan Datathon 2025",
    role: "Full-Stack Developer · AI Engineer",
    outcome:
      "Top 5 overall and Top 2 finalist for Best Use of Gemini; delivered a complete AI product within 24 hours.",
    stack: ["React", "Tailwind", "Firebase", "Firestore", "Google Gemini", "Node.js"],
    link: "https://devpost.com/software/careerlift-ai",
  },
  {
    title: "ShareMeal – Food Rescue & Hunger Relief",
    event: "UN SDG Hackathon (SDG 1 & 2)",
    role: "Team Lead · Full-Stack Mobile",
    outcome:
      "Led a 4-member team to build a cross-platform app connecting surplus food from restaurants to nearby food banks.",
    stack: [".NET MAUI", "C#", "Firebase"],
    link: "https://devpost.com/software/sharemeal",
  },
  {
    title: "Word Rewriter – Chrome Extension",
    event: "Google Chrome Built-in AI Challenge 2025",
    role: "Frontend & UI Engineer (Hackathon Submission)",
    outcome:
      "Designed and implemented a Chrome extension that lets users highlight any text and instantly get simplified or rephrased explanations using on-device Gemini Nano, keeping latency low and data private.",
    stack: ["JavaScript", "Chrome APIs", "Tailwind CSS", "Gemini Nano"],
    link: "https://github.com/asma675/WordRewriter_ChromeExtension_Google-Chrome-Built-in-AI-Challenge-2025",
  },
];

/* --------- Experience --------- */
const EXPERIENCE = [
  {
    role: "Founding President & President",
    org: "Sheridan UNSA (United Nations Student Association)",
    when: "Nov 2025 – Present · Oakville, ON (Hybrid)",
    bullets: [
      "Founded Sheridan’s first UN-focused student association to create space for global affairs, SDGs, and humanitarian dialogue on campus.",
      "Recruited and led an executive team, defined club mission, and launched the first recruitment + info campaign across Sheridan campuses.",
      "Planned events around UN Sustainable Development Goals, including panel ideas, fundraisers, and collaborations with other clubs.",
      "Represent Sheridan UNSA to Sheridan Student Union, managing approvals, communications, and long-term club strategy.",
    ],
  },
  {
    role: "Social Media Manager",
    org: "IBM Z Sheridan",
    when: "Nov 2025 – Present · Oakville, ON (Hybrid)",
    bullets: [
      "Lead social media strategy, branding, and content for the IBM Z Sheridan community across multiple platforms.",
      "Plan, schedule, and publish posts that highlight events, workshops, hackathons, and student accomplishments.",
      "Collaborate with technical clubs and campus partners to grow IBM Z awareness and student engagement.",
      "Track analytics and refine campaigns to increase reach, engagement, and interest in mainframe + AI topics.",
    ],
  },
  {
    role: "Hackathon Team Lead (Multiple Events)",
    org: "Self-Employed · Sheridan College & External Hackathons",
    when: "Sep 2025 – Present · Greater Toronto Area (Hybrid)",
    bullets: [
      "Led cross-functional teams across 5+ hackathons including Sheridan Datathon, BramHacks, UN SDG Hackathon 1 & 2, and the Google Chrome AI Challenge.",
      "Coordinated team roles, product direction, sprint planning, and final pitch strategy under tight 24–48 hour timelines.",
      "Achieved Top 5 overall and Top 2 finalist for Best Use of Gemini at Sheridan Datathon 2025 with CareerLift AI.",
      "Guided development using React, Next.js, Firebase, AWS, Gemini AI, and cloud-native tooling for impactful demos.",
    ],
  },
  {
    role: "Private Tutor – Nursing (BScN) & Computer Science (B.Sc.)",
    org: "Self-Employed",
    when: "Aug 2025 – Present · Greater Toronto Area (Hybrid)",
    bullets: [
      "Support university students in Nursing, Computer Science, and related fields through 1:1 Zoom and in-person sessions.",
      "Create customized notes, Quizlets, and study plans that simplify complex medical and technical concepts.",
      "Help students build confidence, problem-solving ability, and critical thinking, leading to noticeable grade improvement.",
      "Use tools like Google Workspace, Zoom, Discord, Slack, and Teams to keep learning organized and interactive.",
    ],
  },
  {
    role: "Intern",
    org: "Hon. Shafqat Ali, M.P. – Brampton Centre & President of the Treasury Board of Canada",
    when: "Jun 2025 – Present · Brampton, ON (Hybrid)",
    bullets: [
      "Assist with legislative research, constituency outreach, and daily office operations in a fast-paced political environment.",
      "Welcome constituents, manage calls and email correspondence, and support timely responses to community needs.",
      "Attend local events with the MP, capture and edit photos for social media and media releases, and maintain a digital media library.",
      "Contribute to event planning, policy briefings, and communications related to Treasury Board priorities.",
    ],
  },
  {
    role: "Model",
    org: "M Models & Talent Agency",
    when: "May 2025 – Present · Toronto, ON (On-site)",
    bullets: [
      "Collaborate with photographers, stylists, and creative teams on fashion, lifestyle, and commercial shoots.",
      "Participate in editorial, brand, and digital campaigns while maintaining professionalism in dynamic environments.",
      "Represent client brands with confidence, creativity, and attention to detail across print and digital platforms.",
    ],
  },
  {
    role: "IT Assistant / Helpdesk",
    org: "Niagara College, Welland, ON",
    when: "Sept 2018 – Apr 2019",
    bullets: [
      "Resolved 100+ weekly hardware, software, and account issues for students and staff.",
      "Supported software installs, system updates, and troubleshooting across campus labs and offices.",
      "Collaborated with IT teams to streamline recurring troubleshooting tasks and improve response times.",
    ],
  },
];

/* --------- Education --------- */
const EDUCATION = [
  {
    school: "Sheridan College, Oakville, ON",
    degree:
      "Honours Bachelor of Computer Science (HBSc), Cloud Computing Specialization",
    gpa: "Expected Graduation: 2027 · Honour Roll 2023 & 2025",
    clubs:
      "Founding President, Sheridan UNSA (United Nations Student Association); Social Media Manager & Member – IBM Z Sheridan; Google Developer Club; Sheridan Computer Science Club; Sparta.codes; Women in Business & Technology; MSA; Pakistani Student Association (HMC); Palestine Cultural Club (PCC)",
    coursework:
      "Software Design, Operating Systems, Programming Principles, Embedded Systems, Cloud Infrastructure, Information Systems Security",
  },
];

/* --------- Achievements (unchanged) --------- */
const ACHIEVEMENTS = [
  "Recognized for outstanding analytical and troubleshooting ability in IT support and academic projects.",
  "Sheridan Datathon 2025 — CareerLift AI (Top 5 Overall | Top 2 Finalist for Best Use of Gemini).",
  "Developed LYTHOS for BramHacks 2025, integrating space data and AI for ethical critical mineral exploration.",
  "Built an AI-powered Word Rewriter Chrome Extension for the Google Chrome Built-in AI Challenge 2025.",
];

/* --------- Beyond Tech / Certifications / Volunteering (shortened) --------- */

const CERTIFICATIONS = [
  {
    name: "Foundations of Cybersecurity (98.8%)",
    org: "Google (Coursera)",
    issued: "Nov 2025",
    details:
      "Security foundations, threat modeling, incident response, and hands-on labs with Python and Bash.",
  },
  {
    name: "IBM Developer for z/OS Basics",
    org: "IBM",
    issued: "Nov 2025",
    details: "Mainframe concepts, tooling, and workflows on IBM Z.",
  },
  {
    name: "IBM Ethical Hacking with Open Source Tools (100%)",
    org: "IBM / Skillup.co",
    issued: "Nov 2025",
    details:
      "Ethical hacking methodology, reconnaissance, exploitation labs, and defensive security thinking.",
  },
  {
    name: "Machine Learning with Python (95.7%)",
    org: "IBM (Coursera)",
    issued: "Nov 2025",
    details:
      "Supervised/unsupervised learning, model evaluation, and Python-based ML workflows.",
  },
  {
    name: "Understanding and Visualizing Data with Python (95.5%)",
    org: "University of Michigan (Coursera)",
    issued: "Nov 2025",
    details: "Pandas, NumPy, and visualization for data storytelling.",
  },
];

const VOLUNTEERING = [
  {
    role: "Fundraising Volunteer",
    org: "Human Appeal – ISNA Gala",
    when: "Sep 2025",
    details:
      "Supported fundraising for Gaza using POS systems to collect donations; helped raise $40,000 in one evening.",
  },
  {
    role: "Ramadan Volunteer",
    org: "Bramalea Islamic Cultural Centre (BICC)",
    when: "Apr 2022",
    details:
      "Helped set up and close daily iftar events and prayers, supporting a welcoming community worship space.",
  },
  {
    role: "Screener",
    org: "William Osler Health System",
    when: "Sep 2021 – Mar 2022",
    details:
      "Completed 100+ volunteer hours greeting visitors, performing COVID-19 screening, and enforcing PPE protocols.",
  },
];

const BEYOND = [
  {
    title: "Henna / Mehndi",
    subtitle: "Bridal • party • cones • aftercare",
    link: LINKS.instagramHenna,
    cta: "See Henna Work",
    images: [
      "/images/Screenshot 2025-11-02 231432.png",
      "/images/Screenshot 2025-11-02 231505.png",
      "/images/Screenshot 2025-11-02 231559.png",
    ],
  },
  {
    title: "Photography",
    subtitle: "urban • nature • lifestyle",
    link: LINKS.instagramPhoto,
    cta: "See Photos",
    images: [
      "/images/Screenshot 2025-11-02 231648.png",
      "/images/Screenshot 2025-11-02 231806.png",
      "/images/Screenshot 2025-11-02 231716.png",
    ],
  },
  {
    title: "Art & Illustration",
    subtitle: "acrylic • realistic art • sketches",
    link: LINKS.instagramArt,
    cta: "See Art",
    images: [
      "/images/Screenshot 2025-11-02 232002.png",
      "/images/Screenshot 2025-11-02 232026.png",
      "/images/Screenshot 2025-11-02 232101.png",
    ],
  },
  {
    title: "Modeling",
    subtitle: "photoshoots • portraits • collabs",
    link: LINKS.instagramModel,
    cta: "See Modeling",
    images: [
      "/images/Screenshot 2025-11-02 231100.png",
      "/images/Screenshot 2025-11-02 232613.png",
      "/images/Screenshot 2025-11-02 232710.png",
    ],
  },
  {
    title: "Tutoring",
    subtitle: "Computer Science • Nursing • High school students",
    link: LINKS.instagramMain,
    cta: "DM for tutoring inquiries",
    images: ["/images/1551131919234.jpeg"],
  },
];

/* --------- Logo Badge for Certifications --------- */
const getLogoConfig = (org) => {
  const name = org.toLowerCase();
  if (name.includes("google")) {
    return {
      label: "G",
      className:
        "bg-gradient-to-br from-emerald-400 via-yellow-300 to-red-500 text-slate-900",
    };
  }
  if (name.includes("ibm")) {
    return {
      label: "IBM",
      className:
        "bg-gradient-to-br from-blue-400 to-blue-700 text-white tracking-tighter",
    };
  }
  if (name.includes("university of michigan")) {
    return {
      label: "U",
      className: "bg-gradient-to-br from-yellow-300 to-amber-500 text-slate-900",
    };
  }
  if (name.includes("government of canada")) {
    return {
      label: "CA",
      className: "bg-gradient-to-br from-red-500 to-rose-700 text-white",
    };
  }
  return {
    label: org.charAt(0).toUpperCase(),
    className: "bg-gradient-to-br from-purple-400 to-purple-700 text-white",
  };
};

const LogoBadge = ({ org }) => {
  const cfg = getLogoConfig(org);
  return (
    <div className="flex items-center gap-2">
      <div
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold shadow-[0_0_10px_rgba(0,0,0,0.4)] ${cfg.className}`}
      >
        {cfg.label}
      </div>
      <span className="text-[11px] text-purple-100/90">{org}</span>
    </div>
  );
};

/* ---------------- Particles ---------------- */
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, area: 800 } },
    color: { value: "#a855f7" },
    links: { enable: true, distance: 150, color: "#a855f7", opacity: 0.35, width: 1 },
    move: { enable: true, speed: 1, outModes: { default: "bounce" } },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    modes: { repulse: { distance: 100 } },
  },
};

/* ---------------- Main Portfolio Component ---------------- */
export default function App() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      className="group min-h-screen text-white antialiased relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(24, 0, 45, 0.85), rgba(12, 0, 30, 0.97)), url('/images/purple-digital-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Purple halo */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(147,51,234,0.45),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(88,28,135,0.6),_transparent_60%)]" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        className="pointer-events-none absolute inset-0 -z-10"
        options={particlesOptions}
        init={async (engine) => {
          await loadFull(engine);
        }}
      />

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b border-purple-300/20 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-[0_0_18px_rgba(168,85,247,0.9)]">
              AA
            </div>
            <span className="hidden sm:inline text-white tracking-tight">
              Asma Ahmed
            </span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {[
              { href: "#home", label: "Home" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#hackathons", label: "Hackathons" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#achievements", label: "Achievements" },
              { href: "#certifications", label: "Certifications" },
              { href: "#volunteering", label: "Volunteering" },
              { href: "#beyond", label: "Beyond Tech" },
              { href: "#interests", label: "Other Interests" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.18em] text-purple-100/80 transition hover:text-white hover:[text-shadow:0_0_12px_rgba(168,85,247,0.9)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <a
              aria-label="GitHub"
              href={LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-purple-100/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              aria-label="LinkedIn"
              href={LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-purple-100/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              aria-label="Email"
              href={LINKS.email}
              className="rounded-md p-2 text-purple-100/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              aria-label="Instagram"
              href={LINKS.instagramMain}
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-purple-100/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-300/40 bg-black/60 px-4 py-1 text-[11px] text-purple-50 shadow-[0_0_18px_rgba(0,0,0,0.8)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-300" />
              </span>
              <span className="font-semibold tracking-wide uppercase text-purple-100">
                Now open to
              </span>
              <span className="text-[10px] text-purple-100/80">
                SWE · Full-Stack · Cloud · AI/ML · Security / DevOps
              </span>
            </div>

            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-purple-200/90 [text-shadow:0_0_10px_rgba(0,0,0,0.7)]">
              Portfolio
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.75)]">
              {NAME}
            </h1>
            <p className="mt-3 text-lg text-purple-100 [text-shadow:0_0_12px_rgba(0,0,0,0.7)]">
              {TAGLINE}
            </p>
            <p className="mt-5 max-w-3xl whitespace-pre-line text-balance text-purple-50/95 [text-shadow:0_0_10px_rgba(0,0,0,0.6)]">
              {INTRO}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="gap-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-purple-400 hover:brightness-110 text-white shadow-[0_0_22px_rgba(168,85,247,0.9)] border-transparent"
              >
                <a href={LINKS.resumeUrl} download="Asma_Ahmed_Resume.pdf">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button
                asChild
                className="gap-2 bg-purple-700/90 hover:bg-purple-800 text-white shadow-lg border-purple-300/60"
              >
                <a href={LINKS.resumeUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> View PDF
                </a>
              </Button>
              <Button
                asChild
                className="gap-2 bg-transparent border border-purple-300/70 text-purple-100 hover:bg-purple-900/40 hover:text-white"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-purple-900/50 via-purple-900/10 to-transparent" />
      </section>

      {/* Skills */}
      <Section
        id="skills"
        title="Skills & Technologies"
        subtitle="A focused view of the tools I use to build, ship, and scale products."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.02}>
              <div className="group relative flex h-24 flex-col items-center justify-center rounded-2xl border border-purple-500/30 bg-gradient-to-b from-slate-950/95 via-purple-900/40 to-black/95 shadow-[0_0_16px_rgba(0,0,0,0.9)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_0_26px_rgba(168,85,247,0.7)] overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.35),transparent_60%),radial-gradient(circle_at_bottom,_rgba(126,34,206,0.4),transparent_60%)]" />
                <div className="relative flex flex-col items-center">
                  {skill.icon ? (
                    <i
                      className={`${skill.icon} text-3xl md:text-4xl drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]`}
                    />
                  ) : (
                    <span className="text-xl md:text-2xl font-semibold text-purple-200 drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]">
                      {skill.short}
                    </span>
                  )}
                  <span className="mt-1 text-[11px] md:text-xs text-purple-100 tracking-tight text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work and experiments.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.04}>
              <Card className="group h-full">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span>{p.title}</span>
                    <span className="text-[10px] font-normal text-purple-100/80 text-right">
                      {p.stack.join(" · ")}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-50/90 leading-relaxed">
                    {p.blurb}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.links.demo && p.links.demo !== "#" && (
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-purple-700 hover:bg-purple-800 text-white border-transparent"
                      >
                        <a
                          href={p.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Demo / Devpost
                        </a>
                      </Button>
                    )}
                    {p.links.code && p.links.code !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-purple-200/60 text-purple-50 hover:bg-purple-900/40"
                      >
                        <a
                          href={p.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <Github className="h-3.5 w-3.5" /> Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Hackathon Experience */}
      <Section
        id="hackathons"
        title="Hackathon Experience"
        subtitle="Rapid prototyping under pressure — AI, cloud, and social impact."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {HACKATHONS.map((h, i) => (
            <FadeIn key={h.title} delay={i * 0.05}>
              <Card className="group h-full">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-purple-300" />
                      {h.title}
                    </span>
                    <span className="text-[11px] font-normal text-purple-100/85 text-right">
                      {h.event}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-purple-200/95 font-medium">{h.role}</p>
                  <p className="mt-2 text-sm text-purple-50/95 leading-relaxed">
                    {h.outcome}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {h.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-purple-300/40 bg-purple-700/35 px-2.5 py-0.5 text-[10px] text-purple-50/95"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {h.link && (
                    <div className="mt-4">
                      <Button
                        asChild
                        size="sm"
                        className="bg-purple-700 hover:bg-purple-800 text-white border-transparent"
                      >
                        <a
                          href={h.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> View on Devpost /
                          GitHub
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        title="Relevant Experience"
        subtitle="Highlights from roles, leadership, and internships."
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-purple-300/80 via-purple-500/40 to-transparent md:block" />
          <ul className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={e.role + e.org} delay={i * 0.05}>
                <li className="relative md:pl-10">
                  <div className="hidden md:block absolute left-[12px] top-1 h-3 w-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
                  <div className="rounded-2xl border border-purple-300/25 bg-black/55 p-5 shadow-sm backdrop-blur-md">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {e.role}{" "}
                        <span className="text-purple-100/80 font-normal">• {e.org}</span>
                      </h3>
                      <span className="text-sm text-purple-100/75">{e.when}</span>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-purple-50/95">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Section>

      {/* Education */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic background and coursework."
      >
        {EDUCATION.map((ed) => (
          <FadeIn key={ed.school}>
            <Card className="border-purple-300/25 bg-black/50 shadow-sm">
              <CardContent>
                <h3 className="text-lg font-semibold text-white">{ed.school}</h3>
                <p className="text-sm text-purple-50/90 mt-1">{ed.degree}</p>
                <p className="text-sm text-purple-50/90 mt-1">{ed.gpa}</p>
                <p className="text-sm text-purple-50/90 mt-1">Clubs: {ed.clubs}</p>
                <p className="text-sm text-purple-50/90 mt-1">
                  Relevant Coursework: {ed.coursework}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </Section>

      {/* Achievements */}
      <Section
        id="achievements"
        title="Achievements"
        subtitle="Recognition, hackathons, and key milestones."
      >
        <div className="grid gap-4 max-w-3xl">
          {ACHIEVEMENTS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <Card className="border-purple-300/25 bg-black/50 shadow-sm">
                <CardContent className="flex items-start gap-3">
                  <Award className="mt-0.5 h-4 w-4 text-amber-300 shrink-0" />
                  <p className="text-sm text-purple-50/95">{item}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section
        id="certifications"
        title="Licenses & Certifications"
        subtitle="Upskilling across software engineering, security, data, cloud, and more."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {CERTIFICATIONS.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.03}>
              <Card className="border-purple-300/25 bg-black/55">
                <CardContent>
                  <div className="flex items-start justify-between gap-2">
                    <LogoBadge org={c.org} />
                    <span className="text-[11px] text-purple-100/80 whitespace-nowrap">
                      {c.issued}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-white">{c.name}</h3>
                  <p className="mt-2 text-xs text-purple-50/95 leading-relaxed">
                    {c.details}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Volunteering */}
      <Section
        id="volunteering"
        title="Volunteering"
        subtitle="Service, community, and impact beyond the classroom."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {VOLUNTEERING.map((v, i) => (
            <FadeIn key={v.role + v.org} delay={i * 0.04}>
              <Card className="border-purple-300/25 bg-black/55">
                <CardContent>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {v.role} •{" "}
                        <span className="font-normal text-purple-100/80">
                          {v.org}
                        </span>
                      </h3>
                    </div>
                    <span className="text-[11px] text-purple-100/75 whitespace-nowrap">
                      {v.when}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-purple-50/95 leading-relaxed">
                    {v.details}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Beyond Tech */}
      <Section
        id="beyond"
        title="Beyond Tech"
        subtitle="Outside software, I’m a creative—henna artist, photographer, illustrator, model, and tutor."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {BEYOND.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.05}>
              <Card className="border-purple-300/25 bg-black/50 h-full">
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between gap-2">
                    <span>{b.title}</span>
                    <span className="text-xs font-normal text-purple-100/80">
                      {b.subtitle}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className={`grid ${
                      b.images.length === 1 ? "grid-cols-1" : "grid-cols-3"
                    } gap-2`}
                  >
                    {b.images.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={b.title}
                        className="aspect-square w-full rounded-lg object-cover border border-purple-200/30"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-purple-700 hover:bg-purple-800 text-white border-transparent"
                    >
                      <a
                        href={b.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        <Instagram className="h-3.5 w-3.5" /> {b.cta}
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-purple-200/40 text-purple-50 hover:bg-purple-900/40"
                    >
                      <a
                        href={b.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Open
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Other Interests */}
      <Section
        id="interests"
        title="Other Interests"
        subtitle="What I enjoy beyond keyboards and code."
      >
        <FadeIn>
          <Card className="border-purple-300/25 bg-black/55 backdrop-blur-md shadow-sm">
            <CardContent>
              <p className="text-purple-50/95 leading-relaxed">
                Outside of my creative work, I love staying active and grounded. I
                play on a basketball team and a flag football team, jump into
                volleyball games when I can, and enjoy biking and long walks. I
                enjoy true-crime &amp; horror and DC movies/shows, and I unwind with
                LEGO builds and puzzles. I also love volunteering, gardening, baking,
                and cooking. I’m passionate about science, keeping up with new
                breakthroughs, discoveries, and innovations. Time with friends and
                family is really important to me, and my faith in Islam helps ground
                my decisions and goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Basketball",
                  "Flag Football",
                  "Volleyball",
                  "Biking",
                  "Long Walks",
                  "True Crime & Horror",
                  "LEGO & Puzzles",
                  "Gardening",
                  "Baking",
                  "Cooking",
                  "Science & Discovery",
                  "Friends & Family",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-purple-300/30 bg-purple-900/40 px-3 py-1 text-xs text-purple-50/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </Section>

      {/* Footer */}
      <footer className="border-t border-purple-300/25 py-10 bg-black/65">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-purple-100/85">
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-purple-100/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
              >
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2 inline-flex items-center"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-purple-100/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
              >
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2 inline-flex items-center"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-purple-100/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
              >
                <a href={LINKS.email} className="gap-2 inline-flex items-center">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-purple-100/85 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
              >
                <a
                  href={LINKS.instagramMain}
                  target="_blank"
                  rel="noreferrer"
                  className="gap-2 inline-flex items-center"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

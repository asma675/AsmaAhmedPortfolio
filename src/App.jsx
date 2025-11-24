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
    className={`relative rounded-2xl border border-purple-200/20 bg-black/45 shadow-[0_0_22px_rgba(0,0,0,0.8)] backdrop-blur-md transition hover:border-purple-400/90 hover:shadow-[0_0_32px_rgba(168,85,247,0.9)] ${className}`}
  >
    {/* glow border */}
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
const CardContent = ({ children }) => <div className="p-5">{children}</div>;

/* ---------------- Helpers ---------------- */
const Section = ({ id, title, subtitle, children }) => {
  return (
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
};

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
  instagramHenna: "https://www.instagram.com/henna.hearted/?hl=en",
  instagramPhoto: "https://www.instagram.com/_purelyphotography/?hl=en",
  instagramArt: "https://www.instagram.com/asmaahmedart/?hl=en",
  instagramModel: "https://www.instagram.com/asma.ahmed.model/?hl=en",
};

const SKILLS = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "C#",
  "Go",
  "R",
  "Swift",
  "HTML",
  "CSS",
  "Web Design",
  "API Integration",
  "REST APIs",
  "React",
  "Redux",
  "Node.js",
  "Express.js",
  "Spring Boot",
  ".NET",
  "Thymeleaf",
  "Bootstrap",
  "Pygame",
  "SQL",
  "MySQL",
  "Docker",
  "Kubernetes",
  "AWS",
  "Azure",
  "Google Cloud",
  "Cloud Deployment",
  "OOP",
  "Data Structures",
  "Algorithms",
  "SDLC",
  "Agile",
  "TDD",
  "Git",
  "GitHub",
  "Linux",
  "Web Development",
  "Mobile Development",
  "Android",
];

/* --------- Updated Projects --------- */
const PROJECTS = [
  {
    title: "LYTHOS — AI-Powered Carbon Offset Feasibility",
    blurb:
      "Transforms Canadian industrial emissions + satellite data into decision-ready carbon offset intelligence, helping protect communities, ecosystems, and Indigenous lands while supporting net-zero goals.",
    stack: ["Space Data", "Python", "Leaflet", "ESG", "AI"],
    links: {
      demo: "#",
      code: "#",
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
      "Google Chrome Built-in AI Challenge 2025 submission. Lets users highlight text on any page and instantly get simplified or rephrased versions using on-device Gemini Nano.",
    stack: ["JavaScript", "Chrome APIs", "Tailwind CSS", "Gemini Nano"],
    links: {
      demo: "https://github.com/asma675/WordRewriter_ChromeExtension_Google-Chrome-Built-in-AI-Challenge-2025",
      code: "https://github.com/asma675/WordRewriter_ChromeExtension_Google-Chrome-Built-in-AI-Challenge-2025",
    },
  },
  {
    title: "ShareMeal App | Hackathon Project (UN SDG 1 & 2)",
    blurb:
      "Cross-platform app connecting restaurants with surplus food to nearby food banks and shelters. Led a 4-member team to design, build, and present a social-impact solution against hunger and food waste.",
    stack: [".NET MAUI", "C#", "Firebase"],
    links: {
      demo: "https://devpost.com/software/sharemeal",
      code: "#",
    },
  },
  {
    title: "Azure Cloud Infrastructure Lab",
    blurb:
      "Deployed and configured VMs, networking, and firewalls in Microsoft Azure while practicing security, scaling, and infrastructure automation.",
    stack: ["Azure", "VMs", "Networking", "Security"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "DriveWellApp (C# + .NET MAUI + Cloud)",
    blurb:
      "Cross-platform app for auto dealerships and enthusiasts with cloud integration, focusing on clean architecture, OO design, and iterative development.",
    stack: [".NET MAUI", "C#", "Cloud", "OOP"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Full-Stack Web App (React + Node.js + MongoDB)",
    blurb:
      "Responsive platform with user authentication, CRUD operations, and REST APIs backed by MongoDB for persistent, real-world data flows.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "PasswordStore (Spring Boot + H2)",
    blurb:
      "Secure password manager with CRUD operations, REST APIs, and MVC structure using Spring Boot, Spring Data JPA, and Thymeleaf.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "H2", "Thymeleaf"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Rock-Paper-Scissors Game App (.NET MAUI)",
    blurb:
      "Interactive mobile game with GUI, randomization logic, and persistent score tracking, built using agile and iterative practices.",
    stack: [".NET MAUI", "C#", "Mobile"],
    links: {
      demo: "#",
      code: "#",
    },
  },
  {
    title: "Student Records Portal (SQL Server + HTML/CSS)",
    blurb:
      "Secure student database system with SQL queries, normalization, and a simple web UI for viewing and managing academic records.",
    stack: ["SQL Server", "HTML", "CSS"],
    links: {
      demo: "#",
      code: "#",
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
      "95% judging score, built in under 48 hours with live A+B region demo for Northern Ontario Nickel and NWT Lithium.",
    stack: ["Sentinel-2", "GEDI", "GRACE-FO", "Leaflet", "NASA GIBS", "ESA Copernicus"],
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
    title: "MoneyMaker – Financial Wellness & Coaching",
    event: "Hackathon Project",
    role: "Full-Stack · Product",
    outcome:
      "Prototype focused on helping users build better money habits and financial confidence through guided flows.",
    stack: ["React", "Node.js", "APIs"],
    link: "https://devpost.com/software/moneymaker-hcy5gi",
  },
];

const EXPERIENCE = [
  {
    role: "IT Assistant / Helpdesk",
    org: "Niagara College, Welland, ON",
    when: "Sept 2018 – Apr 2019",
    bullets: [
      "Resolved 100+ weekly hardware/software and account issues, improving turnaround time by ~30%.",
      "Assisted with software installations, system updates, and hardware configurations for campus-wide IT systems.",
      "Diagnosed connectivity problems and supported campus-wide installs and system updates.",
      "Collaborated with technical teams to automate recurring troubleshooting tasks.",
    ],
  },
];

const EDUCATION = [
  {
    school: "Sheridan College, Oakville, ON",
    degree:
      "Bachelor of Science in Computer Science (Co-op), Cloud Computing Specialization - Expected April 2027",
    gpa: "GPA: 3.27 | 2023–Present",
    clubs: "Google Developer Club, MSA",
    coursework:
      "Software Design, Operating Systems, Programming Principles, Embedded Systems, Cloud Infrastructure, Information Systems Security",
  },
];

const ACHIEVEMENTS = [
  "Recognized for outstanding analytical and troubleshooting ability in IT support role.",
  "Sheridan Datathon 2025 — CareerLift AI (Top 5 Overall | Top 2 Finalist for Best Use of Gemini). Built an AI-powered résumé insights platform that scores job fit, identifies skill gaps, and generates personalized upskilling paths using Gemini.Earned Top 5 placement and Top 2 finalist recognition for Best Use of Gemini among all competing teams. Demonstrated responsible, structured AI prompting and delivered a polished React + Firebase application within 24 hours."
  "Finalist in GDG Frontend Challenge for innovative design and technical implementation.",
  "Developed ShareMeal during GNEC Hackathon 2025 (UN-Affiliated/NGO category), promoting food sharing and sustainability.",
  "Built an AI-powered Rewriter Tool for Google Chrome Built-in AI Challenge 2025, enhancing content generation through generative AI.",
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
  if (name.includes("mongo")) {
    return {
      label: "M",
      className: "bg-gradient-to-br from-emerald-400 to-emerald-700 text-slate-900",
    };
  }
  if (name.includes("university of michigan")) {
    return {
      label: "U",
      className: "bg-gradient-to-br from-yellow-300 to-amber-500 text-slate-900",
    };
  }
  if (name.includes("canadian red cross")) {
    return {
      label: "✚",
      className: "bg-gradient-to-br from-red-400 to-red-700 text-white",
    };
  }
  if (name.includes("government of canada")) {
    return {
      label: "CA",
      className: "bg-gradient-to-br from-red-500 to-rose-700 text-white",
    };
  }
  if (name.includes("mlpao") || name.includes("medical laboratory")) {
    return {
      label: "ML",
      className: "bg-gradient-to-br from-emerald-300 to-teal-600 text-slate-900",
    };
  }
  if (name.includes("hubspot")) {
    return {
      label: "H",
      className: "bg-gradient-to-br from-orange-400 to-orange-600 text-slate-900",
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

/* --------- Certifications --------- */
const CERTIFICATIONS = [
  {
    name: "Foundations of Cybersecurity (Grade 98.81%)",
    org: "Google (Coursera)",
    issued: "Nov 2025",
    details:
      "Python, Bash, vulnerability management, threat modeling, incident response, and security fundamentals.",
  },
  {
    name: "Getting Started with Git and GitHub",
    org: "IBM",
    issued: "Nov 2025",
    details: "Core Git/GitHub workflows, version control, and collaboration best practices.",
  },
  {
    name: "IBM Developer for z/OS Basics",
    org: "IBM",
    issued: "Nov 2025",
    details:
      "Mainframe fundamentals, IBM Z tooling, and foundational enterprise computing concepts.",
  },
  {
    name: "IBM Ethical Hacking with Open Source Tools (Grade 100%)",
    org: "IBM / Skillup.co",
    issued: "Nov 2025",
    details:
      "Ethical hacking methods, reconnaissance, exploitation labs, and defensive security thinking with open-source tooling.",
  },
  {
    name: "IBM Z Resiliency",
    org: "IBM",
    issued: "Nov 2025",
    details: "Resilient mainframe design, availability, and fault-tolerance strategies on IBM Z.",
  },
  {
    name: "IBM Z Xplore – Concepts",
    org: "IBM",
    issued: "Nov 2025",
    details: "Hands-on labs in IBM Z, Bash, and Python on enterprise systems.",
  },
  {
    name: "IBM z/OS Security Essentials",
    org: "IBM",
    issued: "Nov 2025",
    details: "Security concepts for z/OS, access control, and secure mainframe operations.",
  },
  {
    name: "Introduction to Artificial Intelligence (AI)",
    org: "IBM (Coursera)",
    issued: "Nov 2025",
    details:
      "AI foundations, high-level ML concepts, and real-world deployment considerations.",
  },
  {
    name: "Introduction to DevOps (Grade 91.5%)",
    org: "IBM (Coursera)",
    issued: "Nov 2025",
    details:
      "Agile, CI/CD, microservices, TDD/BDD, and DevOps culture for modern cloud-native teams.",
  },
  {
    name: "Introduction to Software Engineering (Grade 92.8%)",
    org: "IBM (Coursera)",
    issued: "Nov 2025",
    details:
      "SDLC, architecture, Python development, and web/cloud deployment models.",
  },
  {
    name: "Introduction to Systems Architecture (Grade 94.85%)",
    org: "IBM (Coursera)",
    issued: "Nov 2025",
    details: "Systems architecture, components, and large-scale design thinking.",
  },
  {
    name: "Machine Learning with Python (Grade 95.71%)",
    org: "IBM (Coursera)",
    issued: "Nov 2025",
    details: "Supervised/unsupervised ML with Python, model training and evaluation.",
  },
  {
    name: "Understanding and Visualizing Data with Python (Grade 95.5%)",
    org: "University of Michigan (Coursera)",
    issued: "Nov 2025",
    details:
      "Pandas, NumPy, Seaborn, and Matplotlib for EDA, visualization, and insight storytelling.",
  },
  {
    name: "MongoDB Certificates – Using MongoDB with Python",
    org: "MongoDB",
    issued: "Mar 2025",
    details: "Document modeling, queries, and Python integration with MongoDB.",
  },
  {
    name: "MLPAO Medical Laboratory Assistant/Technician (MLA/T)",
    org: "Medical Laboratory Professionals’ Association of Ontario",
    issued: "Sep 2025",
    details: "Phlebotomy, ECG interpretation, urinalysis, and clinical lab workflows.",
  },
  {
    name: "Security Guard License",
    org: "Canada Guard Security",
    issued: "Jul 2025",
    details: "Licensed security guard; safety monitoring and incident response.",
  },
  {
    name: "Standard First Aid, CPR and AED",
    org: "Canadian Red Cross",
    issued: "Jul 2025",
    details: "Adult/pediatric CPR and AED usage for emergency response.",
  },
  {
    name: "TCPS-2 CORE 2022: Ethical Conduct for Research Involving Humans",
    org: "Government of Canada",
    issued: "Oct 2020",
    details: "Ethical research principles, consent, and safeguarding human participants.",
  },
  {
    name: "Certified Leadership Level Gold",
    org: "The Canadian Conference on Student Leadership (CCSL)",
    issued: "Nov 2017",
    details: "Leadership, collaboration, and student community impact.",
  },
];

/* --------- Volunteering --------- */
const VOLUNTEERING = [
  {
    role: "Fundraising Volunteer",
    org: "Human Appeal – ISNA Gala",
    when: "Sep 2025",
    details:
      "Supported fundraising for Gaza using POS systems to collect donations. Helped raise $40,000 in one evening, sponsoring 30 orphans and reinforcing the power of community, compassion, and teamwork.",
  },
  {
    role: "Ramadan Volunteer",
    org: "Bramalea Islamic Cultural Centre (BICC)",
    when: "Apr 2022",
    details:
      "Helped set up and close daily iftar events and prayers, supporting a welcoming and organized community worship space.",
  },
  {
    role: "Screener",
    org: "William Osler Health System",
    when: "Sep 2021 – Mar 2022",
    details:
      "Completed 100+ volunteer hours greeting visitors, performing COVID-19 screening, enforcing PPE protocols, and supporting clinical teams with safe patient item drop-offs.",
  },
  {
    role: "Government Relations & Phone Banking Captain",
    org: "Future Majority",
    when: "Jan 2021 – May 2021",
    details:
      "Mobilized volunteers for phone banks, engaged youth on mental health, climate, and affordability, and coordinated outreach to local politicians and organizations.",
  },
  {
    role: "PLASP Active ELC / General Volunteer",
    org: "PLASP Child Care Services",
    when: "Sep 2014 – Jul 2017",
    details:
      "Led group activities, supported after-school programs, welcomed parents/guardians, and maintained a safe environment for children.",
  },
  {
    role: "Step Up Youth Volunteer Ambassador",
    org: "Volunteer MBC (Mississauga Brampton Caledon)",
    when: "Sep 2014 – Aug 2015",
    details:
      "Helped plan multiple charity events across the region, supporting environmental, health, and community causes.",
  },
  {
    role: "Student Volunteer & Football Manager",
    org: "St Thomas Aquinas Secondary School",
    when: "2014 – 2018",
    details:
      "Managed supplies and logistics for the football team, tutored math students (grades 9–10), and contributed hundreds of hours to service initiatives.",
  },
  {
    role: "Student Volunteer",
    org: "Mississauga Marathon & Volunteering Peel",
    when: "2014 – 2018",
    details:
      "Assisted with event setup/takedown, supplied food to runners, and supported various marathons and charity events.",
  },
];

/* ---- Beyond Tech ---- */
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
    link: "https://www.instagram.com/asma.a15__/?hl=en",
    cta: "DM for tutoring inquiries",
    images: ["/images/1551131919234.jpeg"],
  },
];

/* ---------------- Particles ---------------- */
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, area: 800 } },
    color: { value: "#a855f7" }, // purple
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

export default function Portfolio() {
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
            <span className="hidden sm:inline text-white tracking-tight">Asma Ahmed</span>
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
              href={LINKS.instagramHenna}
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
            {/* NOW OPEN banner */}
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

            {/* CTAs */}
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
        subtitle="A snapshot of tools I use regularly."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((s, i) => (
            <FadeIn key={s} delay={i * 0.02}>
              <div className="group rounded-xl border border-purple-300/35 bg-gradient-to-br from-purple-900/80 via-slate-900/90 to-purple-950/70 p-3 text-center shadow-sm transition hover:shadow-[0_0_18px_rgba(168,85,247,0.7)] hover:border-purple-200/90">
                <span className="text-xs font-medium text-purple-50/95">{s}</span>
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
                  <p className="text-sm text-purple-50/90 leading-relaxed">{p.blurb}</p>
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
                          <ExternalLink className="h-3.5 w-3.5" /> View on Devpost
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
        subtitle="Highlights from roles and internships."
      >
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-purple-300/80 via-purple-500/40 to-transparent md:block" />
          <ul className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={e.role} delay={i * 0.05}>
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
      <Section id="education" title="Education" subtitle="Academic background and coursework.">
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
        subtitle="Upskilling across software engineering, security, data, cloud, and healthcare."
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
        subtitle="Outside software, I’m a creative—henna artist, photographer, illustrator, and model."
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
                Outside of my creative work, I love staying active and grounded. I play on a
                basketball team and a flag football team, jump into volleyball games when I
                can, and enjoy biking and long walks. I enjoy true-crime &amp; horror and DC
                movies/shows, and I unwind with LEGO builds and puzzles. I also love
                volunteering, gardening, baking, and cooking. I’m passionate about science,
                keeping up with new breakthroughs, discoveries, and innovations. I cherish
                time with friends and family whenever possible. My faith in Islam is also
                very important to me, and I use its guidance and teachings to continuously
                improve myself.
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
                  href={LINKS.instagramHenna}
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

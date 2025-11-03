import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink, Instagram } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

/* ---------------- Lightweight UI ---------------- */
const Button = ({ children, asChild, variant = "default", size = "md", className = "", ...props }) => {
  const base =
    "inline-flex items-center justify-center rounded-md border text-sm font-medium transition disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90 border-transparent px-4 py-2",
    secondary: "bg-muted text-foreground hover:bg-muted/80 border-transparent px-4 py-2",
    outline: "bg-transparent border-border px-4 py-2",
    ghost: "bg-transparent border-transparent px-2 py-1",
  };
  const sizes = { sm: "text-sm px-3 py-1.5", md: "text-sm px-4 py-2" };
  const cls = `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`;
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: `${children.props.className || ""} ${cls}`.trim(), ...props });
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
};

const Card = ({ className = "", children }) => <div className={`rounded-xl border bg-card shadow-sm ${className}`}>{children}</div>;
const CardHeader = ({ children }) => <div className="p-5 border-b">{children}</div>;
const CardTitle = ({ className = "", children }) => <h3 className={`text-base font-semibold ${className}`}>{children}</h3>;
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
          <h2 className="text-3xl font-bold tracking-tight text-white/95 [text-shadow:0_0_14px_rgba(0,0,0,0.6)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 max-w-3xl text-white/80 [text-shadow:0_0_10px_rgba(0,0,0,0.6)]">{subtitle}</p>
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
  "I’m a software engineer focused on building scalable, user-centric apps across web and mobile. I work across React, .NET, Spring Boot, and cloud platforms (AWS, Azure, GCP). Below are selected skills, projects, and experience.";

const LINKS = {
  resumeUrl:
    "https://www.linkedin.com/in/asma-ahmed67/overlay/1761849807562/single-media-viewer/?profileId=ACoAADRSu5IB5sVYbHSyGtnWPhEcVQmgyeDUzAA",
  github: "https://github.com/asma675",
  linkedin: "https://www.linkedin.com/in/asma-ahmed67",
  email: "mailto:asma.ahmed.work@gmail.com",

  // creative handles
  instagramHenna: "https://www.instagram.com/henna.hearted/?hl=en",
  instagramPhoto: "https://www.instagram.com/_purelyphotography/?hl=en",
  instagramArt: "https://www.instagram.com/asmaahmedart/?hl=en",
  instagramModel: "https://www.instagram.com/asma.ahmed.model/?hl=en",
};

const SKILLS = [
  "Python","Java","JavaScript","C","C++","C#","Go","R","Swift",
  "HTML","CSS","Web Design","API Integration","REST APIs",
  "React","Redux","Node.js","Express.js","Spring Boot",".NET","Thymeleaf","Bootstrap","Pygame",
  "SQL","MySQL",
  "Docker","Kubernetes","AWS","Azure","Google Cloud","Cloud Deployment",
  "OOP","Data Structures","Algorithms","SDLC","Agile","TDD",
  "Git","GitHub","Linux","Web Development","Mobile Development","Android",
];

const PROJECTS = [
  { title:"ShareMeal App", blurb:"Cross-platform app connecting donors with local food banks; auth + Azure App Services + REST APIs for listings and real-time updates.", stack:[".NET MAUI","C#","Azure","REST"], links:{ demo:"#", code:"https://github.com/asma675" } },
  { title:"GDG Frontend Project", blurb:"Responsive web interface for a GDG challenge with reusable components, hooks, and Tailwind UI.", stack:["React","Tailwind","Vercel"], links:{ demo:"#", code:"https://github.com/asma675/gdg-frontend-Asma-Ahmed-Final-Copy" } },
  { title:"PasswordStore", blurb:"Secure password manager with CRUD, encryption, and MVC architecture.", stack:["Java","Spring Boot","Thymeleaf","H2"], links:{ demo:"#", code:"https://github.com/asma675" } },
  { title:"DriveWellApp", blurb:"Cross-platform app for tracking automotive data with cloud sync and async data flows.", stack:[".NET MAUI","C#"], links:{ demo:"#", code:"https://github.com/asma675" } },
  { title:"Student Records Portal", blurb:"Secure portal to manage academic records with validation and access control.", stack:["SQL","HTML","CSS"], links:{ demo:"#", code:"https://github.com/asma675" } },
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
  "Finalist in GDG Frontend Hackathon for innovative design and technical implementation.",
  "Developed ShareMeal during GNEC Hackathon 2025 (UN-Affiliated/NGO category), promoting food sharing and sustainability.",
  "Built an AI-powered Rewriter Tool for Google Chrome Built-in AI Challenge 2025, enhancing content generation through generative AI.",
];

/* ---- Beyond Tech (wired to your actual files) ---- */

/* ---- Beyond Tech (wired to your actual files) ---- */
const BEYOND = [
  {
    title: "Henna / Mehndi",
    subtitle: "Bridal • party • cones • aftercare",
    link: LINKS.instagramHenna,
    cta: "See Henna Work",
    images: [
      "/images/Screenshot 2025-11-02 231432.png", // henna
      "/images/Screenshot 2025-11-02 231505.png", // henna close-up
      "/images/Screenshot 2025-11-02 231559.png", // landscape/sunset (moved here)

    ],
  },
  {
    title: "Photography",
    subtitle: "urban • nature • lifestyle",
    link: LINKS.instagramPhoto,
    cta: "See Photos",
    images: [
      "/images/Screenshot 2025-11-02 231648.png", // purple nature
      "/images/Screenshot 2025-11-02 231806.png", // plant macro
      "/images/Screenshot 2025-11-02 231716.png", // henna hand (moved here)

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
    images: ["/images/1551131919234.jpeg"], // keep grid happy with at least one image
  },
];

/* ---------------- Particles ---------------- */
const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  fpsLimit: 60,
  particles: {
    number: { value: 40, density: { enable: true, area: 800 } },
    color: { value: "#06b6d4" },
    links: { enable: true, distance: 150, color: "#06b6d4", opacity: 0.3, width: 1 },
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
      className="min-h-screen text-white antialiased relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(7, 0, 20, 0.55), rgba(7, 0, 20, 0.75)), url('/images/purple-digital-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Floating particles */}
      <Particles
        id="tsparticles"
        className="pointer-events-none absolute inset-0 -z-10"
        options={particlesOptions}
        init={async (engine) => {
          await loadFull(engine);
        }}
      />

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-purple-700 text-white shadow-md">AA</div>
            <span className="hidden sm:inline text-white">Asma Ahmed</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {[
              { href: "#home", label: "Home" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#achievements", label: "Achievements" },
              { href: "#beyond", label: "Beyond Tech" },
              { href: "#interests", label: "Other Interests" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 transition hover:text-white hover:[text-shadow:0_0_12px_rgba(168,85,247,0.9)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noreferrer" className="rounded-md p-2 text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={LINKS.email} className="rounded-md p-2 text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
              <Mail className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href={LINKS.instagramHenna} target="_blank" rel="noreferrer" className="rounded-md p-2 text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-white/85 [text-shadow:0_0_10px_rgba(0,0,0,0.7)]">Portfolio</p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-extrabold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.65)]">
              {NAME}
            </h1>
            <p className="mt-3 text-lg text-white/90 [text-shadow:0_0_12px_rgba(0,0,0,0.6)]">{TAGLINE}</p>
            <p className="mt-5 max-w-3xl text-balance text-white/85 [text-shadow:0_0_10px_rgba(0,0,0,0.6)]">{INTRO}</p>

            {/* 3 CTAs — luxury royal purple */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="gap-2 bg-purple-700 hover:bg-purple-800 text-white shadow-lg border-transparent">
                <a href={LINKS.resumeUrl} download="Asma_Ahmed_Resume.pdf">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button asChild className="gap-2 bg-purple-700 hover:bg-purple-800 text-white shadow-lg border-transparent">
                <a href={LINKS.resumeUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> View PDF
                </a>
              </Button>
              <Button asChild className="gap-2 bg-purple-700 hover:bg-purple-800 text-white shadow-lg border-transparent">
                <a href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-purple-900/30 via-purple-900/10 to-transparent" />
      </section>

      {/* Skills */}
      <Section id="skills" title="Skills & Technologies" subtitle="A snapshot of tools I use regularly.">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {SKILLS.map((s, i) => (
            <FadeIn key={s} delay={i * 0.02}>
              <div className="group rounded-xl border border-white/10 bg-black/30 p-4 text-center shadow-sm transition hover:shadow hover:bg-black/40">
                <span className="text-sm font-medium">{s}</span>
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
              <Card className="h-full border-white/10 bg-black/30">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{p.title}</span>
                    <span className="text-xs font-normal text-white/70">{p.stack.join(" · ")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80">{p.blurb}</p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="secondary" asChild className="bg-purple-700 hover:bg-purple-800 text-white border-transparent">
                      <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
                      <a href={p.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Relevant Experience" subtitle="Highlights from roles and internships.">
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-white/15 md:block" />
          <ul className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={e.role} delay={i * 0.05}>
                <li className="relative md:pl-10">
                  <div className="hidden md:block absolute left-[14px] top-1 h-3 w-3 rounded-full bg-purple-600" />
                  <div className="rounded-xl border border-white/10 bg-black/30 p-5 shadow-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {e.role} <span className="text-white/70 font-normal">• {e.org}</span>
                      </h3>
                      <span className="text-sm text-white/70">{e.when}</span>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/80">
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
            <div className="rounded-xl border border-white/10 bg-black/30 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{ed.school}</h3>
              <p className="text-sm text-white/80 mt-1">{ed.degree}</p>
              <p className="text-sm text-white/80 mt-1">{ed.gpa}</p>
              <p className="text-sm text-white/80 mt-1">Clubs: {ed.clubs}</p>
              <p className="text-sm text-white/80 mt-1">Relevant Coursework: {ed.coursework}</p>
            </div>
          </FadeIn>
        ))}
      </Section>

      {/* Achievements */}
      <Section id="achievements" title="Achievements" subtitle="Recognition & hackathons.">
        <div className="grid gap-4 max-w-3xl">
          {ACHIEVEMENTS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="rounded-xl border border-white/10 bg-black/30 p-5 shadow-sm">
                <p className="text-sm text-white/85">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Beyond Tech */}
      <Section
        id="beyond"
        title="Beyond Tech"
        subtitle="Outside software, I’m a creative—henna artist, photographer, illustrator, and model. Here’s a peek."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {BEYOND.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.05}>
              <Card className="border-white/10 bg-black/30 h-full">
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{b.title}</span>
                    <span className="text-xs font-normal text-white/70">{b.subtitle}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`grid ${b.images.length === 1 ? "grid-cols-1" : "grid-cols-3"} gap-2`}>
                    {b.images.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={b.title}
                        className="aspect-square w-full rounded-lg object-cover border border-white/10"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button asChild size="sm" className="bg-purple-700 hover:bg-purple-800 text-white border-transparent">
                      <a href={b.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                        <Instagram className="h-3.5 w-3.5" /> {b.cta}
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <a href={b.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
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
          <Card className="border-white/10 bg-black/30 backdrop-blur-md shadow-sm">
            <CardContent>
              <p className="text-white/85 leading-relaxed">
                Outside of my creative work, I love staying active and grounded. I play on a
                basketball team and a flag football team, jump into volleyball games when I can,
                and enjoy biking and long walks. I enjoy true-crime &amp; horror and DC movies/shows,
                and I unwind with LEGO builds and puzzles. I also love volunteering, gardening, baking, and
                cooking. I’m passionate about science, keeping up with new breakthroughs,
                discoveries, and innovations. I cherish time with friends and family whenever
                possible. My faith in Islam is also very important to me, and I use its guidance and teachings
                to continuously improve myself.
              </p>

              {/* quick interests chips */}
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
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
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
      <footer className="border-t border-white/10 py-10 bg-black/30">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/80">© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
            <div className="flex items-center gap-1">
              <Button asChild variant="ghost" size="sm" className="text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="gap-2 inline-flex items-center">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="gap-2 inline-flex items-center">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
                <a href={LINKS.email} className="gap-2 inline-flex items-center">
                  <Mail className="h-4 w-4" /> Email
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm" className="text-white/80 hover:text-white hover:[text-shadow:0_0_10px_rgba(168,85,247,0.8)]">
                <a href={LINKS.instagramHenna} target="_blank" rel="noreferrer" className="gap-2 inline-flex items-center">
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


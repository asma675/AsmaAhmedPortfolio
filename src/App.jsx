import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// particles
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// icons for skill tiles
import {
  SiTypescript, SiJavascript, SiPython, SiJava, SiCsharp, SiGo,
  SiReact, SiRedux, SiNodedotjs, SiExpress, SiSpringboot, SiDotnet,
  SiMysql, SiPostgresql, SiDocker, SiKubernetes,
  SiAmazonaws, SiMicrosoftazure, SiGooglecloud,
  SiHtml5, SiCss3, SiBootstrap, SiPygame, SiGit, SiGithub
} from "react-icons/si";

/* ---------------- Minimal UI ---------------- */
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
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && <p className="mt-2 text-muted-foreground max-w-3xl">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay }}>
    {children}
  </motion.div>
);

/* ---------------- Particles background ---------------- */
function ParticlesBG() {
  const init = async (engine) => {
    await loadFull(engine);
  };
  const options = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 90, density: { enable: true, area: 800 } },
      color: { value: "#06b6d4" },
      links: { enable: true, color: "#06b6d4", opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "out" } },
      opacity: { value: 0.25 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="tsparticles" init={init} options={options} />
    </div>
  );
}

/* ---------------- Data ---------------- */
const NAME = "Asma Ahmed";
const TAGLINE = "Software Engineer • Cloud & Full-Stack";
const INTRO =
  "I’m a software engineer focused on building scalable, user-centric apps across web and mobile. I work across React, .NET, Spring Boot, and cloud platforms (AWS, Azure, GCP). Below are selected skills, projects, and experience.";

const LINKS = {
  // Note: LinkedIn viewer pages usually don't support direct 'download'. Keeping both buttons: Download (best-effort) + View PDF.
  resumeUrl:
    "https://www.linkedin.com/in/asma-ahmed67/overlay/1761849807562/single-media-viewer/?profileId=ACoAADRSu5IB5sVYbHSyGtnWPhEcVQmgyeDUzAA",
  github: "https://github.com/asma675",
  linkedin: "https://www.linkedin.com/in/asma-ahmed67",
  email: "mailto:asma.ahmed.work@gmail.com",
};

// Replace your plain text skills with icon tiles
const SKILL_TILES = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: SiJava },
  { name: "C#", icon: SiCsharp },
  { name: "Go", icon: SiGo },
  { name: "AWS", icon: SiAmazonaws },
  { name: "Azure", icon: SiMicrosoftazure },
  { name: "GCP", icon: SiGooglecloud },
  { name: "React", icon: SiReact },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: ".NET", icon: SiDotnet },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Pygame", icon: SiPygame },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const PROJECTS = [
  {
    title: "ShareMeal App",
    blurb:
      "Cross-platform app connecting donors with local food banks; auth + Azure App Services + REST APIs for listings and real-time updates.",
    stack: [".NET MAUI", "C#", "Azure", "REST"],
    links: { demo: "#", code: "https://github.com/asma675" },
  },
  {
    title: "GDG Frontend Project",
    blurb: "Responsive web interface for a GDG challenge with reusable components, hooks, and Tailwind UI.",
    stack: ["React", "Tailwind", "Vercel"],
    links: { demo: "#", code: "https://github.com/asma675/gdg-frontend-Asma-Ahmed-Final-Copy" },
  },
  {
    title: "PasswordStore",
    blurb: "Secure password manager with CRUD, encryption, and MVC architecture.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "H2"],
    links: { demo: "#", code: "https://github.com/asma675" },
  },
  {
    title: "DriveWellApp",
    blurb: "Cross-platform app for tracking automotive data with cloud sync and async data flows.",
    stack: [".NET MAUI", "C#"],
    links: { demo: "#", code: "https://github.com/asma675" },
  },
  {
    title: "Student Records Portal",
    blurb: "Secure portal to manage academic records with validation and access control.",
    stack: ["SQL", "HTML", "CSS"],
    links: { demo: "#", code: "https://github.com/asma675" },
  },
];

const EXPERIENCE = [
  {
    role: "IT Assistant / Helpdesk",
    org: "Niagara College, Welland, ON",
    when: "Sept 2018 – Apr 2019",
    bullets: [
      "Resolved 100+ weekly hardware/software and account issues, improving turnaround time by ~30%.",
      "Diagnosed connectivity problems and supported campus-wide installs and system updates.",
      "Collaborated with technical teams to automate recurring troubleshooting tasks.",
    ],
  },
];

/* ---------------- Skill Grid (glassy neon) ---------------- */
function SkillTile({ name, Icon }) {
  return (
    <div
      className="group rounded-2xl border border-white/10 bg-white/5
                 backdrop-blur-sm p-6 flex flex-col items-center justify-center
                 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_24px_rgba(34,211,238,.35)]
                 transition transform hover:-translate-y-1"
    >
      <div
        className="grid place-items-center h-16 w-16 rounded-xl
                   bg-gradient-to-b from-cyan-400/20 to-cyan-400/5
                   border border-cyan-400/30 text-cyan-400"
      >
        <Icon className="h-8 w-8" />
      </div>
      <div className="mt-3 text-sm font-medium text-white/90">{name}</div>
    </div>
  );
}

function SkillGrid() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_60%)]" />
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {SKILL_TILES.map((s) => (
          <SkillTile key={s.name} name={s.name} Icon={s.icon} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Main ---------------- */
export default function Portfolio() {
  useEffect(() => {
    // Smooth scroll for in-page anchors
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
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <ParticlesBG />

      {/* Header / Nav */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">AA</div>
            <span className="hidden sm:inline">{NAME}</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {[
              { href: "#home", label: "Home" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a aria-label="GitHub" href={LINKS.github} target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-muted">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href={LINKS.linkedin} target="_blank" rel="noreferrer" className="rounded-md p-2 hover:bg-muted">
              <Linkedin className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={LINKS.email} className="rounded-md p-2 hover:bg-muted">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pb-20 pt-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-primary/80">Portfolio</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">{NAME}</h1>
            <p className="mt-3 text-lg text-muted-foreground">{TAGLINE}</p>
            <p className="mt-5 max-w-3xl text-balance text-muted-foreground">{INTRO}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="gap-2">
                <a href={LINKS.resumeUrl} download="Asma_Ahmed_Resume.pdf">
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
              <Button variant="outline" asChild className="gap-2">
                <a href={LINKS.resumeUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" /> View PDF
                </a>
              </Button>
              <Button variant="secondary" asChild className="gap-2">
                <a href="#projects">
                  View Projects <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/10 to-transparent" />
      </section>

      {/* Skills */}
      <Section id="skills" title="Skills & Technologies" subtitle="A snapshot of tools I use regularly.">
        <SkillGrid />
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" subtitle="Selected work and experiments.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.04}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{p.title}</span>
                    <span className="text-xs font-normal text-muted-foreground">{p.stack.join(" · ")}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  <div className="mt-4 flex gap-2">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={p.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                        <ExternalLink className="h-3.5 w-3.5" /> Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
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
          <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-border md:block" />
          <ul className="space-y-8">
            {EXPERIENCE.map((e, i) => (
              <FadeIn key={e.role} delay={i * 0.05}>
                <li className="relative md:pl-10">
                  <div className="hidden md:block absolute left-[14px] top-1 h-3 w-3 rounded-full bg-primary" />
                  <div className="rounded-xl border bg-card p-5 shadow-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold">
                        {e.role} <span className="text-muted-foreground font-normal">• {e.org}</span>
                      </h3>
                      <span className="text-sm text-muted-foreground">{e.when}</span>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
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

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Button asChild variant="ghost" size="sm">
                <a href={LINKS.github} target="_blank" rel="noreferrer" className="gap-2 inline-flex items-center">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="gap-2 inline-flex items-center">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href={LINKS.email} className="gap-2 inline-flex items-center">
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

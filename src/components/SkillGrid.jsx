import { SiTypescript, SiJavascript, SiPython, SiJava, SiCsharp, SiAmazonaws, SiAwslambda,
    SiAmazondynamodb, SiAmazonS3, SiGit, SiLinux, SiReact, SiAngular, SiHtml5, SiCss3, SiNodedotjs,
    SiExpress, SiMongodb, SiMysql, SiAndroid, SiAdobephotoshop } from "react-icons/si";
  
  const SKILLS = [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: SiJava },
    { name: "C#", icon: SiCsharp },
    { name: "AWS", icon: SiAmazonaws },
    { name: "Lambda", icon: SiAwslambda },
    { name: "DynamoDB", icon: SiAmazondynamodb },
    { name: "S3", icon: SiAmazonS3 },
    { name: "Git", icon: SiGit },
    { name: "Linux", icon: SiLinux },
    { name: "React", icon: SiReact },
    { name: "Angular", icon: SiAngular },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Android", icon: SiAndroid },
    { name: "Photoshop", icon: SiAdobephotoshop },
  ];
  
  function Tile({ name, Icon }) {
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
  
  export default function SkillGrid() {
    return (
      <div className="relative">
        {/* Soft center glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_60%)]" />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {SKILLS.map((s) => (
            <Tile key={s.name} name={s.name} Icon={s.icon} />
          ))}
        </div>
      </div>
    );
  }
  
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, Palette, Cpu, Globe, Server, Layers } from 'lucide-react';

const TechIcon = ({ name, icon: Icon, color }) => (
  <div className="flex flex-col items-center gap-2 mx-8 group cursor-pointer">
    <div className={`p-4 rounded-2xl bg-slate-900/50 border border-slate-800 group-hover:border-${color}-500/50 transition-colors shadow-lg`}>
      <Icon size={32} className={`text-slate-400 group-hover:text-${color}-400 transition-colors`} />
    </div>
    <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition-colors">{name}</span>
  </div>
);

export default function TechStack() {
  const row1 = [
    { name: "React", icon: Code2, color: "cyan" },
    { name: "Python", icon: Terminal, color: "yellow" },
    { name: "Next.js", icon: Globe, color: "white" },
    { name: "TypeScript", icon: Code2, color: "blue" },
    { name: "Flask", icon: Server, color: "green" },
    { name: "Tailwind", icon: Palette, color: "cyan" },
  ];

  const row2 = [
    { name: "Docker", icon: Layers, color: "blue" },
    { name: "Postgres", icon: Database, color: "blue" },
    { name: "Figma", icon: Palette, color: "pink" },
    { name: "Git", icon: Code2, color: "orange" },
    { name: "Redux", icon: Cpu, color: "violet" },
    { name: "Supabase", icon: Database, color: "green" },
  ];

  return (
    <section id="skills" className="py-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Tech Stack</h2>
        <p className="text-slate-400">Powered by modern technologies for scalable solutions.</p>
      </div>

      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0d1224] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0d1224] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-12">
        {/* Row 1 - Left to Right */}
        <div className="flex">
          <motion.div 
            className="flex flex-shrink-0"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...row1, ...row1, ...row1].map((tech, i) => (
              <TechIcon key={`${tech.name}-${i}`} {...tech} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="flex">
          <motion.div 
            className="flex flex-shrink-0"
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {[...row2, ...row2, ...row2].map((tech, i) => (
              <TechIcon key={`${tech.name}-${i}`} {...tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

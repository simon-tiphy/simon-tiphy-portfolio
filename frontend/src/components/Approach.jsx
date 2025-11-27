import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const phases = [
  {
    id: 1,
    title: "Planning & Strategy",
    description:
      "We start with a blueprint. I dive deep into your requirements, user needs, and market analysis to craft a solid roadmap for success.",
    // Deep Violet to Cosmic Blue
    gradient: "from-[#240b36] via-[#c31432] to-[#240b36]",
  },
  {
    id: 2,
    title: "Development",
    description:
      "Writing clean, scalable, and maintainable code. I build robust backends with Python and dynamic frontends with React.",
    // Deep Emerald to Midnight Blue
    gradient: "from-[#0f2027] via-[#203a43] to-[#2c5364]",
  },
  {
    id: 3,
    title: "Testing & QA",
    description:
      "Pixel-perfect precision. Rigorous testing ensures your application is bug-free, performant, and ready for the real world.",
    // Deep Orange to Purple
    gradient: "from-[#12c2e9] via-[#c471ed] to-[#f64f59]",
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Shipping to the world. I handle the DevOps, ensuring a smooth launch and continuous integration for future updates.",
    // Deep Pink to Electric Violet
    gradient: "from-[#FF0099] via-[#493240] to-[#FF0099]",
  },
];

const SnakeButton = ({ text }) => (
  <div className="relative p-[2px] overflow-hidden rounded-full group">
    {/* Spinning Gradient Border */}
    <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

    {/* Button Content */}
    <div className="relative px-8 py-3 bg-slate-950 rounded-full text-white font-mono text-sm tracking-wider uppercase backdrop-blur-3xl z-10">
      {text}
    </div>
  </div>
);

const Card = ({ phase }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[500px] bg-[#0d1224] border border-slate-800 rounded-[3rem] overflow-hidden cursor-pointer group transition-all duration-500"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
    >
      {/* Corner Markers (Increased Size & Position) */}
      <div className="absolute top-6 left-6 text-slate-600 z-20">
        <Plus size={32} strokeWidth={1} />
      </div>
      <div className="absolute top-6 right-6 text-slate-600 z-20">
        <Plus size={32} strokeWidth={1} />
      </div>
      <div className="absolute bottom-6 left-6 text-slate-600 z-20">
        <Plus size={32} strokeWidth={1} />
      </div>
      <div className="absolute bottom-6 right-6 text-slate-600 z-20">
        <Plus size={32} strokeWidth={1} />
      </div>

      {/* Default State: Snake Light Button */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-500"
        style={{ opacity: hovered ? 0 : 1 }}
      >
        <SnakeButton text={`Phase ${phase.id}`} />
      </div>

      {/* Reveal State: Gradient + Glitter + Content */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} flex flex-col items-center justify-center p-12 text-center`}
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Subtle Grain Texture */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Glass Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20">
          <motion.h3
            className="text-4xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: hovered ? 0 : 30, opacity: hovered ? 1 : 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {phase.title}
          </motion.h3>
          <motion.p
            className="text-white/90 text-lg leading-relaxed font-medium drop-shadow-md"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: hovered ? 0 : 30, opacity: hovered ? 1 : 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {phase.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default function Approach() {
  return (
    <section className="py-24 w-full bg-[#0d1224] overflow-hidden">
      <div className="w-full px-4 md:px-0">
        {" "}
        {/* Full width on desktop, padding on mobile */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">
            Let's Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
            My Approach
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          {phases.map((phase) => (
            <Card key={phase.id} phase={phase} />
          ))}
        </div>
      </div>
    </section>
  );
}

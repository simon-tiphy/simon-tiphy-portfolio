import { motion } from "framer-motion";
import laptopGlow from "../assets/laptop_glow.png";

const lyrics = [
  { text: "I am Simon Tiphy", highlight: "text-white" },
  { text: "A Full Stack Engineer", highlight: "text-cyan-400" },
  { text: "Based in Nairobi, KE", highlight: "text-white" },
  {
    text: "Crafting with React, Python, and Next.js",
    highlight: "text-violet-400",
  },
  { text: "Driven by building scalable systems", highlight: "text-white" },
  { text: "I am a Problem Solver", highlight: "text-pink-400" },
  { text: "A Quick Learner", highlight: "text-white" },
  { text: "And I work smart", highlight: "text-white" },
];

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#0d1224]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Lyrics Style Text Content */}
        <div className="relative z-10 order-1 flex flex-col gap-6">
          {lyrics.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, opacity: 1, x: 10 }}
              className={`text-3xl md:text-5xl font-bold tracking-tight cursor-default transition-all duration-300 ${line.highlight} opacity-40 hover:opacity-100`}
            >
              {line.text}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12"
          >
            <a
              href="mailto:simontiphy@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Let's Collaborate
            </a>
          </motion.div>
        </div>

        {/* Image Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
            <img
              src={laptopGlow}
              alt="Futuristic Workspace"
              className="relative rounded-2xl border border-slate-800 shadow-2xl w-full object-cover"
            />
            {/* Overlay Gradient for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224] via-transparent to-transparent opacity-20 rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

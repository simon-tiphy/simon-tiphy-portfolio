import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Client A",
    role: "CEO",
    text: "Exceptional work!",
    color: "bg-cyan-500",
  },
  {
    id: 2,
    name: "Client B",
    role: "CTO",
    text: "Highly recommended.",
    color: "bg-violet-500",
  },
  {
    id: 3,
    name: "Client C",
    role: "Founder",
    text: "A true professional.",
    color: "bg-pink-500",
  },
  {
    id: 4,
    name: "Client D",
    role: "Manager",
    text: "Delivered on time.",
    color: "bg-emerald-500",
  },
  {
    id: 5,
    name: "Client E",
    role: "Director",
    text: "Creative solutions.",
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Client F",
    role: "Lead",
    text: "Great communication.",
    color: "bg-blue-500",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Rotate the entire system based on scroll
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden bg-[#0d1224] min-h-[800px] flex items-center justify-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative w-[600px] h-[600px] flex items-center justify-center">
        {/* Central Hub */}
        <div className="absolute z-20 w-32 h-32 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.3)]">
          <div className="text-center">
            <span className="block text-4xl font-bold text-white">W</span>
            <span className="text-[10px] text-slate-400 tracking-widest uppercase">
              What People Say
            </span>
          </div>
        </div>

        {/* Orbiting System */}
        <motion.div
          style={{ rotate: rotation }}
          className="absolute inset-0 w-full h-full"
        >
          {testimonials.map((t, i) => {
            const angle = (i / testimonials.length) * 360;
            const radius = 250; // Distance from center
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={t.id}
                className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 flex items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Connecting Line (SVG Curve) */}
                <svg
                  className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  <path
                    d="M 150 150 Q 200 150 275 150"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    className="opacity-30"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Satellite Node */}
                <motion.div
                  className={`relative w-16 h-16 rounded-xl border border-slate-700 bg-slate-900/80 backdrop-blur-md flex items-center justify-center group hover:scale-125 transition-transform duration-300 cursor-pointer z-10`}
                  style={{ rotate: useTransform(rotation, (r) => -r) }} // Counter-rotate to keep content upright
                >
                  <div
                    className={`w-8 h-8 rounded-full ${t.color} opacity-80 blur-sm absolute`}
                  />
                  <span className="relative text-xs font-bold text-white">
                    {t.name.charAt(0)}
                  </span>

                  {/* Tooltip on Hover */}
                  <div className="absolute top-full mt-4 w-48 p-3 bg-slate-800 rounded-lg border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-center z-50 shadow-xl">
                    <p className="text-white text-sm font-medium mb-0.5">
                      {t.name}
                    </p>
                    <p className="text-cyan-400 text-[10px] uppercase font-bold mb-2">
                      {t.role}
                    </p>
                    <p className="text-slate-300 text-xs italic leading-relaxed">
                      "{t.text}"
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

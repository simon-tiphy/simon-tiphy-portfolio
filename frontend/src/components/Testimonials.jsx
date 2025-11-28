import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Samuel Gachuhi",
    role: "CEO Samsasali",
    text: "Exceeded my expectations!",
    color: "bg-cyan-500",
  },
  {
    id: 2,
    name: "Simon T",
    role: "CTO Samsasali",
    text: "Highly recommended.",
    color: "bg-violet-500",
  },
  {
    id: 3,
    name: "Samuel Lwanga",
    role: "CEO Peolabs",
    text: "A true professional.",
    color: "bg-pink-500",
  },
  {
    id: 4,
    name: "Thuku M",
    role: "CTO Peolabs",
    text: "Delivered on time.",
    color: "bg-emerald-500",
  },
  {
    id: 5,
    name: "Joseph G",
    role: "Bishop HIG",
    text: "Very reliable and professional.",
    color: "bg-orange-500",
  },
  {
    id: 6,
    name: "Hellen W",
    role: "Counselor",
    text: "Great communication.",
    color: "bg-blue-500",
  },
];

export default function Testimonials() {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState(null);
  const [radius, setRadius] = useState(400);
  const dragRotation = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // Combine scroll and drag rotation
  const totalRotation = useTransform(
    [scrollRotation, dragRotation],
    ([s, d]) => s + d
  );

  // Counter-rotate satellites to keep them upright
  const negativeRotation = useTransform(totalRotation, (r) => -r);

  useEffect(() => {
    const updateRadius = () => {
      setRadius(window.innerWidth < 768 ? 140 : 400);
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-32 px-6 relative overflow-hidden bg-[#0d1224] min-h-[800px] md:min-h-[1200px] flex items-center justify-center"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative w-full max-w-[1200px] h-[600px] md:h-[1000px] flex items-center justify-center">
        {/* Central Hub */}
        <div className="absolute z-20 w-32 h-32 md:w-64 md:h-64 bg-slate-900 rounded-full border-2 border-slate-700 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.4)] pointer-events-none">
          <div className="text-center p-2 md:p-6">
            <span className="block text-3xl md:text-6xl font-bold text-white mb-1 md:mb-2">
              W
            </span>
            <span className="text-[10px] md:text-sm text-cyan-400 tracking-[0.2em] md:tracking-[0.3em] uppercase font-bold">
              What People Say
            </span>
          </div>
        </div>

        {/* Orbiting System (Draggable) */}
        <motion.div
          style={{ rotate: totalRotation }}
          className="absolute inset-0 w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
          onPan={(e, info) => {
            // Adjust sensitivity based on screen size if needed
            dragRotation.set(dragRotation.get() + info.delta.x * 0.5);
          }}
        >
          {testimonials.map((t, i) => {
            const angle = (i / testimonials.length) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={t.id}
                className="absolute w-48 h-48 flex items-center justify-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {/* Connecting Line (SVG Curve) */}
                <svg
                  className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-visible"
                  style={{ transform: `rotate(${-angle}deg)` }}
                >
                  <path
                    d={`M 250 250 Q ${250 + radius / 2} 250 ${
                      250 + radius
                    } 250`}
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
                  className={`relative w-12 h-12 md:w-44 md:h-44 rounded-full md:rounded-3xl border border-slate-700 bg-slate-900/90 backdrop-blur-xl flex flex-col items-center justify-center p-0 md:p-4 text-center group hover:scale-110 transition-transform duration-300 cursor-pointer z-10 shadow-2xl ${
                    activeId === t.id ? "scale-110 ring-2 ring-cyan-400" : ""
                  }`}
                  style={{ rotate: negativeRotation }} // Counter-rotate using combined value
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveId(activeId === t.id ? null : t.id);
                  }}
                >
                  <div
                    className={`w-full h-full md:w-10 md:h-10 rounded-full ${t.color} opacity-80 blur-md absolute top-0 md:top-4`}
                  />

                  {/* Desktop Content */}
                  <div className="relative z-10 mt-2 hidden md:block">
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {t.name}
                    </h4>
                    <span className="text-cyan-400 text-xs font-mono uppercase tracking-wider mb-2 block">
                      {t.role}
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Mobile Icon (Initial State) */}
                  <span className="relative z-10 text-xs font-bold text-white md:hidden">
                    {t.name.charAt(0)}
                  </span>

                  {/* Tooltip (Mobile & Desktop Hover) */}
                  <div
                    className={`absolute top-full mt-4 w-48 p-3 bg-slate-800 rounded-lg border border-slate-700 transition-opacity duration-300 pointer-events-none text-center z-50 shadow-xl ${
                      activeId === t.id
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
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

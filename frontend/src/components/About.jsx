import { motion } from 'framer-motion';
import laptopGlow from '../assets/laptop_glow.png';

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 order-1"
        >
          <h2 className="text-sm font-mono text-cyan-400 mb-6 tracking-widest uppercase">The Manifesto</h2>
          
          <div className="relative">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              "I am a Kenyan-based <span className="text-white font-medium">Full Stack Developer</span> fueled by the relentless energy of the Silicon Savannah. 
            </p>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              I merge rigorous <span className="text-pink-400 font-normal">Python backends</span> with fluid <span className="text-violet-500 font-normal">React frontends</span> to solve real-world problems—from life-saving donation platforms to scalable e-commerce systems.
            </p>
            <p className="mt-6 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
              Young, hungry, and obsessed with the intersection of AI and human-centric design, I don't just write code; 
              <span className="text-white font-medium block mt-4">I engineer impact."</span>
            </p>
          </div>

          <div className="mt-12">
            <p className="text-slate-500 text-sm mb-4">Ready to ship something legendary?</p>
            <a 
              href="mailto:simontiphy@gmail.com"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Let's Collaborate
            </a>
          </div>
        </motion.div>

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

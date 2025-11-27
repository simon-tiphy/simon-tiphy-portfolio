export default function About() {
  return (
    <section className="py-24 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-sm font-mono text-slate-500 mb-8 tracking-widest uppercase">The Manifesto</h2>
      <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
        "I am a Kenyan-based Full Stack Developer fueled by the relentless energy of the Silicon Savannah. 
        I merge rigorous <span className="text-pink-400 font-normal">Python backends</span> with fluid <span className="text-violet-500 font-normal">React frontends</span> to solve real-world problems—from life-saving donation platforms to scalable e-commerce systems. 
        Young, hungry, and obsessed with the intersection of AI and human-centric design, I don't just write code; 
        <span className="text-white font-medium block mt-4">I engineer impact."</span>
      </p>
      
      <div className="mt-16">
        <p className="text-slate-500 text-sm mb-4">Ready to ship something legendary?</p>
        <a 
          href="mailto:simontiphy@gmail.com"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors"
        >
          Let's Collaborate
        </a>
      </div>
    </section>
  );
}

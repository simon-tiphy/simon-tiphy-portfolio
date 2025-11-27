import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const TimelineItem = ({ title, subtitle, date, description, type, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0"
  >
    <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 ${type === 'work' ? 'bg-cyan-500 border-cyan-900' : 'bg-violet-500 border-violet-900'}`} />
    
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="hidden sm:block text-slate-600">•</span>
      <span className="text-slate-400 font-medium">{subtitle}</span>
    </div>
    
    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4">
      <Calendar size={14} />
      {date}
    </div>
    
    <p className="text-slate-400 leading-relaxed max-w-2xl">
      {description}
    </p>
  </motion.div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Briefcase size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Experience</h2>
          </div>
          
          <div className="space-y-2">
            <TimelineItem 
              type="work"
              title="Software Developer"
              subtitle="Samsasali"
              date="2024 - Present"
              description="Leading full-stack development for an e-commerce platform. Implemented secure payment gateways, real-time inventory tracking, and a custom CMS using Python/Flask and React."
              delay={0.1}
            />
          </div>
        </div>

        {/* Education Column */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
          </div>
          
          <div className="space-y-2">
            <TimelineItem 
              type="edu"
              title="Software Engineering"
              subtitle="Moringa School"
              date="Graduated 2025"
              description="Intensive bootcamp covering full-stack development, algorithms, and system design. Specialized in Python and JavaScript ecosystems."
              delay={0.2}
            />
          </div>
        </div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, MessageCircle } from 'lucide-react';

const DockIcon = ({ href, icon: Icon, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-700/80 transition-colors group"
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={24} strokeWidth={1.5} />
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </motion.a>
  );
};

export default function Dock() {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 px-6 py-4 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-2xl shadow-black/50">
        <DockIcon href="https://github.com/simon-tiphy" icon={Github} label="GitHub" />
        <DockIcon href="https://www.linkedin.com/in/simon-tiphy-77357130b/" icon={Linkedin} label="LinkedIn" />
        <DockIcon href="https://x.com/SimonTiphy" icon={Twitter} label="X (Twitter)" />
        <DockIcon href="https://wa.me/254762668200" icon={MessageCircle} label="WhatsApp" />
        <DockIcon href="mailto:simontiphy@gmail.com" icon={Mail} label="Email" />
      </div>
    </div>
  );
}

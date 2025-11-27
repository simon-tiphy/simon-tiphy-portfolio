import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 border-t border-slate-900 bg-[#0d1224] relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-slate-600 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Simon Tiphy. <br className="md:hidden" />
          Built with ❤️.
        </p>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-900 transition-all group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

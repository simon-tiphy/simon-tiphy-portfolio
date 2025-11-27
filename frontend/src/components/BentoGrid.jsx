import { motion } from 'framer-motion';
import { MapPin, BarChart3, Hexagon, Music, Wallet, Users } from 'lucide-react';
import clsx from 'clsx';
import samsasaliPreview from '../assets/samsasali_preview.png';
import salesPreview1 from '../assets/sales_preview_1.png';
import salesPreview2 from '../assets/sales_preview_2.png';

const Card = ({ className, children, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={clsx(
      "relative overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800 p-6 backdrop-blur-sm transition-colors hover:border-slate-700 group cursor-pointer",
      className
    )}
  >
    {children}
  </motion.a>
);

export default function BentoGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="work">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[180px] gap-4">
        
        {/* Block 1: Samsasali (Large) */}
        <Card href="https://samsasali.co.ke/" className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-amber-950/30 to-slate-950/80">
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Hexagon className="w-48 h-48 text-amber-500" strokeWidth={0.5} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono text-amber-500">E-COMMERCE PLATFORM</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Samsasali Honey</h3>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              A premium e-commerce experience for organic honey. Features real-time inventory, secure payments, and a custom admin dashboard.
            </p>
          </div>
          
          {/* Screenshot Visual UI */}
          <div className="mt-6 w-full h-48 bg-slate-950/50 rounded-xl border border-amber-900/30 relative overflow-hidden flex items-center justify-center group-hover:border-amber-500/30 transition-colors">
             <img 
               src={samsasaliPreview} 
               alt="Samsasali Website Preview" 
               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>
        </Card>

        {/* Block 2: Bank Account Project (Medium) */}
        <Card href="https://github.com/simon-tiphy/bank-account-project" className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 group-hover:scale-110 transition-transform">
            <Wallet size={24} />
          </div>
          <h3 className="text-lg font-bold text-white">Bank App</h3>
          <p className="text-xs text-slate-400 mt-1">Secure Transaction System</p>
        </Card>

        {/* Block 3: Human Side (Small) */}
        <Card className="md:col-span-1 md:row-span-1 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black">
              <Music size={20} fill="currentColor" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Coding Focus</p>
              <p className="text-sm font-bold text-white">Oontz</p>
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full w-2/3" />
          </div>
          <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
            <span>2:14</span>
            <span>3:45</span>
          </div>
        </Card>

        {/* Block 4: Sales Dashboard (Medium - Wide) */}
        <Card href="https://github.com/simon-tiphy/optivensalestracking-system-" className="md:col-span-2 md:row-span-1 flex items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex-1 z-10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 size={18} className="text-pink-500" />
              Sales Analytics
            </h3>
            <p className="text-slate-400 text-xs mt-1">Data visualization dashboard for Optiven sales tracking.</p>
          </div>
          
          <div className="flex gap-2 relative z-10">
            {/* Screenshots */}
            <div className="w-20 h-16 rounded-lg overflow-hidden border border-slate-700 shadow-lg transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
               <img src={salesPreview1} alt="Sales Dashboard 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-20 h-16 rounded-lg overflow-hidden border border-slate-700 shadow-lg transform rotate-[5deg] hover:rotate-0 transition-transform duration-300 -ml-4">
               <img src={salesPreview2} alt="Sales Dashboard 2" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Existing Graph Animation (Background) */}
          <div className="absolute bottom-0 right-0 flex items-end gap-1 h-24 w-full justify-end pb-2 px-4 opacity-20 pointer-events-none">
            {[40, 70, 50, 90, 60, 80, 45, 75, 55, 95].map((h, i) => (
              <motion.div 
                key={i}
                className="w-4 bg-pink-500/80 rounded-t-sm"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              />
            ))}
          </div>
        </Card>

        {/* Block 5: Donation Platform (Small) */}
        <Card href="https://github.com/simon-tiphy/Donation-platform" className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center bg-slate-950 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/20 pointer-events-none" />
          <div className="relative group-hover:scale-110 transition-transform duration-300 mb-2">
            <MapPin className="w-12 h-12 text-green-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </div>
          <p className="text-sm font-bold text-white">Northern Kenya</p>
          <p className="text-xs text-slate-400">Donation Platform</p>
        </Card>

        {/* Block 6: CRM System (Medium - Wide) */}
        <Card href="https://github.com/simon-tiphy/my--crms-system-project-1" className="md:col-span-2 md:row-span-1 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-transparent pointer-events-none" />
           <div className="flex items-start justify-between">
             <div>
               <div className="flex items-center gap-2 mb-2">
                 <Users size={16} className="text-violet-400" />
                 <span className="text-xs font-mono text-violet-400">CRM SYSTEM</span>
               </div>
               <h3 className="text-xl font-bold text-white">Customer Relationship Manager</h3>
               <p className="text-slate-400 text-xs mt-1 max-w-xs">
                 Comprehensive system for managing client interactions and data.
               </p>
             </div>
             
             {/* Abstract UI for CRM */}
             <div className="hidden sm:flex flex-col gap-2 w-32 opacity-80">
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full w-3/4 bg-violet-500" />
               </div>
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full w-1/2 bg-violet-500" />
               </div>
               <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full w-5/6 bg-violet-500" />
               </div>
             </div>
           </div>
        </Card>

      </div>
    </section>
  );
}

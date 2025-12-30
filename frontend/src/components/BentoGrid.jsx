import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  BarChart3,
  Hexagon,
  Music,
  Wallet,
  Users,
  Github,
  ExternalLink,
  Terminal,
  ArrowRight,
} from "lucide-react";
import clsx from "clsx";
import samsasaliPreview from "../assets/samsasali_preview.png";
import salesPreview1 from "../assets/sales_preview_1.png";
import salesPreview2 from "../assets/sales_preview_2.png";

const Card = ({ className, children, project }) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  // Toggle on click for mobile (and desktop if preferred)
  const handleCardClick = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onMouseEnter={() => setOverlayVisible(true)}
      onMouseLeave={() => setOverlayVisible(false)}
      onClick={handleCardClick}
      className={clsx(
        "relative overflow-hidden rounded-3xl bg-slate-900/50 border border-slate-800 p-6 backdrop-blur-sm transition-colors hover:border-slate-700 group cursor-pointer",
        className
      )}
    >
      {children}

      {/* Overlay - Controlled by State for reliable mobile interaction */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{
          y: isOverlayVisible ? "0%" : "100%",
          opacity: isOverlayVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center z-20 p-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking overlay/buttons
      >
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center tracking-tight">
          {project.title}
        </h3>

        <div className="flex flex-col w-full gap-3 max-w-[200px]">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500/90 to-blue-500/90 text-white text-sm font-semibold hover:opacity-100 transition-opacity shadow-lg shadow-cyan-500/10 border border-cyan-400/20"
            >
              <ExternalLink size={14} />
              Visit Live
            </a>
          )}

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 px-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-sm hover:text-white hover:border-slate-500 transition-colors font-mono"
            >
              <Github size={14} />
              View Code
            </a>
          )}

          {!project.links.live && !project.links.github && (
            <span className="text-slate-500 text-xs font-mono text-center">
              No public links
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function BentoGrid() {
  const projects = {
    samsasali: {
      title: "Samsasali Honey",
      description: "A premium e-commerce experience for organic honey.",
      links: {
        live: "https://samsasali.co.ke/",
        github: "https://github.com/simon-tiphy/samsasali.co.ke",
      },
    },
    bank: {
      title: "Bank App",
      description:
        "Secure Transaction System designed for reliability and speed.",
      links: {
        live: null,
        github: "https://github.com/simon-tiphy/bank-account-project",
      },
    },
    oontz: {
      title: "Oontz",
      description: "My personal coding companion and music focus app.",
      links: { live: null, github: null },
    },
    sales: {
      title: "Sales Analytics",
      description:
        "Data visualization dashboard for sales tracking and performance metrics.",
      links: {
        live: "https://optivensalestracking-system.vercel.app/",
        github: "https://github.com/simon-tiphy/optivensalestracking-system-",
      },
    },
    donation: {
      title: "Donation Platform",
      description:
        "A platform to support Northern Kenya communities through direct donations.",
      links: {
        live: null,
        github: "https://github.com/simon-tiphy/Donation-platform",
      },
    },
    crm: {
      title: "CRM System",
      description:
        "Comprehensive system for managing client interactions and data.",
      links: {
        live: null,
        github: "https://github.com/simon-tiphy/my--crms-system-project-1",
      },
    },
    hubops: {
      title: "HubOps",
      description:
        "Operational management platform for streamlining hub activities and resource allocation.",
      links: { live: null, github: "https://github.com/simon-tiphy/hubops" },
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20" id="work">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Selected Work
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[180px] gap-4">
        {/* Block 1: Samsasali (Large) */}
        <Card
          project={projects.samsasali}
          className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-gradient-to-br from-amber-950/30 to-slate-950/80"
        >
          <div className="absolute top-0 right-0 p-4 opacity-20">
            <Hexagon className="w-48 h-48 text-amber-500" strokeWidth={0.5} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-mono text-amber-500">
                E-COMMERCE PLATFORM
              </span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">
              Samsasali Honey
            </h3>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              A premium e-commerce experience for organic honey. Features
              real-time inventory, secure payments, and a custom admin
              dashboard.
            </p>
          </div>

          {/* Screenshot Visual UI */}
          <div className="mt-6 w-full h-48 bg-slate-950/50 rounded-xl border border-amber-900/30 relative overflow-hidden flex items-center justify-center group-hover:border-amber-500/30 transition-colors">
            <img
              src={samsasaliPreview}
              alt="Samsasali Website Preview"
              className="w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
          </div>
        </Card>

        {/* Block 2: Bank Account Project (Medium) */}
        <Card
          project={projects.bank}
          className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center bg-slate-950 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent pointer-events-none" />
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 transition-transform">
            <Wallet size={24} />
          </div>
          <h3 className="text-lg font-bold text-white">Bank App</h3>
          <p className="text-xs text-slate-400 mt-1">
            Secure Transaction System
          </p>
        </Card>

        {/* Block 3: Human Side (Small) */}
        <Card
          project={projects.oontz}
          className="md:col-span-1 md:row-span-1 flex flex-col justify-center relative overflow-hidden"
        >
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
        <Card
          project={projects.sales}
          className="md:col-span-2 md:row-span-1 flex items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex-1 z-10">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 size={18} className="text-pink-500" />
              Sales Analytics
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Data visualization dashboard for sales tracking.
            </p>
          </div>

          <div className="flex gap-2 relative z-10">
            {/* Screenshots */}
            <div className="w-20 h-16 rounded-lg overflow-hidden border border-slate-700 shadow-lg transform rotate-[-5deg] transition-transform duration-300">
              <img
                src={salesPreview1}
                alt="Sales Dashboard 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-16 rounded-lg overflow-hidden border border-slate-700 shadow-lg transform rotate-[5deg] transition-transform duration-300 -ml-4">
              <img
                src={salesPreview2}
                alt="Sales Dashboard 2"
                className="w-full h-full object-cover"
              />
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
        <Card
          project={projects.donation}
          className="md:col-span-1 md:row-span-1 flex flex-col items-center justify-center bg-slate-950 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/20 pointer-events-none" />
          <div className="relative transition-transform duration-300 mb-2">
            <MapPin className="w-12 h-12 text-green-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
          </div>
          <p className="text-sm font-bold text-white">Northern Kenya</p>
          <p className="text-xs text-slate-400">Donation Platform</p>
        </Card>

        {/* Block 6: CRM System (Medium - Wide) */}
        <Card
          project={projects.crm}
          className="md:col-span-2 md:row-span-1 flex flex-col justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-transparent pointer-events-none" />
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users size={16} className="text-violet-400" />
                <span className="text-xs font-mono text-violet-400">
                  CRM SYSTEM
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Customer Relationship Manager
              </h3>
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

        {/* Block 7: HubOps (Small) */}
        <Card
          project={projects.hubops}
          className="md:col-span-1 md:row-span-1 flex flex-col justify-center relative overflow-hidden bg-slate-950"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none" />
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 border border-indigo-500/30">
              <Terminal size={20} />
            </div>
            <div>
              <p className="text-xs text-indigo-400 font-mono">DEVOPS</p>
              <p className="text-sm font-bold text-white">HubOps</p>
            </div>
          </div>
          <div className="mt-2 text-xs text-slate-500 flex items-center gap-1 transition-colors">
            View Project <ArrowRight size={12} />
          </div>
        </Card>
      </div>
    </section>
  );
}

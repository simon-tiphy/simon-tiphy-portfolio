import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { useState } from "react";

export default function BookingModal({ isOpen, onClose }) {
  // TODO: detailed instructions for the user:
  // Replace this URL with your actual Cal.com or Calendly booking link.
  // Example: "https://cal.com/simontiphy" or "https://calendly.com/simontiphy"
  const bookingUrl = "https://calendly.com/simontiphy/30min";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-y-auto"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[51] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl h-[85vh] pointer-events-auto group"
            >
              {/* Gradient Glow - Animated Border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-violet-600 via-cyan-500 to-pink-500 rounded-2xl opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-gradient-xy"></div>

              {/* Main Content Card */}
              <div className="relative w-full h-full bg-[#0d1224]/90 backdrop-blur-xl rounded-2xl overflow-hidden flex flex-col border border-white/10 shadow-2xl">
                {/* Minimalist Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2 mr-4">
                      <div
                        className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer"
                        onClick={onClose}
                      />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-slate-400 font-mono tracking-wide uppercase">
                      Simontiphy Scheduling System
                    </span>
                  </div>

                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Iframe Content */}
                <div className="flex-1 bg-white relative">
                  <iframe
                    src={bookingUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule Appointment"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[51] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0f1629] border border-slate-800 w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d1224]">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-violet-500/10 rounded-lg">
                    <Calendar className="text-violet-400" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    Book a Session
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content (Iframe) */}
              <div className="flex-1 bg-white relative">
                {/* Loading State or Instruction if URL is empty */}
                <iframe
                  src={bookingUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule Appointment"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

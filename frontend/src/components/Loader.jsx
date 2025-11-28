import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d1224]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative">
        {/* Outer Spinning Ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-2 border-slate-800 border-t-cyan-400 border-r-violet-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Spinning Ring (Reverse) */}
        <motion.div
          className="absolute inset-0 m-auto w-20 h-20 rounded-full border-2 border-slate-800 border-b-pink-500 border-l-cyan-400"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Center Pulse */}
        <motion.div
          className="absolute inset-0 m-auto w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-8 font-mono text-sm">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-cyan-400"
        >
          SYSTEM INITIALIZING...
        </motion.span>
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

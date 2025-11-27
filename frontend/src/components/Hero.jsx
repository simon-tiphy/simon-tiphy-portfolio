
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function Hero() {
  const codeString = `const developer = {
  name: "Simon Tiphy",
  role: "Full Stack Engineer",
  location: "Nairobi, KE",
  stack: ["React", "Python", "Next.js"],
  passion: "Building scalable systems",
  problemSolver:true,
  quickLearner:true,
  hardWorker:true,
  status: "Hireable",
  hireable:function() {
    return(
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 5
    );
  }
};`;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 lg:px-20 overflow-hidden pt-20 lg:pt-0">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column: Text & CTA */}
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-mono tracking-wider backdrop-blur-sm">
              FULL STACK DEVELOPER
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-500 to-cyan-400">
                Digital Systems
              </span>
            </h1>
            <h2 className="text-2xl font-mono text-slate-500 mb-8 tracking-widest ">
              {" "}
              with{" "}
              <span className="text-pink-400 font-normal text-3xl">
                Simon Tiphy.
              </span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
              I build accessible, pixel-perfect, and performant web experiences.
              Currently focused on solving real-world problems in the Global
              Market.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:simontiphy@gmail.com"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="px-8 py-3 rounded-full bg-slate-900/50 border border-slate-700 text-white font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group"
              >
                <FileText
                  size={18}
                  className="group-hover:text-cyan-400 transition-colors"
                />
                Get Resume
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-slate-500">
              <a
                href="https://github.com/simon-tiphy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/simon-tiphy-77357130b/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/SimonTiphy"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Code Window */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-xl bg-[#0d1224]/80 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-slate-700 transition-colors">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-800">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-4 text-xs font-mono text-slate-500">
                developer.js
              </span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex">
                <div className="text-slate-700 select-none mr-4 text-right">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>
                <div className="text-slate-300">
                  <span className="text-pink-400">const</span>{" "}
                  <span className="text-violet-400">developer</span>{" "}
                  <span className="text-cyan-400">=</span> {"{"}
                  <br />
                  &nbsp;&nbsp;name:{" "}
                  <span className="text-green-400">"Simon Tiphy"</span>,
                  <br />
                  &nbsp;&nbsp;role:{" "}
                  <span className="text-green-400">"Full Stack Engineer"</span>,
                  <br />
                  &nbsp;&nbsp;location:{" "}
                  <span className="text-green-400">"Nairobi, KE"</span>,
                  <br />
                  &nbsp;&nbsp;stack: [
                  <span className="text-green-400">"React"</span>,{" "}
                  <span className="text-green-400">"Python"</span>,{" "}
                  <span className="text-green-400">"Next.js"</span>],
                  <br />
                  &nbsp;&nbsp;passion:{" "}
                  <span className="text-green-400">
                    "Building scalable systems"
                  </span>
                  ,
                  <br />
                  &nbsp;&nbsp;problemSolver:{" "}
                  <span className="text-green-400">true</span>,
                  <br />
                  &nbsp;&nbsp;quickLearner:{" "}
                  <span className="text-green-400">true</span>,
                  <br />
                  &nbsp;&nbsp;hardWorker:{" "}
                  <span className="text-green-400">true</span>,
                  <br />
                  &nbsp;&nbsp;status:{" "}
                  <span className="text-green-400">"Hireable"</span>,
                  <br />
                  &nbsp;&nbsp;hireable:
                  <span className="text-cyan-400">function</span>() {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-cyan-400">return</span>(
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.hardWorker &&
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.problemSolver &&
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skills.length &gt;= 5
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;);
                  <br />
                  &nbsp;&nbsp;{"}"},
                  <br />
                  {"}"};
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

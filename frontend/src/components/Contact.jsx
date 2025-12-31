import { motion } from "framer-motion";
import { Send, MessageCircle, Mail, Calendar } from "lucide-react"; // Added Calendar
import { useState } from "react";
import BookingModal from "./BookingModal"; // Added Import

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isBookingOpen, setIsBookingOpen] = useState(false); // Added State

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Construct WhatsApp message
    const text = `Hello Simon, my name is ${name} (${email}). ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/254762668200?text=${encodedText}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden bg-[#0d1224]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Fading Patches */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-violet-600/10 to-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle "Box" Highlights */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-lg blur-2xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-lg blur-2xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and innovative ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Channels
              </h3>

              <div className="space-y-6">
                {/* Book a Call Button - Highlighted */}
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full relative overflow-hidden group p-[1px] rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-slate-900"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <div className="relative w-full h-full bg-slate-950 rounded-xl p-4 flex items-center gap-4 transition-all group-hover:bg-slate-900">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 uppercase tracking-wider mb-1">
                        Limited Availability
                      </p>
                      <p className="font-bold text-lg text-white group-hover:text-violet-200 transition-colors">
                        Book a Strategy Call 🚀
                      </p>
                    </div>
                  </div>
                </button>

                <div className="h-px bg-slate-800 my-4" />

                <a
                  href="https://wa.me/254762668200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-green-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">WhatsApp</p>
                    <p className="font-medium">+254 762 668 200</p>
                  </div>
                </a>

                <a
                  href="mailto:simontiphy@gmail.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-violet-400 transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-violet-500/20 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="font-medium">simontiphy@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-400"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-900/50 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium py-3 rounded-lg hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
}

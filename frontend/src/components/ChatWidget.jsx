import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm Simon's AI Assistant. How can I help you today?",
      sender: "ai",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Portfolio Data for Smart Responses
  const portfolioData = {
    skills:
      "Simon is proficient in React, Python, Next.js, TypeScript, Flask, Tailwind CSS, Docker, Postgres, Figma, Git, Redux, and Supabase.",
    experience:
      "Simon is currently a Software Developer at Samsasali (2024-Present), building e-commerce platforms with Python/Flask and React. He is also a 2025 graduate from Moringa School's Software Engineering program.",
    projects:
      "Some of Simon's key projects include:\n• Samsasali Honey (E-commerce platform)\n• Sales Analytics Dashboard\n• CRM System\n• Northern Kenya Donation Platform\n• Bank App (Secure transactions)",
    contact:
      "You can reach Simon via email at simontiphy@gmail.com or connect on LinkedIn/GitHub.",
    samsasali:
      "Samsasali is a premium e-commerce experience for organic honey that Simon built. It features real-time inventory, secure payments, and a custom admin dashboard.",
    manifesto:
      "Simon is a Kenyan-based Full Stack Developer fueled by the relentless energy of the Silicon Savannah. He merges rigorous Python backends with fluid React frontends to solve real-world problems. Young, hungry, and obsessed with the intersection of AI and human-centric design, he doesn't just write code; he engineers impact.",
    default:
      "I'm not sure about that specific detail. However, I can tell you about Simon's **skills**, **projects**, **experience**, or how to **contact** him!",
  };

  const generateResponse = (input) => {
    const lowerInput = input.toLowerCase();

    if (
      lowerInput.includes("hello") ||
      lowerInput.includes("hi") ||
      lowerInput.includes("hey")
    ) {
      return "Hello! I'm ready to answer questions about Simon's work. Ask me about his skills or projects!";
    }
    if (
      lowerInput.includes("simon") ||
      lowerInput.includes("about him") ||
      lowerInput.includes("who is")
    ) {
      return portfolioData.manifesto;
    }
    if (
      lowerInput.includes("skill") ||
      lowerInput.includes("stack") ||
      lowerInput.includes("tech")
    ) {
      return portfolioData.skills;
    }
    if (
      lowerInput.includes("experience") ||
      lowerInput.includes("work") ||
      lowerInput.includes("job")
    ) {
      return portfolioData.experience;
    }
    if (
      lowerInput.includes("project") ||
      lowerInput.includes("built") ||
      lowerInput.includes("portfolio")
    ) {
      return portfolioData.projects;
    }
    if (
      lowerInput.includes("contact") ||
      lowerInput.includes("email") ||
      lowerInput.includes("reach")
    ) {
      return portfolioData.contact;
    }
    if (lowerInput.includes("samsasali")) {
      return portfolioData.samsasali;
    }
    return portfolioData.default;
  };

  const suggestedQuestions = [
    "Tell me about Simon",
    "What are your skills?",
    "Tell me about your projects.",
    "What is your experience?",
    "How can I contact you?",
    "Tell me about Samsasali.",
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    // Directly trigger send logic (need to extract logic or call it)
    // For simplicity, I'll just set it and let the user send, OR better:
    // I will refactor handleSend to accept an argument
    handleSend(null, question);
  };

  // Refactored handleSend to accept optional text
  const handleSend = async (e, textOverride = null) => {
    if (e) e.preventDefault();
    const text = textOverride || inputValue;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      const aiResponse = {
        id: Date.now() + 1,
        text: responseText,
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[90vw] sm:w-[380px] h-[80vh] sm:h-[600px] max-h-[600px] rounded-2xl overflow-hidden flex flex-col shadow-2xl border border-white/10 bg-[#0d1224]/80 backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-40 animate-pulse" />
                  <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center border border-white/20">
                    <Sparkles size={18} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wide">
                    AI Assistant
                  </h3>
                  <p className="text-[10px] text-cyan-400 font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    ONLINE
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-br from-cyan-600 to-blue-600 text-white rounded-br-none"
                        : "bg-white/10 text-slate-200 rounded-bl-none border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 p-4 rounded-2xl rounded-bl-none border border-white/5 flex gap-1.5 items-center h-12">
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                    />
                    <motion.div
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                    />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions Chips */}
            <div className="px-4 pb-2">
              <p className="text-[10px] text-slate-500 mb-2 font-medium uppercase tracking-wider pl-1">
                Suggested Questions
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none mask-linear-fade">
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickQuestion(q)}
                    className="whitespace-nowrap px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all flex-shrink-0"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-2 p-2 bg-cyan-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/20"
                >
                  <Send size={16} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Launcher Orb */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

        {/* Main Orb */}
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-cyan-400 to-blue-600 p-[1px] shadow-2xl shadow-cyan-500/30 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" /> {/* Inner shadow */}
          <div className="relative w-full h-full rounded-full bg-slate-900/90 backdrop-blur-sm flex items-center justify-center border border-white/10">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} className="text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  {/* Animated Icon Content */}
                  <Sparkles size={28} className="text-cyan-300" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* Shine Effect */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-full blur-sm pointer-events-none" />
        </div>
      </motion.button>
    </div>
  );
};

export default ChatWidget;

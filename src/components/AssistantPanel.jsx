import { useEffect, useRef, useState } from "react";
import { Bot, Mic, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AssistantPanel() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! Describe your edit and I'll set things up." },
  ]);
  const [input, setInput] = useState("");
  const [listening, setListening] = useState(false);
  const [status, setStatus] = useState("Idle");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quick = [
    "Brighten subject",
    "Remove background",
    "Warm sunset look",
    "Sharpen details",
  ];

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setStatus("Processing...");
    // Simulated assistant response
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: `Applied: ${text}. You can fine-tune from the sliders.` },
      ]);
      setStatus("Idle");
    }, 900);
  };

  const toggleVoice = () => {
    setListening((v) => !v);
  };

  return (
    <div className="w-full h-full grid grid-rows-[1fr_auto] overflow-hidden rounded-2xl ring-1 ring-neutral-800 bg-neutral-900/60">
      <div className="p-4 overflow-y-auto">
        <div className="flex items-center gap-2 mb-3">
          <span className={`h-2 w-2 rounded-full ${listening ? "bg-cyan-400 animate-pulse" : "bg-neutral-600"}`} />
          <span className="text-xs text-neutral-400">{status}</span>
        </div>
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-sm ring-1 ${
                m.role === "user"
                  ? "bg-cyan-500/10 text-cyan-100 ring-cyan-500/30"
                  : "bg-neutral-800/80 text-neutral-200 ring-neutral-700"
              }`}>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {quick.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-3 py-2 text-xs text-neutral-200 ring-1 ring-neutral-700 hover:ring-cyan-600/50"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" /> {q}
            </button>
          ))}
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="p-3 flex items-center gap-2 border-t border-neutral-800 bg-neutral-900/80"
      >
        <button
          type="button"
          onClick={toggleVoice}
          aria-pressed={listening}
          className={`rounded-xl p-2 ring-1 ${
            listening
              ? "bg-cyan-500/10 text-cyan-200 ring-cyan-500/30"
              : "bg-neutral-800 text-neutral-200 ring-neutral-700"
          }`}
        >
          <Mic className="h-4 w-4" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your edit…"
          className="flex-1 rounded-xl bg-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-400 ring-1 ring-neutral-700 focus:outline-none focus:ring-cyan-600/50"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-white text-sm shadow-lg shadow-blue-900/30"
        >
          <Send className="h-4 w-4" />
          Send
        </button>
      </form>
    </div>
  );
}

import { motion } from "framer-motion";
import { Rocket, Sparkles, Star, Search } from "lucide-react";

export default function HomeScreen({ onGetStarted }) {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-neutral-900/50 rounded-2xl border border-neutral-800 p-8 md:p-12">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-neutral-800/80 px-3 py-1 text-xs text-cyan-300 ring-1 ring-neutral-700">
            <Sparkles className="h-3.5 w-3.5" />
            AI Editor 2030 • Mobile-first • Human-in-the-loop
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Design, edit, and enhance with an AI assistant that keeps you in control
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl">
            Real-time tools, conversational commands, and a professional workspace built for speed. Dark, elegant, and touch-optimized.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onGetStarted}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-900/30 hover:from-blue-500 hover:to-cyan-400 transition"
            >
              <Rocket className="h-4 w-4" />
              Get started
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-800 px-5 py-3 text-neutral-200 ring-1 ring-neutral-700 hover:bg-neutral-750/50">
              <Search className="h-4 w-4" />
              Explore projects
            </button>
          </div>
        </motion.div>
      </div>

      {/* Feature highlights */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Conversational control",
            desc: "Speak or type natural commands. The assistant suggests quick actions and shows live status.",
            icon: Sparkles,
          },
          {
            title: "Real-time tools",
            desc: "Tap-to-select object removal, smart lighting sliders, and instant enhancement.",
            icon: Star,
          },
          {
            title: "Pro-grade design",
            desc: "Dark theme, gradient accents, smooth animations, and context-aware panels.",
            icon: Rocket,
          },
        ].map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl bg-neutral-900/60 p-5 ring-1 ring-neutral-800"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 p-2 ring-1 ring-neutral-700">
                <f.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-white font-medium">{f.title}</h3>
                <p className="text-sm text-neutral-300 mt-1">{f.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Gallery */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-semibold">Your projects</h2>
          <button className="text-sm text-cyan-300 hover:text-cyan-200">View all</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="group relative overflow-hidden rounded-xl bg-neutral-900/60 ring-1 ring-neutral-800">
              <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900" />
              <div className="p-3 flex items-center justify-between">
                <div>
                  <p className="text-white text-sm">Project {n}</p>
                  <p className="text-xs text-neutral-400">Edited 2d ago</p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition text-xs rounded-md bg-neutral-800 px-2 py-1 ring-1 ring-neutral-700 text-neutral-200">Open</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

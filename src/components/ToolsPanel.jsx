import { BadgeCheck, Eraser, Palette, Scan, Sparkles, Sun, Wand2, ZoomIn } from "lucide-react";

const tools = [
  { name: "Object Removal", icon: Eraser, desc: "Tap to select and remove distractions.", badge: "AI" },
  { name: "Smart Lighting", icon: Sun, desc: "Balance exposure in real time.", badge: "Live" },
  { name: "Auto Enhancement", icon: Wand2, desc: "Instant pro-grade presets.", badge: "1-Tap" },
  { name: "Background Removal", icon: Scan, desc: "Precise edges, fast results.", badge: "HD" },
  { name: "Style Transfer", icon: Palette, desc: "Apply artistic or brand styles.", badge: "New" },
  { name: "Color Grading", icon: Sparkles, desc: "Film-like tones with control.", badge: "Pro" },
  { name: "Detail Enhancement", icon: ZoomIn, desc: "Sharpen and restore texture.", badge: "XR" },
  { name: "Smart Retouching", icon: BadgeCheck, desc: "Skin, blemishes, and more.", badge: "AI" },
];

export default function ToolsPanel() {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((t) => (
          <button
            key={t.name}
            className="group text-left rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-neutral-800 hover:ring-cyan-600/50 hover:shadow-[0_0_0_1px_rgba(8,145,178,0.35)] transition"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-gradient-to-br from-blue-600/20 to-cyan-500/20 p-2 ring-1 ring-neutral-700">
                <t.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-white font-medium">{t.name}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 ring-1 ring-cyan-400/30">
                    {t.badge}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 mt-1">{t.desc}</p>
                <div className="mt-3 h-20 rounded-lg bg-gradient-to-tr from-neutral-800 to-neutral-900 ring-1 ring-neutral-800" />
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

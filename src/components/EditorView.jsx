import { useMemo, useRef, useState } from "react";
import { Eraser, Scissors, Sliders, Wand2 } from "lucide-react";

export default function EditorView() {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);
  const [warmth, setWarmth] = useState(0);
  const [selectedPoints, setSelectedPoints] = useState([]);
  const containerRef = useRef(null);

  const filterCss = useMemo(
    () => `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) hue-rotate(${warmth}deg)`,
    [brightness, contrast, saturation, warmth]
  );

  const handleTap = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSelectedPoints((pts) => [...pts, { x, y }]);
  };

  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr_auto] gap-3">
      {/* Toolbar */}
      <div className="flex items-center gap-2 rounded-2xl bg-neutral-900/60 p-2 ring-1 ring-neutral-800">
        <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 bg-neutral-800 text-neutral-200 ring-1 ring-neutral-700">
          <Wand2 className="h-4 w-4 text-cyan-300" /> Auto Enhance
        </button>
        <div className="ml-auto flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs text-neutral-400">AI ready</span>
        </div>
      </div>

      {/* Canvas */}
      <div
        ref={containerRef}
        onClick={handleTap}
        className="relative overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-neutral-800"
      >
        <img
          src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop"
          alt="Preview"
          className="h-full w-full object-cover select-none"
          style={{ filter: filterCss }}
        />
        {/* Selected points visualize object removal tap-to-select */}
        {selectedPoints.map((p, i) => (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/70"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: 80, height: 80, boxShadow: "0 0 0 9999px rgba(0,0,0,0.0)" }}
          >
            <div className="absolute inset-2 rounded-full backdrop-blur-[2px] bg-neutral-900/10" />
          </div>
        ))}
        <div className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-neutral-900/80 px-3 py-1 text-xs text-neutral-200 ring-1 ring-neutral-700">
          Tap to select objects
          <Eraser className="h-3.5 w-3.5 text-cyan-300" />
        </div>
      </div>

      {/* Smart lighting sliders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <ControlCard label="Brightness" icon={Sliders} value={brightness} onChange={setBrightness} min={50} max={150} suffix="%" />
        <ControlCard label="Contrast" icon={Sliders} value={contrast} onChange={setContrast} min={50} max={150} suffix="%" />
        <ControlCard label="Saturation" icon={Sliders} value={saturation} onChange={setSaturation} min={50} max={180} suffix="%" />
        <ControlCard label="Warmth" icon={Scissors} value={warmth} onChange={setWarmth} min={-45} max={45} suffix="°" />
      </div>
    </div>
  );
}

function ControlCard({ label, icon: Icon, value, onChange, min, max, suffix }) {
  return (
    <div className="rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-neutral-800">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-cyan-300" />
          <span className="text-neutral-200 text-sm">{label}</span>
        </div>
        <span className="text-neutral-400 text-xs">{Math.round(value)}{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-cyan-400"
      />
    </div>
  );
}

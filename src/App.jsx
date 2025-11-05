import { useState } from "react";
import HomeScreen from "./components/HomeScreen.jsx";
import EditorView from "./components/EditorView.jsx";
import ToolsPanel from "./components/ToolsPanel.jsx";
import AssistantPanel from "./components/AssistantPanel.jsx";
import { Bot, Home, Image as ImageIcon, Wand2 } from "lucide-react";

function App() {
  const [tab, setTab] = useState("home");

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Top app bar */}
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-900">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500" />
          <div className="flex flex-col">
            <span className="text-sm text-neutral-300">AI Editor 2030</span>
            <span className="text-xs text-neutral-500 -mt-1">Lightweight • Mobile-first • Human-in-the-loop</span>
          </div>
          <div className="ml-auto inline-flex items-center gap-2 text-xs">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-neutral-400">AI online</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-4 pb-24">
        {tab === "home" && <HomeScreen onGetStarted={() => setTab("editor")} />}
        {tab === "editor" && <EditorView />}
        {tab === "tools" && <ToolsPanel />}
        {tab === "assistant" && <AssistantPanel />}
      </main>

      {/* Bottom navigation */}
      <nav className="fixed bottom-3 left-0 right-0">
        <div className="mx-auto max-w-md rounded-2xl bg-neutral-900/80 backdrop-blur px-2 py-1 ring-1 ring-neutral-800">
          <div className="grid grid-cols-4 gap-1">
            <NavItem active={tab === "home"} onClick={() => setTab("home")} icon={Home} label="Home" />
            <NavItem active={tab === "editor"} onClick={() => setTab("editor")} icon={ImageIcon} label="Editor" />
            <NavItem active={tab === "tools"} onClick={() => setTab("tools")} icon={Wand2} label="Tools" />
            <NavItem active={tab === "assistant"} onClick={() => setTab("assistant")} icon={Bot} label="Assistant" />
          </div>
        </div>
      </nav>
    </div>
  );
}

function NavItem({ active, onClick, icon: Icon, label }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm transition ring-1 ${
        active
          ? "bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-200 ring-cyan-600/30"
          : "bg-neutral-900 text-neutral-300 ring-neutral-800"
      }`}
    >
      <Icon className={`h-4 w-4 ${active ? "text-cyan-300" : "text-neutral-400"}`} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export default App;

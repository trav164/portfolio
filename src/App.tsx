import type { CSSProperties } from "react";
import { useTheme } from "./useTheme";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lewis-travis-43656ab5/" },
  { label: "GitHub", href: "https://github.com/trav164" },
];

// Progressive edge blur: each layer is stronger but reaches less far in from the edges.
// Blur is in em so it scales with the heading size on every screen.
const edgeBlurLayers = [
  { blur: "0.01em", stop: "45%" },
  { blur: "0.023em", stop: "32%" },
  { blur: "0.046em", stop: "18%" },
];

export default function App() {
  const { theme, toggle } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <main className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-paper px-4 text-ink transition-colors duration-500">
      <div aria-hidden="true" className="vignette pointer-events-none absolute inset-0 -z-10" />

      <button
        type="button"
        onClick={toggle}
        aria-label={`Switch to ${next} mode`}
        className="absolute top-5 right-5 flex cursor-pointer items-center gap-2 font-mono text-xs tracking-[0.2em] text-muted uppercase transition-colors hover:text-ink sm:top-8 sm:right-8 sm:text-sm"
      >
        <span aria-hidden="true" className="inline-block size-2.5 rounded-full border border-current bg-[linear-gradient(90deg,currentColor_50%,transparent_50%)]" />
        {next}
      </button>

      <div className="relative text-[clamp(4rem,21vw,22rem)] leading-none">
        <div
          aria-hidden="true"
          className="glow pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[3em] w-[6em] -translate-1/2 motion-safe:animate-glow"
        />
        <h1 className="chromatic select-none font-display font-black tracking-tight uppercase blur-[0.0066em]">
          Lewis
        </h1>
        {edgeBlurLayers.map(({ blur, stop }) => (
          <div
            key={blur}
            aria-hidden="true"
            className="edge-blur pointer-events-none absolute -inset-[0.3em]"
            style={{ "--edge-blur": blur, "--edge-stop": stop } as CSSProperties}
          />
        ))}
      </div>

      <p className="mt-[clamp(1.5rem,4vw,3.5rem)] text-center font-mono text-xs tracking-[0.25em] text-muted uppercase sm:text-base">
        <span className="block sm:inline">Fullstack web developer</span>
        <span aria-hidden="true" className="hidden sm:inline"> · </span>
        <span className="mt-2 block sm:mt-0 sm:inline">Retford, UK</span>
      </p>

      <nav className="mt-12 flex gap-10 sm:mt-16 sm:gap-12">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="border-b border-ink pb-1 font-mono text-sm tracking-[0.2em] uppercase transition-opacity hover:opacity-60 sm:text-lg"
          >
            {label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>

      <div
        aria-hidden="true"
        className="grain pointer-events-none fixed inset-0 z-50 opacity-20 mix-blend-multiply dark:opacity-15 dark:mix-blend-screen dark:invert"
      />
    </main>
  );
}

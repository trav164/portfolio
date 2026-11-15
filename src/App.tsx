import type { CSSProperties } from "react";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lewis-travis-43656ab5/" },
  { label: "GitHub", href: "https://github.com/trav164" },
];

// Progressive edge blur: each layer is stronger but reaches less far in from the edges
const edgeBlurLayers = [
  { blur: "3px", stop: "45%" },
  { blur: "7px", stop: "32%" },
  { blur: "14px", stop: "18%" },
];

export default function App() {
  return (
    <main className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-paper px-4 text-ink">
      <div className="relative">
        <h1 className="chromatic select-none font-display text-[clamp(4.5rem,21vw,22rem)] leading-none font-black tracking-tight uppercase blur-[2px]">
          Lewis
        </h1>
        {edgeBlurLayers.map(({ blur, stop }) => (
          <div
            key={blur}
            aria-hidden="true"
            className="edge-blur pointer-events-none absolute -inset-x-[6%] -inset-y-[15%]"
            style={{ "--edge-blur": blur, "--edge-stop": stop } as CSSProperties}
          />
        ))}
      </div>

      <p className="mt-[clamp(1.5rem,4vw,3.5rem)] text-center font-mono text-xs tracking-[0.25em] text-muted uppercase sm:text-base">
        Fullstack web developer · Sheffield, UK
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

      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-50 opacity-20 mix-blend-multiply" />
    </main>
  );
}

import { useState } from "react";

type Project = {
  id: string;
  title: string;
  kind: string;
  description: string;
  image: string;
  href?: string;
};

const projects: Project[] = [
  {
    id: "needle-drop",
    title: "Needle Drop",
    kind: "Game",
    description: "Guess-the-intro party game. Host a room or play pass-and-play on one phone.",
    image: "/work/needle-drop.webp",
    href: "https://needledropgame.co.uk/",
  },
  {
    id: "backyard-farm",
    title: "Backyard Farm",
    kind: "E-commerce",
    description: "Shop for a series of illustrated children's picture books.",
    image: "/work/backyard-farm.webp",
    href: "https://thebackyardfarm.co.uk/",
  },
  {
    id: "alchemy",
    title: "Alchemy",
    kind: "Website",
    description: "Website for a hair and aesthetics salon in East Retford.",
    image: "/work/alchemy.webp",
    href: "https://alchemyretford.co.uk/",
  },
  {
    id: "alchemy-diary",
    title: "Alchemy Diary",
    kind: "Web app · Private",
    description: "Booking diary and staff calendar built for a Retford salon.",
    image: "/work/alchemy-diary.webp",
  },
];

const number = (i: number) => String(i + 1).padStart(2, "0");

export default function Work() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section aria-labelledby="work-heading" className="mx-auto mt-24 w-full max-w-7xl sm:mt-32">
      {/* Keeps one colour channel and turns the rest white, so a multiplied copy leaves a coloured ghost */}
      <svg aria-hidden="true" className="absolute size-0">
        <filter id="split-red" colorInterpolationFilters="sRGB">
          <feColorMatrix values="1 0 0 0 0  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0" />
        </filter>
        <filter id="split-cyan" colorInterpolationFilters="sRGB">
          <feColorMatrix values="0 0 0 0 1  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
      </svg>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <div className="flex items-baseline justify-between border-b border-ink/15 pb-5 font-mono text-xs tracking-[0.3em] text-muted uppercase">
            <h2 id="work-heading">Selected work</h2>
            <span aria-hidden="true" className="hidden lg:inline">
              Hover to preview
            </span>
          </div>

          <ul>
            {projects.map((p, i) => {
              const isActive = i === active;
              const row = (
                <>
                  <span className="font-mono text-xs tracking-[0.2em] text-muted sm:text-sm">{number(i)}</span>
                  <span
                    className={`font-display text-3xl leading-tight font-black tracking-tight uppercase transition-colors duration-300 sm:text-5xl ${
                      isActive ? "chromatic text-ink" : "text-muted/80"
                    }`}
                  >
                    {p.title}
                  </span>
                  <span className="justify-self-end text-right font-mono text-[0.65rem] tracking-[0.3em] text-muted uppercase sm:text-xs">
                    {p.kind}
                    {p.href && <span aria-hidden="true"> ↗</span>}
                  </span>
                </>
              );
              const rowClass =
                "grid grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-x-3 py-7 outline-none sm:grid-cols-[3.5rem_minmax(0,1fr)_auto] sm:gap-x-6 sm:py-9";
              const select = { onMouseEnter: () => setActive(i), onFocus: () => setActive(i) };

              return (
                <li key={p.id} className="border-b border-ink/15">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer" className={`${rowClass} focus-visible:bg-ink/5`} {...select}>
                      {row}
                    </a>
                  ) : (
                    <div tabIndex={0} className={`${rowClass} focus-visible:bg-ink/5`} {...select}>
                      {row}
                    </div>
                  )}
                  {/* No hover on touch screens, so small screens show every preview inline */}
                  <figure className="pb-8 lg:hidden">
                    <Preview project={p} index={i} />
                    <figcaption className="mt-4 font-mono text-sm text-muted">{p.description}</figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>

        <figure aria-live="polite" className="hidden self-start lg:sticky lg:top-12 lg:mt-16 lg:block">
          <Preview key={project.id} project={project} index={active} />
          <figcaption className="mt-6 font-mono text-sm text-muted">{project.description}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Preview({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative aspect-video overflow-hidden bg-ink/10">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        width={2000}
        height={1125}
        loading="lazy"
        className="preview-base absolute inset-0 size-full object-cover object-top"
      />
      {/* Colour-split copies that sit slightly off the base and burst apart when the preview changes */}
      <img src={project.image} alt="" aria-hidden="true" className="preview-split preview-red absolute inset-0 size-full object-cover object-top" />
      <img src={project.image} alt="" aria-hidden="true" className="preview-split preview-cyan absolute inset-0 size-full object-cover object-top" />
      <div aria-hidden="true" className="scanlines pointer-events-none absolute inset-0" />
      <span
        aria-hidden="true"
        className="preview-number chromatic absolute bottom-[4%] left-[4%] font-display text-[clamp(3rem,8vw,7rem)] leading-none font-black"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

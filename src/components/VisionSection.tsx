import type { ReactNode } from "react";
import type { SiteConfig, VisionPillar } from "@/lib/content";

type Props = { site: SiteConfig };

const iconPaths: Record<VisionPillar["icon"], ReactNode> = {
  book: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  ),
  graduation: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
    />
  ),
  gears: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
    />
  ),
};

export function VisionSection({ site }: Props) {
  const { vision } = site;

  return (
    <section
      id="vision"
      className="scroll-mt-24 border-b border-brand-900/8 bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
            Our theme
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            {vision.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-700">
            {vision.subhead}
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-700/90">
            {site.mission}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {vision.pillars.map((pillar, index) => (
            <article
              key={pillar.id}
              className="card-glow relative overflow-hidden rounded-2xl border border-brand-900/8 bg-surface p-6 transition hover:border-accent-400/35"
            >
              <div
                className="absolute right-4 top-4 text-5xl font-bold text-brand-900/5"
                aria-hidden
              >
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mb-4 inline-flex rounded-xl bg-brand-900/8 p-3 text-brand-900">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden
                >
                  {iconPaths[pillar.icon]}
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-950">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-700">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {["Publishing", "Education", "Language courses", "Local LLMs", "Review tiers"].map(
            (label) => (
              <span
                key={label}
                className="rounded-full border border-brand-900/10 bg-white px-3 py-1 text-xs font-medium text-brand-700"
              >
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

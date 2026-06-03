import Image from "next/image";
import type { SiteConfig } from "@/lib/content";
import { assetPath } from "@/lib/content";

type Props = { site: SiteConfig };

export function Hero({ site }: Props) {
  return (
    <section className="hero-mesh relative overflow-hidden border-b border-brand-900/8">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-[10%] top-24 flex gap-1.5 rotate-[-8deg]">
          {[3, 5, 2, 6, 4].map((pips, i) => (
            <div
              key={i}
              className="h-14 w-7 rounded-sm border border-brand-900/20 bg-white shadow-sm"
              style={{ transform: `translateY(${i * 4}px)` }}
              aria-hidden
            >
              <div className="flex h-full flex-col justify-between p-1">
                <span className="domino-dot" />
                {pips > 2 && <span className="domino-dot mx-auto" />}
                <span className="domino-dot ml-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-700">
            <span className="domino-dot" />
            {site.heroBadge}
          </p>
          <p className="mb-3 max-w-xl text-sm font-semibold uppercase tracking-wide text-accent-400">
            {site.theme}
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-brand-950 sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{site.name}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-700">
            {site.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#offerings"
              className="rounded-full bg-brand-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-900/25 transition hover:bg-brand-800"
            >
              Explore offerings
            </a>
            <a
              href="#research"
              className="rounded-full border border-brand-900/15 bg-white px-6 py-3 text-sm font-semibold text-brand-900 transition hover:border-accent-400/50"
            >
              Research papers
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={assetPath("/logo.png")}
            alt={`${site.name} — domino mark`}
            width={520}
            height={320}
            className="w-full max-w-md object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}

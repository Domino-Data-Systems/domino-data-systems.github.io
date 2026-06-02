import Image from "next/image";
import type { SiteConfig } from "@/lib/content";
import { assetPath } from "@/lib/content";

type Props = { site: SiteConfig };

export function FounderSection({ site }: Props) {
  const { founder } = site;

  return (
    <section id="founder" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="card-glow grid overflow-hidden rounded-3xl border border-brand-900/8 bg-white md:grid-cols-[280px_1fr]">
          <div className="relative bg-gradient-to-br from-brand-900/5 to-accent-400/10 p-8 md:p-10">
            <Image
              src={assetPath(founder.image)}
              alt={founder.name}
              width={400}
              height={400}
              className="mx-auto aspect-square w-full max-w-[220px] rounded-2xl object-cover shadow-xl ring-4 ring-white"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
              Leadership
            </p>
            <h2 className="mt-2 text-3xl font-bold text-brand-950">
              <a
                href={founder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-accent-400"
              >
                {founder.name}
              </a>
            </h2>
            <p className="mt-1 text-brand-700">{founder.title}</p>
            <p className="mt-6 max-w-xl leading-relaxed text-brand-700">
              Architect of Domino Data Systems research products—from hierarchical
              multi-agent book generation to evaluation harnesses tuned for local
              inference pools. Building composable agent stacks that ship as polished
              public research showcases.
            </p>
            <a
              href={founder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-brand-900/12 px-5 py-2.5 text-sm font-semibold text-brand-900 transition hover:border-accent-400/50 hover:text-accent-400"
            >
              shyamalschandra.github.io
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

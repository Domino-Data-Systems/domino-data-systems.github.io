import type { ResearchPaper } from "@/lib/content";

type Props = { papers: ResearchPaper[] };

export function ResearchSection({ papers }: Props) {
  return (
    <section
      id="research"
      className="scroll-mt-24 border-t border-brand-900/8 bg-brand-950 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">
            Research papers
          </h2>
          <p className="mt-3 text-accent-300/90">
            Peer-style industrial research with public showcases—papers, benchmarks,
            and reproducible narratives without exposing proprietary implementation.
          </p>
        </div>

        <div className="space-y-8">
          {papers.map((paper) => (
            <article
              key={paper.id}
              className="rounded-2xl border border-white/10 bg-brand-900/60 p-8 backdrop-blur-sm"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-accent-300">
                    {paper.venue} · {paper.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{paper.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-accent-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 max-w-3xl leading-relaxed text-white/80">
                {paper.abstract}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {paper.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-sm text-white/75"
                  >
                    <span className="domino-dot mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={paper.paperHref ?? paper.href}
                  className="rounded-full bg-accent-400 px-5 py-2.5 text-sm font-semibold text-brand-950 transition hover:bg-accent-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read paper
                </a>
                {paper.resultsHref && (
                  <a
                    href={paper.resultsHref}
                    className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent-400/50"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View results
                  </a>
                )}
                <a
                  href={paper.href}
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent-400/50"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product showcase
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

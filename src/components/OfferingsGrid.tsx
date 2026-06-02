import type { Offering } from "@/lib/content";

type Props = { offerings: Offering[] };

export function OfferingsGrid({ offerings }: Props) {
  return (
    <section id="offerings" className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand-950">
            Offerings
          </h2>
          <p className="mt-3 text-brand-700">
            Products, research programs, and services—composed from shared agentic
            building blocks and published as living showcases on GitHub Pages.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item, index) => (
            <article
              key={item.id}
              className={`card-glow group flex flex-col rounded-2xl border border-brand-900/8 bg-white p-6 transition hover:-translate-y-1 hover:border-accent-400/40 ${
                item.featured ? "ring-1 ring-accent-400/20" : ""
              }`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 flex items-center justify-between gap-2">
                <span className="rounded-full bg-brand-900/6 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {item.category}
                </span>
                {item.featured && (
                  <span className="text-xs font-medium text-accent-400">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-brand-950">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-700">
                {item.description}
              </p>

              {item.metrics && (
                <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-brand-900/6 pt-4">
                  {item.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-xs text-brand-700">{m.label}</dt>
                      <dd className="text-lg font-bold text-brand-900">
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-surface px-2 py-0.5 text-xs text-brand-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={item.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-900 transition group-hover:text-accent-400"
                {...(item.href.startsWith("http") || item.href.startsWith("mailto")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                Learn more
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { SiteConfig } from "@/lib/content";

type Props = { site: SiteConfig };

export function Footer({ site }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-brand-900/8 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-semibold text-brand-950">{site.name}</p>
          <p className="mt-1 text-sm text-brand-700">
            © {year}{" "}
            <a
              href={site.founder.url}
              className="font-medium text-brand-900 underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.founder.name}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-brand-700">
          <a
            href="https://domino-data-systems.github.io/agentic-parallel-book-writer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-400"
          >
            Agentic Book Writer
          </a>
          <a
            href={site.founder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-400"
          >
            Founder site
          </a>
          <a href={site.url} className="hover:text-accent-400">
            {site.url.replace("https://", "")}
          </a>
        </div>
      </div>
    </footer>
  );
}

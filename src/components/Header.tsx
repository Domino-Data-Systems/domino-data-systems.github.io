import Image from "next/image";
import Link from "next/link";
import type { SiteConfig } from "@/lib/content";
import { assetPath } from "@/lib/content";

type Props = { site: SiteConfig };

export function Header({ site }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-900/8 bg-surface/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={assetPath("/logo.png")}
            alt={`${site.name} logo`}
            width={48}
            height={48}
            className="h-11 w-auto object-contain"
            priority
          />
          <span className="hidden text-sm font-semibold tracking-wide text-brand-900 sm:block">
            {site.name}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-brand-800 transition hover:bg-brand-900/6 hover:text-brand-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

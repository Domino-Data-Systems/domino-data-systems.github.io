import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const contentDir = path.join(process.cwd(), "content");

export type SiteConfig = {
  name: string;
  tagline: string;
  url: string;
  founder: {
    name: string;
    title: string;
    url: string;
    image: string;
  };
  nav: { label: string; href: string }[];
};

export type Offering = {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  tags: string[];
  featured?: boolean;
  metrics?: { label: string; value: string }[];
};

export type ResearchPaper = {
  id: string;
  title: string;
  venue: string;
  year: number;
  abstract: string;
  href: string;
  paperHref?: string;
  resultsHref?: string;
  highlights: string[];
  tags: string[];
};

function readYaml<T>(filename: string): T {
  const file = fs.readFileSync(path.join(contentDir, filename), "utf8");
  return yaml.load(file) as T;
}

export function getSiteConfig(): SiteConfig {
  return readYaml<SiteConfig>("site.yml");
}

export function getOfferings(): Offering[] {
  return readYaml<Offering[]>("offerings.yml");
}

export function getResearch(): ResearchPaper[] {
  return readYaml<ResearchPaper[]>("research.yml");
}

export function assetPath(pathname: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";
  if (!base) return pathname;
  return `${base}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

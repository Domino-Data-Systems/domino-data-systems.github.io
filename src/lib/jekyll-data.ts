/**
 * Jekyll-compatible data mirror: copies content/*.yml to _data/ at build time
 * so optional Jekyll workflows can use the same source of truth.
 */
import fs from "fs";
import path from "path";

const pairs = [
  ["content/site.yml", "_data/site.yml"],
  ["content/offerings.yml", "_data/offerings.yml"],
  ["content/research.yml", "_data/research.yml"],
] as const;

export function syncJekyllData(): void {
  const root = process.cwd();
  fs.mkdirSync(path.join(root, "_data"), { recursive: true });
  for (const [src, dest] of pairs) {
    fs.copyFileSync(path.join(root, src), path.join(root, dest));
  }
}

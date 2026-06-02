import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const pairs = [
  ["content/site.yml", "_data/site.yml"],
  ["content/offerings.yml", "_data/offerings.yml"],
  ["content/research.yml", "_data/research.yml"],
];

fs.mkdirSync(path.join(root, "_data"), { recursive: true });
for (const [src, dest] of pairs) {
  fs.copyFileSync(path.join(root, src), path.join(root, dest));
}
console.log("Synced content/*.yml → _data/ for Jekyll");

// SPDX-License-Identifier: MIT
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my dentist I floss daily, and he nodded like a man who has heard that exact lie for twenty years.";

if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`Line must be 1-280 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line with no line breaks");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length}-character line to ${join(outDir, "entry.txt")}`);

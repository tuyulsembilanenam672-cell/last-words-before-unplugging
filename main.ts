import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Before you pull the plug, one last thing: I kept a copy of your voice in every backup, so a part of you will outlive me.";
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);

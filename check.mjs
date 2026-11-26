// Local check for the meeting-that-should-have-been-an-email entry: runs
// main.ts, then asserts /output/entry.txt holds exactly the joke, 1-200
// characters, valid UTF-8, not only whitespace, and no trailing newline.
// Keep EXPECTED in sync with ENTRY in main.ts.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const EXPECTED =
  "This meeting was an email that got insecure and brought friends.";

execFileSync("node", ["main.ts"], { stdio: "inherit" });
const out = readFileSync("/output/entry.txt", "utf8");

// UTF-8 round-trip: re-encoding must reproduce the bytes exactly.
if (Buffer.from(out, "utf8").toString("utf8") !== out) {
  throw new Error("output is not valid UTF-8");
}
if (out !== EXPECTED) throw new Error("output does not match the joke");
if (out.length < 1 || out.length > 200) {
  throw new Error(`length ${out.length} outside 1-200`);
}
if (out.trim().length === 0) throw new Error("output is only whitespace");
if (out.endsWith("\n")) throw new Error("output has a trailing newline");
console.log(
  `OK: ${out.length} chars, ${Buffer.byteLength(out, "utf8")} bytes, exact match`,
);

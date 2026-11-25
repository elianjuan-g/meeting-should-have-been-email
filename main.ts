// The Meeting That Should Have Been an Email
// Writes one one-line joke about a meeting that should have been an email
// to /output/entry.txt. Single line, no trailing newline: the gate counts
// characters 1-200 and the judge reads the text exactly as written.
//
// PLACEHOLDER — the main session overwrites ENTRY with the final line after
// the shadow-judge review (direction only, no pasted advisor text). When
// the line changes, update EXPECTED in check.mjs to match.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "This meeting was an email that got ambitious and brought friends.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

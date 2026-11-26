// Name the Robot Band — writes one funny robot band name + hit song line
// to /output/entry.txt (or $MAKEFUN_OUTPUT/entry.txt for local testing).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: swapped the worn-out 404 pun for a band name that sounds real
// ("The Buffering Boys" — a boy band that literally buffers) and a hit song
// whose joke lands twice: it has topped the charts for three years because
// it never finishes. The song line fits the band name and needs no setup.
const ENTRY =
  "The Buffering Boys \u2014 hit single \u201cLoading\u2026 (Please Wait)\u201d has topped the charts for three years. It never finishes.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

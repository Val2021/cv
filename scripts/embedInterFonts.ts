import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FONT_FILES = [
  [400, "inter-latin-400-normal.woff2"],
  [500, "inter-latin-500-normal.woff2"],
  [600, "inter-latin-600-normal.woff2"],
  [700, "inter-latin-700-normal.woff2"],
] as const;

export async function embeddedInterCss(repoRoot: string): Promise<string> {
  const filesDir = join(repoRoot, "node_modules/@fontsource/inter/files");
  const chunks: string[] = [];

  for (const [fontWeight, fileName] of FONT_FILES) {
    const buf = await readFile(join(filesDir, fileName));
    const src = `url(data:font/woff2;base64,${buf.toString("base64")}) format("woff2")`;
    chunks.push(`@font-face {
  font-family: Inter;
  font-style: normal;
  font-display: swap;
  font-weight: ${fontWeight};
  src: ${src};
}`);
  }

  return chunks.join("\n");
}

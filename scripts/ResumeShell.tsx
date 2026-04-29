const css = `
  :root {
    --v-bg: #ffffff;
    --v-fg: #171717;
    --v-muted: #737373;
    --v-border: #eaeaea;
    --v-accent: #0070f3;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 10pt;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    line-height: 1.55;
    color: var(--v-fg);
    background: var(--v-bg);
    text-rendering: optimizeLegibility;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .resume {
    margin: 0;
    width: 100%;
    hyphens: auto;
    hyphenate-character: "-";
    text-align: left;
    word-spacing: normal;
    font-feature-settings: "kern" 1, "liga" 1;
    letter-spacing: 0;
  }
  .resume h1 {
    font-size: 13pt;
    margin: 0 0 0.45rem;
    padding: 0;
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.025em;
    line-height: 1.15;
    color: var(--v-fg);
  }
  .resume h2 {
    font-size: 11pt;
    margin: 1.45rem 0 0.5rem;
    padding: 0 0 0.42rem;
    border-bottom: 1px solid var(--v-border);
    font-weight: 600;
    text-transform: none;
    letter-spacing: -0.025em;
    text-align: left;
    orphans: 3;
    widows: 3;
    color: var(--v-fg);
    break-after: avoid;
    line-height: 1.25;
  }
  .resume h2:first-of-type {
    margin-top: 0.35rem;
  }
  .resume h3 {
    font-size: 10pt;
    margin: 0.8rem 0 0.2rem;
    font-weight: 600;
    font-style: normal;
    text-align: left;
    letter-spacing: -0.015em;
    break-after: avoid;
    orphans: 3;
    widows: 3;
    color: var(--v-fg);
  }
  .resume p {
    margin: 0 0 0.45rem;
    text-align: left;
    text-indent: 0;
    color: #262626;
  }
  /* Remove hierarquia de recuo tipo artigo ABNT para cara mais atual de produto. */
  .resume ul {
    margin: 0.4rem 0 0.55rem;
    padding-left: 1.05rem;
    list-style-position: outside;
    list-style-type: disc;
    color: #262626;
  }
  .resume li {
    margin: 0.18rem 0;
    padding-left: 0.25rem;
    text-align: left;
    line-height: 1.55;
    color: #262626;
    letter-spacing: 0;
  }
  .resume li + li {
    margin-top: 0;
  }
  .resume ul ul {
    margin-left: 0.85rem;
    margin-top: 0.35rem;
  }
  .resume strong {
    font-weight: 600;
    color: var(--v-fg);
  }
  /* Bloco inicial (README: h1 seguido de um parágrafo com contato em br). */
  .resume h1 + p {
    text-align: center;
    padding: 0 0 0.2rem;
    margin-bottom: 0;
    color: var(--v-muted);
    font-weight: 500;
    font-size: 9.25pt;
    line-height: 1.52;
    letter-spacing: -0.012em;
  }
  /* Links bem discretos, estilo marca. */
  .resume a {
    color: var(--v-accent);
    text-decoration: none;
    border-bottom: 1px solid rgba(0, 112, 243, 0.33);
    font-weight: 500;
  }
  /* Melhor uso de marcadores quando o PDF permite. */
  @media print {
    .resume h2 {
      break-after: avoid;
      page-break-after: avoid;
    }
    .resume h3 {
      break-after: avoid;
      page-break-after: avoid;
    }
    .resume li {
      break-inside: avoid;
    }
    .resume p {
      orphans: 3;
      widows: 3;
    }
    .resume ul {
      break-inside: avoid;
    }
  }
`;

type Props = {
  markdownHtml: string;
  embeddedFontFaces: string;
};

export function ResumeShell({ markdownHtml, embeddedFontFaces }: Props) {
  const styleBlock = embeddedFontFaces + css;
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="color-scheme" content="light" />
        <style dangerouslySetInnerHTML={{ __html: styleBlock }} />
      </head>
      <body>
        <main
          className="resume"
          dangerouslySetInnerHTML={{ __html: markdownHtml }}
        />
      </body>
    </html>
  );
}

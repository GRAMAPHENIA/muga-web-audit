// packages/crawler/crawl-home.ts

/**
 * Señales crudas extraídas de una página web.
 * No contienen interpretación ni decisión.
 */
export type CrawlSignals = {
  url: string;
  fetchedAt: string;
  html: string;
  text: string;
  h1: string[];
};

/**
 * Extrae señales básicas de la home de un sitio.
 * Este adapter observa el mundo exterior; no interpreta.
 */
export async function crawlHome(url: string): Promise<CrawlSignals> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch URL: ${url}`);
  }

  const html = await response.text();

  // Extracción mínima sin dependencias externas
  const h1Matches = html.match(/<h1[^>]*>(.*?)<\/h1>/gi) ?? [];
  const h1 = h1Matches.map((tag) =>
    tag.replace(/<[^>]+>/g, "").trim(),
  );

  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

  return {
    url,
    fetchedAt: new Date().toISOString(),
    html,
    text,
    h1,
  };
}

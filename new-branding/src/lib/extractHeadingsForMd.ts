export interface Heading {
  id: string;
  title: string;
  level: number;
}

export const extractHeadings = (source: string): Heading[] => {
  const headings: Heading[] = [];

  const h2Regex = /<h2\s+id="([^"]+)">(.+?)<\/h2>/g;
  let match;

  while ((match = h2Regex.exec(source)) !== null) {
    headings.push({
      id: match[1],
      title: match[2].trim(),
      level: 2,
    });
  }

  const h3Regex = /<h3\s+id="([^"]+)">(.+?)<\/h3>/g;

  while ((match = h3Regex.exec(source)) !== null) {
    let title = match[2].trim();

    title = title.replace(/^\d+\.\s*/, "");
    headings.push({
      id: match[1],
      title: title,
      level: 3,
    });
  }

  return headings;
};

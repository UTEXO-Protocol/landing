import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { ReactNode } from "react";
import remarkGfm from "remark-gfm";
import { LegalMenu } from "../Menu";
import { extractHeadings } from "@/lib/extractHeadingsForMd";
import "./index.scss";

interface Frontmatter {
  lastUpdated: string;
  version: string;
}

export const LegalContent: React.FC<{ fileName: string }> = async ({ fileName }) => {
  const filePath = path.join(process.cwd(), "src/app/static/content", fileName);
  const source = await fs.readFile(filePath, "utf-8");

  const headings = extractHeadings(source);

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });

  return (
    <div className="legal">
      <div className="legal__menu">
        <LegalMenu headings={headings} />
      </div>
      <div>
        <div className="legal__heading">
          <time className="legal__updated">
            Last updated:{" "}
            {new Date(frontmatter.lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <p className="legal__version">Version: {frontmatter.version}</p>
        </div>
        <article className="legal__content">{content as ReactNode}</article>
      </div>
    </div>
  );
};

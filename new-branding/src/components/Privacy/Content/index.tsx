import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { ReactNode } from "react";
import remarkGfm from "remark-gfm";
import { PrivacyMenu } from "../Menu";
import { extractHeadings } from "@/lib/extractHeadingsForMd";
import "./index.scss";

interface Frontmatter {
  lastUpdated: string;
  version: string;
}

export const PrivacyContent = async () => {
  const filePath = path.join(process.cwd(), "src/app/static/content", "privacy-policy.mdx");
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
    <div className="provicy-policy">
      <div className="provicy-policy__menu">
        <PrivacyMenu headings={headings} />
      </div>
      <div>
        <div className="provicy-policy__heading">
          <time className="provicy-policy__updated">
            Last updated:{" "}
            {new Date(frontmatter.lastUpdated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <p className="provicy-policy__version">Version: {frontmatter.version}</p>
        </div>
        <article className="provicy-policy__content">{content as ReactNode}</article>
      </div>
    </div>
  );
};

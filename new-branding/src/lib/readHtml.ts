// src/lib/readHtml.ts
import fs from "fs";
import path from "path";

interface TemplateConfig {
  title: string;
  heading: string;
  description: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderTemplate(
  file: string,
  vars: Record<string, string | boolean>
) {
  let html = fs.readFileSync(path.join(process.cwd(), file), "utf8");

  const action = vars.action || "newsletter";
    const isNewRecord = vars.isNewRecord !== false;
    
  const templates: Record<string, Record<string, TemplateConfig>> = {
    newsletter: {
      newUser: {
        title: "Utexo — Welcome to Newsletter",
        heading: "📧 New Newsletter Signup",
        description: "A new user has subscribed to the newsletter.",
      },
      existingUser: {
        title: "Utexo — Newsletter Subscription",
        heading: "📧 Newsletter Subscription",
        description: "A user is already subscribed to the newsletter.",
      },
    },
    dev: {
      newUser: {
        title: "Utexo — Welcome Dev Access Request",
        heading: "🛰 New Dev Access Request",
        description: "A new user has requested developer access.",
      },
      existingUser: {
        title: "Utexo — Dev Access Request",
        heading: "🛰 Dev Access",
        description: "A user already has dev access requested.",
      },
    },
    sales: {
      newUser: {
        title: "Utexo — Welcome Sales Contact Request",
        heading: "💼 New Sales Contact Request",
        description: "A new user wants to talk to the sales team.",
      },
      existingUser: {
        title: "Utexo — Sales Contact Request",
        heading: "💼 Sales Contact",
        description: "A user already has sales contact requested.",
      },
    },
  };
    
  const templateConfig =  templates[action as string]?.[isNewRecord?  "newUser" : "existingUser" ] || templates.newsletter.newUser;

  const dynamicVars = {
    ...templateConfig,
    ...vars,
  };

  for (const [key, value] of Object.entries(dynamicVars)) {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    const strValue = String(value);
    html = html.replace(regex, typeof value === "string" ? escapeHtml(strValue) : strValue);
  }

  return html;
}
import Image from "next/image";
import "./index.scss";

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
  alt: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://x.com/utexocom",
    label: "Utexo on X",
    icon: "/footer/x-icon.svg",
    alt: "X",
  },
  {
    href: "https://www.linkedin.com/company/utexo/",
    label: "Utexo on Linkedin",
    icon: "/footer/linkedin-icon.svg",
    alt: "Linkedin",
  },
  {
    href: "https://discord.com/invite/utexo",
    label: "utexo on Discord",
    icon: "/footer/discord-icon.svg",
    alt: "Discord",
  },
];

interface FooterSocialsProps {
  links?: SocialLink[];
}

export const FooterSocials = ({ links = socialLinks }: FooterSocialsProps) => {
  return (
    <div className="footer-socials">
      {links.map(link => (
        <a key={link.alt} href={link.href} className="footer-socials__link" aria-label={link.label} target="_blank" rel="noopener noreferrer">
          <Image src={link.icon} alt={link.alt} width={16} height={16} className="footer-socials__icon" />
        </a>
      ))}
    </div>
  );
};

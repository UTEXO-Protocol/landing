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
    href: "https://discord.gg/utexo",
    label: "Utexo on Discord",
    icon: "/footer/discord-icon.svg",
    alt: "Discord",
  },
  {
    href: "https://t.me/utexo",
    label: "Utexo on Telegram",
    icon: "/footer/telegram-icon.svg",
    alt: "Telegram",
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
          <Image src={link.icon} alt={link.alt} width={16} height={16} />
        </a>
      ))}
    </div>
  );
};

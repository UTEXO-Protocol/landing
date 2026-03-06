import "./index.scss";

export class FooterNavItem {
  constructor(
    public title: string,
    public link: string,
    public isBlank: boolean = false,
  ) {}
}

export class FooterNavSection {
  constructor(
    public label: string,
    public items: FooterNavItem[],
  ) {}
}

export const footerNavigation = [
  new FooterNavSection("PRODUCTS", [new FooterNavItem("API", "/api-product"), new FooterNavItem("Cloud", "/cloud")]),
  // new FooterNavSection("CUSTOMERS", [new FooterNavItem("PSPs", "/psp")]),
  new FooterNavSection("RESOURCES", [new FooterNavItem("FAQ", "/faq"), new FooterNavItem("Docs", "https://docs.utexo.com/", true), new FooterNavItem("Brand Kit", "/brand-kit")]),
  new FooterNavSection("LEGAL", [new FooterNavItem("Terms & Conditions", "/terms-and-conditions"), new FooterNavItem("Privacy Policy", "/privacy")]),
];

interface FooterNavigationProps {
  sections?: FooterNavSection[];
}

export const FooterNavigation = ({ sections = footerNavigation }: FooterNavigationProps) => {
  return (
    <div className="footer-nav">
      {sections.map(section => (
        <div key={section.label} className="footer-nav__section">
          <h3 className="footer-nav__label">{section.label}</h3>
          <ul className="footer-nav__list">
            {section.items.map(item => (
              <li key={item.title} className="footer-nav__item">
                <a href={item.link} className="footer-nav__link" {...(item.isBlank && { target: "_blank", rel: "noopener noreferrer" })}>
                  {item.title}
                  {item.isBlank && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

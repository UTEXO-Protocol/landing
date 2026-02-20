import "./index.scss";

export class FooterNavItem {
  constructor(
    public title: string,
    public link: string,
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
  new FooterNavSection("CUSTOMERS", [new FooterNavItem("PSPs", "/psp")]),
  new FooterNavSection("RESOURCES", [
    new FooterNavItem("FAQ", "/resources/faq"),
    new FooterNavItem("Support", "/resources/support"),
    new FooterNavItem("Glossary", "/resources/glossary"),
    new FooterNavItem("Writing", "/resources/writing"),
    new FooterNavItem("Brand Kit", "/resources/brand-kit"),
  ]),
  new FooterNavSection("LEGAL", [
    new FooterNavItem("Terms & Conditions", "/legal/terms"),
    new FooterNavItem("Privacy Policy", "/legal/privacy"),
    new FooterNavItem("Licenses", "/legal/licenses"),
    new FooterNavItem("Cookie Preferences", "/legal/cookies"),
  ]),
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
                <a href={item.link} className="footer-nav__link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

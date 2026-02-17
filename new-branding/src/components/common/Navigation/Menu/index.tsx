import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "./index.scss";

export class NavigationItem {
  constructor(
    public title: string,
    public submenu: SubNavigationItem[],
  ) {}
}

export class SubNavigationItem {
  constructor(
    public title: string,
    public icon: string,
    public link: string,
    public description: string,
  ) {}
}

export const navigation = [
  new NavigationItem("Products", [
    new SubNavigationItem("API", "/heading/menu/api.svg", "/api-product", "Your gateway to USDT on Bitcoin."),
    new SubNavigationItem("Cloud", "/heading/menu/cloud.svg", "/cloud", "Automated trading with yield."),
  ]),
  new NavigationItem("Customers", [
    new SubNavigationItem("PSPs", "/heading/menu/psps.svg", "/psp", "Fixed-cost private USDT."),
    new SubNavigationItem("Exchanges", "/heading/menu/exchanges.svg", "", "Remove friction, boost volume."),
    new SubNavigationItem("Wallets", "/heading/menu/wallets.svg", "", "Seamless in-app swapping."),
    new SubNavigationItem("Digital Banks", "/heading/menu/digital-banks.svg", "", "Compliant custody, native yield"),
    new SubNavigationItem("HFTs", "/heading/menu/hfts.svg", "", "Stable high-volume settlement."),
    new SubNavigationItem("IGaming", "/heading/menu/igaming.svg", "", "Consistent latency, fixed fees."),
  ]),
];

export const NavMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title);
  };

  return (
    <nav className="nav-menu" ref={menuRef}>
      {navigation.map(item => (
        <div key={item.title} className={`nav-menu__item ${openSubmenu === item.title ? "nav-menu__item--active" : ""}`} onClick={() => handleItemClick(item.title)}>
          <div className="nav-menu__link">{item.title}</div>
          {item.submenu && openSubmenu === item.title && (
            <div className="nav-menu__submenu">
              {item.submenu.map(subitem => (
                <a key={subitem.title} href={subitem.link} className="nav-menu__submenu-item">
                  <span className="nav-menu__submenu-item__icon">
                    <Image src={subitem.icon} alt={subitem.title} width={20} height={20} />
                  </span>
                  <span className="nav-menu__submenu-item__text">
                    <span className="nav-menu__submenu-item__title">{subitem.title}</span>
                    <span className="nav-menu__submenu-item__description">{subitem.description}</span>
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

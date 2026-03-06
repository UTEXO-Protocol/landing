import { useState, useRef, useEffect, useCallback } from "react";
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
    public isComingSoon: boolean = false,
  ) {}
}

export const navigation = [
  new NavigationItem("Products", [
    new SubNavigationItem("API", "/heading/menu/api.svg", "/api-product", "Your gateway to USDT on Bitcoin.", false),
    new SubNavigationItem("Cloud", "/heading/menu/cloud.svg", "/cloud", "Fully managed Lightning infrastructure.", false),
  ]),
  // new NavigationItem("Customers", [
  //   new SubNavigationItem("PSPs", "/heading/menu/psps.svg", "/psp", "Fixed-cost private USDT.", false),
  //   // new SubNavigationItem("Exchanges", "/heading/menu/exchanges.svg", "", "Remove friction, boost volume.", true),
  //   // new SubNavigationItem("Wallets", "/heading/menu/wallets.svg", "", "Seamless in-app swapping.", true),
  //   // new SubNavigationItem("Digital Banks", "/heading/menu/digital-banks.svg", "", "Compliant custody, native yield", true),
  //   // new SubNavigationItem("HFTs", "/heading/menu/hfts.svg", "", "Stable high-volume settlement.", true),
  //   // new SubNavigationItem("IGaming", "/heading/menu/igaming.svg", "", "Consistent latency, fixed fees.", true),
  // ]),
];

export const NavMenu = () => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

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

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" && openSubmenu) {
        setOpenSubmenu(null);
      }
    },
    [openSubmenu],
  );

  const handleSubmenuClick = (e: React.MouseEvent, isComingSoon: boolean) => {
    if (isComingSoon) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (openSubmenu && submenuRef.current) {
      const firstLink = submenuRef.current.querySelector("a");
      if (firstLink) firstLink.focus();
    }
  }, [openSubmenu]);

  return (
    <nav className="nav-menu" ref={menuRef} onKeyDown={handleKeyDown}>
      {navigation.map(item => {
        const isOpen = openSubmenu === item.title;
        return (
          <div key={item.title} className={`nav-menu__item ${isOpen ? "nav-menu__item--active" : ""}`}>
            <button type="button" className="nav-menu__link" onClick={() => handleItemClick(item.title)} aria-expanded={isOpen} aria-haspopup="true">
              {item.title}
            </button>
            {item.submenu && isOpen && (
              <div className="nav-menu__submenu" ref={submenuRef}>
                {item.submenu.map(subitem => (
                  <a
                    key={subitem.title}
                    href={subitem.link}
                    className={`nav-menu__submenu-item ${subitem.isComingSoon ? "nav-menu__submenu-item--coming-soon" : ""}`}
                    onClick={e => handleSubmenuClick(e, subitem.isComingSoon)}
                  >
                    {subitem.isComingSoon && <span className="nav-menu__submenu-item__badge">Coming Soon</span>}
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
        );
      })}
    </nav>
  );
};

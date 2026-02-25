import { IconWrapper } from "../IconWrapper";

import "./index.scss";

export const BrandingLogos = () => {
  return (
    <div className="brand-kit-logos">
      <IconWrapper badge="logotype" iconName="utexo-logotype" iconClassName="brand-kit-logos__icon-logotype" />
      <div className="brand-kit-logos__bottom-side">
        <IconWrapper badge="symbol" iconName="utexo-symbol" iconClassName="brand-kit-logos__icon-symbol" />
        <IconWrapper badge="METALLIC" iconName="utexo-metalic" hasTheme={false} iconClassName="brand-kit-logos__icon-metalic" />
      </div>
    </div>
  );
};

import Image from "next/image";
import "./index.scss";
import { LoadingButton } from "../LoadingButton";

export const Assets = () => {
  const iconNames = ["utexo-logo-asset", "utexo-bottleneck-3d", "utexo-coins", "utexo-shield"];

  return (
    <div className="brand-kit-assets">
      <Image src="/brand-kit/downloads/utexo-logo-asset.svg" width={215} height={215} alt="Utexo logo asset" loading="lazy" />
      <Image src="/brand-kit/downloads/utexo-bottleneck-3d.svg" width={190} height={210} alt="Utexo 3D bottleneck illustration" loading="lazy" />
      <Image src="/brand-kit/downloads/utexo-coins.svg" width={152} height={197} alt="Utexo coins illustration" loading="lazy" />
      <Image src="/brand-kit/downloads/utexo-shield.svg" width={207} height={207} alt="Utexo shield emblem" loading="lazy" />
      <div className="brand-kit-assets__load">
        <LoadingButton iconNames={iconNames} hasTheme={false} theme="white" />
      </div>
    </div>
  );
};

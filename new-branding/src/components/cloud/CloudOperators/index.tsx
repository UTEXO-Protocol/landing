import Image from "next/image";
import Link from "next/link";
import { cloudServices } from "@/mocks/cloud";
import { ExpandIcon } from "@/app/static/images";
import "./index.scss";

export const CloudOperators = () => {
  return (
    <section className="cloud-operators">
      <div className="cloud-operators__body">
        <div className="cloud-operators__content">
          <div className="cloud-operators__left">
            <h2 className="cloud-operators__title">
              <span className="cloud-operators__title-accent">Designed for operators that</span>
              move value at scale.
            </h2>
          </div>
          <div className="cloud-operators__right">
            {cloudServices.map(service => (
              <div key={service.title} className="cloud-operators__service">
                <h3 className="cloud-operators__service__title">{service.title}</h3>
                <Link href="/cloud" className="cloud-operators__service__link">
                  VIEW MORE
                  <ExpandIcon className="cloud-operators__service__icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Image src="/api-product/coin-3d.png" alt="3D Coin" width={300} height={300} className="cloud-operators__coin" />
      </div>
    </section>
  );
};

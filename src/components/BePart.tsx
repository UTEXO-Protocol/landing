"use client";

import Button from "@/components/Button";
import Image from "next/image";

export default function BePart() {
  return (
    <section id="newsletter" className="relative w-full">
      <div className="mx-auto w-22/23 sm:w-[640px] md:w-11/12 border-[#C6C6C6] bg-[#E2E2E2] border-l border-r border-b px-[50px] p-[60px] md:px-[60px]  md:p-[167px]">
        <div
          className="pointer-events-none absolute -bottom-[350px] -left-25 lg:-bottom-[300px] lg:-left-10 z-10 animate-floatRing float-delay"
        >
          <Image
            src="/Group51.webp"
            alt=""
            aria-hidden="true"
            width={140}
            height={140}
            className="w-[169px] h-auto"
            priority={false}
          />
        </div>

        <div className="px-3 sm:px-10">
          <div className="mx-auto max-w-[900px] text-center">

            <h2 className="mt-3 text-[40px] md:text-[66px] leading-[1.1] font-medium tracking-tighter">
              Be part of Utexo
            </h2>

            <p className="mt-3.5 text-[17px] px-10 md:px-0 ">
              Short copy inviting subscriptions or partnership contact.
            </p>

            <div className="flex gap-3 mt-6 md:mt-8 justify-center items-center flex-col md:flex-row">

              <a href="./#newsletter">
                <Button variant="black" className="w-[225px]">
                  SUBSCRIBE TO NEWSLETTER
                </Button>
              </a>

              <Button variant="black">
                VIEW DOCS
              </Button>

              <Button variant="black" className="w-[180px]">
                BECOME A PARTNER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

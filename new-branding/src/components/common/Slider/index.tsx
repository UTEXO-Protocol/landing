"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import "./index.scss";

export interface SliderItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  icon: string;
}

interface SliderProps {
  items: SliderItem[];
}

export const Slider = ({ items }: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    skipSnaps: false,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateScrollButtons();
    emblaApi.on("init", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("resize", updateScrollButtons);

    return () => {
      emblaApi.off("init", updateScrollButtons);
      emblaApi.off("reInit", updateScrollButtons);
      emblaApi.off("select", updateScrollButtons);
      emblaApi.off("resize", updateScrollButtons);
    };
  }, [emblaApi, updateScrollButtons]);

  const scroll = useCallback(
    (direction: "prev" | "next") => {
      if (!emblaApi) return;
      if (direction === "prev") {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }
    },
    [emblaApi],
  );

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__track">
          {items.map(item => (
            <article key={item.id} className="carousel__slide">
              <div className="carousel__content">
                <Image src={item.icon} alt={`${item.title} logo`} width={160} height={40} className="carousel__icon" />
                <h3 className="carousel__title">{item.title}</h3>
                <p className="carousel__description">{item.description}</p>
                <Link href={item.link} className="carousel__link">
                  Learn more
                </Link>
              </div>
              <div className="carousel__image">
                <Image src={item.image} alt={item.title} fill className="carousel__image-img" />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="carousel__controls">
        <button className="carousel__button carousel__button--prev" onClick={() => scroll("prev")} disabled={!canScrollPrev} aria-label="Previous slide">
          <Image src="/common/slider/arrow-left.svg" height={14.5} width={13.5} alt="" className="carousel__button-icon" />
        </button>
        <button className="carousel__button carousel__button--next" onClick={() => scroll("next")} disabled={!canScrollNext} aria-label="Next slide">
          <Image src="/common/slider/arrow-left.svg" height={14.5} width={13.5} alt="" className="carousel__button-icon" />
        </button>
      </div>
    </div>
  );
};

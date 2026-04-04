"use client";

import { HoverImage } from "@/components/hover-image";

export function HeroAbout() {
  return (
    <div
      id="about"
      className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-4 gap-y-10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      {/* Put the massive name on its own row to prevent overlap with the bio. */}
      <div className="col-span-12 row-start-1 lg:col-span-8">
        <p className="text-xs uppercase tracking-widest">Hello, my name is</p>
        <h1 className="mt-2 font-black uppercase leading-[0.8] tracking-tighter text-[clamp(3.5rem,12vw,15vw)]">
          <span className="accent-gradient-text-to-black-hover">
            Manish
          </span>
        </h1>
      </div>
      <div
        id="info"
        className="col-span-12 row-start-2 flex items-end lg:col-start-9 lg:col-span-4 lg:justify-end"
      >
        <div className="max-w-md">
          <p className="text-pretty text-sm leading-relaxed sm:text-base">
            I am a{" "}
            <HoverImage
              src="/product-designer.webp"
              alt="Product Designer"
            >
              Product Designer
            </HoverImage>{" "}
            based in{" "}
            <HoverImage src="/bangalore.webp" alt="Bangalore">
              Bangalore
            </HoverImage>
            , I’m into crafting experiences that are functional, intentional,
            and human.
          </p>

          <div className="h-8 sm:h-12" aria-hidden="true" />

          <p className="text-pretty text-sm leading-relaxed sm:text-base">
            currently battling inner demons and chronically on{" "}
            <HoverImage src="/spotify.png" alt="spotify">
              spotify
            </HoverImage>
            . you will usually find me riding my{" "}
            <HoverImage src="/motorcycle.png" alt="motorcycle">
              motorcycle
            </HoverImage>{" "}
            around the city, hitting the{" "}
            <HoverImage src="/gym.png" alt="gym">
              gym
            </HoverImage>
            , and occasionally{" "}
            <HoverImage src="/swim.png" alt="swimming">
              swimming
            </HoverImage>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

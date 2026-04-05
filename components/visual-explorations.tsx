"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const items = [
  {
    type: "image",
    src: "/badel screenshot.png",
    alt: "Badel",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/twingen final.png",
    alt: "Twingen Final",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "video",
    src: "/Motion 1.mp4",
    span: "col-span-1 row-span-2 aspect-[9/16]",
  },
  {
    type: "image",
    src: "/Explore 1.webp",
    alt: "Visual Exploration 01",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/Explore 2.jpg",
    alt: "Visual Exploration 02",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/Explore 3.jpg",
    alt: "Visual Exploration 03",
    span: "col-span-1 row-span-1 aspect-square",
  },
  // Additional items (revealed on "View More")
  {
    type: "image",
    src: "/explore 10.webp",
    alt: "Visual Exploration 10",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/explore-05.png",
    alt: "Visual Exploration 05",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/explore-06.png",
    alt: "Visual Exploration 06",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/Stimuler Screen.png",
    alt: "Stimuler",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/explore-07.png",
    alt: "Visual Exploration 07",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "image",
    src: "/explore-08.png",
    alt: "Visual Exploration 08",
    span: "col-span-1 row-span-1 aspect-square",
  },
  {
    type: "video",
    src: "/Motion 2.mp4",
    span: "col-span-1 row-span-2 aspect-[9/16]",
  },
  {
    type: "video",
    src: "/motion 3.mp4",
    span: "col-span-1 row-span-2 aspect-[9/16]",
  },
  {
    type: "video",
    src: "/Thrifte.mp4",
    span: "col-span-1 row-span-2 aspect-[9/16]",
  },
] as const;

export function VisualExplorations() {
  const [isExpanded, setIsExpanded] = useState(false);

  const initialItems = items.slice(0, 5);
  const additionalItems = items.slice(5);

  return (
    <section
      id="visual-diary"
      className="border-t border-black scroll-mt-[100px]"
      aria-labelledby="visual-explorations-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2
          id="visual-explorations-heading"
          className="mb-10 text-xs font-bold uppercase tracking-widest"
        >
          Visual explorations<sup className="text-[0.7em]">⁽⁺⁾</sup>
        </h2>

        <div className="grid grid-flow-dense grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {initialItems.map((item, index) => (
            <GridItem key={`initial-${index}`} item={item} />
          ))}

          <AnimatePresence>
            {isExpanded &&
              additionalItems.map((item, index) => (
                <GridItem
                  key={`extra-${index}`}
                  item={item}
                  isAnimated
                />
              ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center justify-center border border-black bg-background px-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:text-background accent-gradient-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            {isExpanded ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
}

function GridItem({
  item,
  isAnimated = false,
}: {
  item: (typeof items)[number];
  isAnimated?: boolean;
}) {
  return (
    <motion.div
      initial={isAnimated ? { opacity: 0, y: 30 } : false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{
        scale: 1.01,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      }}
      transition={{
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
      }}
      className={`${item.span} relative overflow-hidden rounded-[4px] border border-black bg-neutral-200`}
    >
      {item.type === "image" ? (
        <Image
          src={item.src!}
          alt={item.alt!}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 ease-out"
        />
      ) : (
        <>
          <video
            className="h-full w-full object-cover"
            src={item.src}
            muted
            playsInline
            loop
            autoPlay
            preload="auto"
          />
        </>
      )}
    </motion.div>
  );
}

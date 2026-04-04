"use client";

import Image from "next/image";

const stills = [
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a2bd57fbe?w=900&q=80&auto=format&fit=crop",
    alt: "Abstract gradient form",
  },
  {
    src: "https://images.unsplash.com/photo-1618556450991-2f1af64e8192?w=900&q=80&auto=format&fit=crop",
    alt: "3D shape study",
  },
  {
    src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=900&q=80&auto=format&fit=crop",
    alt: "Texture and light",
  },
] as const;

function VideoTile() {
  return (
    <div className="relative aspect-[16/9] overflow-hidden border border-black bg-neutral-200">
      <video
        className="h-full w-full object-cover"
        src="/explore.mp4"
        muted
        playsInline
        loop
        autoPlay
        preload="metadata"
      />
      <span
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-black bg-white/90 text-lg">
          ▶
        </span>
      </span>
    </div>
  );
}

export function VisualExplorations() {
  return (
    <section
      className="border-t border-black"
      aria-labelledby="visual-explorations-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2
          id="visual-explorations-heading"
          className="mb-10 text-xs font-bold uppercase tracking-widest"
        >
          Visual explorations<sup className="text-[0.7em]">⁽⁺⁾</sup>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:auto-rows-fr">
          <div className="lg:col-span-2">
            <VideoTile />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden border border-black bg-neutral-200 lg:aspect-auto lg:min-h-[220px]">
            <Image
              src={stills[0].src}
              alt={stills[0].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden border border-black bg-neutral-200 lg:aspect-auto lg:min-h-[220px]">
            <Image
              src={stills[1].src}
              alt={stills[1].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[3/4] overflow-hidden border border-black bg-neutral-200 lg:aspect-auto lg:min-h-[220px]">
            <Image
              src={stills[2].src}
              alt={stills[2].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-2">
            <VideoTile />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden border border-black bg-neutral-200 lg:aspect-auto lg:min-h-[220px]">
            <Image
              src={stills[0].src}
              alt="Grid tile"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center border border-black bg-background px-10 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:text-background accent-gradient-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            VIEW MORE
          </a>
        </div>
      </div>
    </section>
  );
}

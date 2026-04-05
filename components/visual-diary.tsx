"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DiaryItem = {
  src: string;
  alt: string;
  span: string;
  aspect: string;
};

const diaryItems: DiaryItem[] = [
  {
    src: "/diary/diary-01.webp",
    alt: "Aesthetic image 01",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/diary/diary-02.webp",
    alt: "Aesthetic image 02",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/diary/diary-03.webp",
    alt: "Aesthetic image 03",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "/diary/diary-04.webp",
    alt: "Aesthetic image 04",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/diary/diary-05.webp",
    alt: "Aesthetic image 05",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/diary/diary-06.webp",
    alt: "Aesthetic image 06",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/diary/diary-07.webp",
    alt: "Aesthetic image 07",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-square",
  },
  {
    src: "/diary/diary-08.webp",
    alt: "Aesthetic image 08",
    span: "md:col-span-2 md:row-span-1",
    aspect: "aspect-[4/3]",
  },
];

export function VisualDiary() {
  return (
    <section
      className="border-t border-black"
      aria-labelledby="visual-diary-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2
          id="visual-diary-heading"
          className="mb-8 text-xs font-bold uppercase tracking-widest"
        >
          I take Nice pictures sometimes
        </h2>

        <div className="grid grid-cols-1 gap-2 sm:gap-3 md:grid-cols-6">
          {diaryItems.map((item, index) => (
            <motion.div
              key={item.src}
              className={`${item.span} ${item.aspect} group relative overflow-hidden rounded-[4px] bg-[#1a1a1a]`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


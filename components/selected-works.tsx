"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const works = [
  {
    title: "Health & Lifestyle Logging Flow Redesign",
    subtitle: "ADYA Care",
    description:
      "Redesigned a WhatsApp-inspired health logging experience for breast cancer patients, simplifying daily medication and lifestyle tracking into a conversational flow.",
    href: "https://drive.google.com/file/d/11aB0VtLjA-nOziSzd_Nfl1BeD0gKSw0R/view?usp=drive_link",
    image: "/Instagram post - 3.png",
    alt: "ADYA Care healthcare project",
  },
  {
    title: "Discount Coupon Management Dashboard",
    subtitle: "Zomato Restaurant Partner App",
    description:
      "Designed an end-to-end coupon management system enabling restaurant partners to create, launch, and track campaigns.",
    href: "https://medium.com/@manishmadhavan0025/designing-a-seamless-coupon-creation-management-feature-for-zomato-restaurant-partner-app-d738020aee78",
    image: "/Instagram post - 2.png",
    alt: "Zomato partner app project",
  },
] as const;

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="border-t border-black scroll-mt-[100px]"
      aria-labelledby="selected-works-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2
          id="selected-works-heading"
          className="mb-10 text-xs font-bold uppercase tracking-widest"
        >
          Selected works<sup className="text-[0.7em]">⁽²⁾</sup>
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          {works.map((item) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <motion.div
                whileHover={{
                  scale: 1.01,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.33, 1, 0.68, 1],
                }}
                className="flex flex-col gap-6 rounded-lg bg-background p-4 sm:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-black bg-neutral-200">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <h3 className="text-lg font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-foreground sm:text-xl lg:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground transition-colors duration-300">
                    {item.subtitle}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70 transition-colors duration-300 group-hover:text-foreground">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center gap-1 text-xs font-bold uppercase tracking-widest underline decoration-1 underline-offset-4 transition-all duration-300 group-hover:text-[#000675] group-hover:decoration-2">
                    View Case Study
                    <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

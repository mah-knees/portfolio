"use client";

import Link from "next/link";
import { animate } from "framer-motion";

export function Header() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;
      
      animate(window.scrollY, targetPosition, {
        type: "spring",
        stiffness: 100,
        damping: 30,
        restDelta: 0.5,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="col-span-12 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest"
            aria-label="Primary navigation"
          >
            <Link
              href="#about"
              onClick={(e) => handleScroll(e, "#about")}
              className="accent-gradient-text-hover"
            >
              ABOUT
            </Link>
            <Link
              href="#works"
              onClick={(e) => handleScroll(e, "#works")}
              className="accent-gradient-text-hover"
            >
              WORKS
            </Link>
            <Link
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="accent-gradient-text-hover"
            >
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:justify-end">
            <Link
              href="https://drive.google.com/file/d/1FwFtNnHHucJ-VnJjzQqiXSwKuUrsosv1/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-black bg-background px-3 py-2 text-xs font-bold uppercase tracking-widest transition-colors hover:text-background accent-gradient-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              VIEW RESUME
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { animate, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    
    // allow time for overlay to close
    setTimeout(() => {
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
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black bg-background">
      <div className="mx-auto flex flex-row items-center justify-between max-w-[1400px] px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        
        <div className="flex items-center">
          {/* Mobile Burger Icon */}
          <button 
            className="md:hidden p-2 -ml-2 mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black z-50 relative" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`block h-[2px] w-full bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-[8px] rotate-45' : ''}`} />
              <span className={`block h-[2px] w-full bg-black transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[2px] w-full bg-black transition-transform duration-300 ease-in-out ${isOpen ? '-translate-y-[8px] -rotate-45' : ''}`} />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest"
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
        </div>

        <div className="flex items-center justify-end z-50 relative">
          <Link
            href="https://drive.google.com/file/d/1FwFtNnHHucJ-VnJjzQqiXSwKuUrsosv1/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-black bg-background px-3 py-1.5 text-[10px] md:px-3 md:py-2 md:text-xs font-bold uppercase tracking-widest transition-colors hover:text-background accent-gradient-bg-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            VIEW RESUME
          </Link>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-[0px] w-full h-[100dvh] bg-black text-white pt-24 px-6 z-40 overflow-hidden"
          >
            <nav className="flex flex-col gap-8 text-4xl font-black uppercase tracking-tighter">
              <Link
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
                className="hover:text-neutral-400 transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="#works"
                onClick={(e) => handleScroll(e, "#works")}
                className="hover:text-neutral-400 transition-colors"
              >
                WORKS
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="hover:text-neutral-400 transition-colors"
              >
                CONTACT
              </Link>
            </nav>
            <div className="mt-12 text-sm font-bold uppercase tracking-widest text-neutral-400">
               Manish © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

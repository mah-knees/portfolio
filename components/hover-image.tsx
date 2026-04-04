"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

type HoverImageProps = {
  src: string;
  alt: string;
  children: React.ReactNode;
};

export function HoverImage({ src, alt, children }: HoverImageProps) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const onMove = useCallback((e: React.MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  const preview = mounted
    ? createPortal(
      <AnimatePresence>
        {active && (
          <motion.div
            key="hover-preview"
            className="pointer-events-none fixed z-[100] h-36 w-52 sm:h-44 sm:w-64"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -115%)",
            }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
          >
            <div className="relative h-full w-full overflow-hidden border border-black bg-white shadow-[4px_4px_0_0_#000]">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 208px, 256px"
                className="object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )
    : null;

  return (
    <>
      <span
        className="inline cursor-default font-bold accent-gradient-text-hover"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onMouseMove={onMove}
      >
        {children}
      </span>
      {preview}
    </>
  );
}

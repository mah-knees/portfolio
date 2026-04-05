import Link from "next/link";

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/manish-madhavan-85426a187/" },
  { label: "Dribbble", href: "https://dribbble.com/_Manish_UIX" },
  { label: "Instagram", href: "https://www.instagram.com/manish_dzn/?hl=en" },
  { label: "Twitter", href: "https://x.com/mah_knees/likes" },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-black scroll-mt-[100px]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="font-black uppercase leading-[0.85] tracking-tighter text-4xl sm:text-6xl lg:text-8xl">
          Got a project?
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed sm:text-base">
          Open to freelance, collaborations, and full-time roles. Based in
          Bangalore, working globally.
        </p>
        <a
          href="mailto:manishmadhavan.work@gmail.com"
          className="mt-8 inline-block text-xl font-bold underline decoration-2 underline-offset-8 transition-colors duration-300 hover:text-[#000675] cursor-pointer sm:text-2xl"
        >
          → manishmadhavan.work@gmail.com
        </a>

        <div className="mt-16 flex flex-col gap-6 border-t border-black pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-widest">
            Manish © 2026
          </p>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest"
            aria-label="Social links"
          >
            {social.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#000675] cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

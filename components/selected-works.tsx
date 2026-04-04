import Image from "next/image";
import Link from "next/link";

const works = [
  {
    title: "Spatial Systems",
    description: "Minimal interface studies and spatial UI concepts.",
    href: "https://www.behance.net/",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80&auto=format&fit=crop",
    alt: "Minimal layout study",
  },
  {
    title: "Product UI",
    description: "Interaction and layout for product experiences.",
    href: "https://dribbble.com/",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=80&auto=format&fit=crop",
    alt: "Interface exploration",
  },
] as const;

export function SelectedWorks() {
  return (
    <section
      id="works"
      className="border-t border-black"
      aria-labelledby="selected-works-heading"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2
          id="selected-works-heading"
          className="mb-10 text-xs font-bold uppercase tracking-widest"
        >
          Selected works<sup className="text-[0.7em]">⁽²⁾</sup>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {works.map((item) => (
            <Link
              key={item.href + item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-black bg-neutral-200">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition duration-500 ease-out group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 accent-gradient-bg"
                >
                  <span className="rounded-full border border-white/45 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-background">
                    VIEW CASE STUDY
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs font-bold uppercase tracking-widest">
                  {item.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

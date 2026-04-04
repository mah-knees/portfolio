import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-x-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="col-span-12 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-widest"
            aria-label="Primary navigation"
          >
            <Link href="#about" className="accent-gradient-text-hover">
              ABOUT
            </Link>
            <Link href="#works" className="accent-gradient-text-hover">
              WORKS
            </Link>
            <Link href="#contact" className="accent-gradient-text-hover">
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center gap-3 sm:justify-end">
            <Link
              href="#"
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

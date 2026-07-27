import { navLinks } from "@/data/site";

const Header = () => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/[0.82] backdrop-blur-md">
    <div className="shell flex items-center justify-between gap-6 py-3.5">
      <a
        href="#intro"
        className="font-display text-[17px] font-bold tracking-[-0.01em] text-ink transition-colors hover:text-brand"
      >
        mark<span className="text-brand">.</span>shevchenko
      </a>

      <nav
        aria-label="Sections"
        className="flex items-center gap-[26px] text-[14.5px] font-medium"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden text-subtle transition-colors hover:text-brand md:inline"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-ink px-[18px] py-[9px] font-semibold text-paper transition-colors hover:bg-brand hover:text-white"
        >
          Contact me
        </a>
      </nav>
    </div>
  </header>
);

export default Header;

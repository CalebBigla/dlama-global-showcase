import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "./Brand";
import { GoldLink } from "./GoldButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Estates" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparentAllowed = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !transparentAllowed;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid
            ? "bg-background/95 py-3 shadow-[0_1px_0_0_oklch(0.9_0.008_95)] backdrop-blur"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container-lux grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="min-w-0">
            <span className={solid ? "" : "[&_.text-primary]:text-primary-foreground"}>
              <Wordmark inverted={!solid} />
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={`text-[0.68rem] tracking-[0.22em] uppercase transition-colors hover:text-accent ${
                  solid ? "text-primary" : "text-primary-foreground/85"
                }`}
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <GoldLink to="/contact" variant="outline" className="px-5 py-2.5">
              Book Site Visit
            </GoldLink>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`lg:hidden ${solid ? "text-primary" : "text-primary-foreground"}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-navy-deep transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="container-lux flex items-center justify-between py-6">
          <Wordmark inverted />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-primary-foreground"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="container-lux mt-10 flex flex-col gap-6">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-3xl text-primary-foreground transition-colors hover:text-accent"
              style={{
                animation: open ? "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both" : undefined,
                animationDelay: `${i * 60}ms`,
              }}
            >
              {l.label}
            </Link>
          ))}
          <GoldLink to="/contact" className="mt-6 self-start">
            Book Site Visit
          </GoldLink>
        </nav>
      </div>
    </>
  );
}
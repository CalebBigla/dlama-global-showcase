import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SkylineMark, Wordmark } from "./Brand";
import { GoldButton } from "./GoldButton";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <SkylineMark className="pointer-events-none absolute -right-10 -bottom-16 h-72 w-96 text-accent/10" />
      <div className="container-lux relative grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark inverted />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
            Invest Smart, Live Better — Your trusted partner for affordable estate plots in Adamawa State, with flexible payment plans and secure titles.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/Dlamahomes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@dlamahome"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-9 w-9 place-items-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com/Dlama_Homes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="grid h-9 w-9 place-items-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/DlamaGlobalHomesLtd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[0.65rem] tracking-[0.3em] text-accent uppercase">Quick Links</h3>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
            {[
              { to: "/properties", label: "Properties" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/agents", label: "Our Agents" },
              { to: "/insights", label: "Insights" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.65rem] tracking-[0.3em] text-accent uppercase">Featured Estates</h3>
          <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
            {["Parkview Estate", "New City Estate", "Hossana Estate", "Jimeta Properties", "Yola South Plots"].map((c) => (
              <li key={c}>
                <Link to="/properties" className="transition-colors hover:text-accent">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.65rem] tracking-[0.3em] text-accent uppercase">Stay Informed</h3>
          <p className="mt-6 text-sm text-primary-foreground/60">
            Get updates on new estates, exclusive deals, and flexible payment plans.
          </p>
          <form
            className="mt-5 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Thank you — you're on the list.");
              setEmail("");
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="border border-primary-foreground/20 bg-transparent px-4 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent focus:outline-none"
            />
            <GoldButton type="submit">Subscribe</GoldButton>
          </form>
          <ul className="mt-8 space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> No 43 Atiku Abubakar Way, opposite Sabru House, Jimeta, Yola, Adamawa State
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" /> 08060774472
            </li>
            <li>
              <a
                href="https://wa.me/2348060774472"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-accent" /> WhatsApp Us
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" /> info@dlamaglobalhomes.com
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-lux flex flex-col gap-3 py-6 text-xs text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dlama Global Homes. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
            <a href="#" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
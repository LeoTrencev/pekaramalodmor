import { useState, useEffect } from "react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const WOLT_URL = "https://wolt.com/en/mkd/skopje/restaurant/mal-odmor";
const PHONE = "+38971216251";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.home"), href: "#hero" },
    { label: t("nav.menu"), href: "#menu" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.location"), href: "#location" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#hero" className={`font-display text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-primary" : "text-white"}`}>
          Мал Одмор
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">{t("nav.callUs")}</span>
            </a>
            <a
              href={WOLT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 text-sm font-medium hover:scale-105 shadow-md"
            >
              <ShoppingBag className="w-4 h-4" />
              {t("nav.order")}
            </a>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary text-primary-foreground"
            aria-label="Order"
          >
            <ShoppingBag className="w-5 h-5" />
          </a>
          <LanguageToggle />
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className={`p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-md border-b border-border`}
      >
        <div className="px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3 border-t border-border mt-2">
            <a
              href={`tel:${PHONE}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-secondary text-secondary-foreground font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              {t("nav.callUs")}
            </a>
            <a
              href={WOLT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              {t("nav.order")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

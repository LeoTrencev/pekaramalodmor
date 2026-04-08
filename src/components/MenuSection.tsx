import { useState, useRef, useEffect } from "react";
import { categories } from "@/data/menuData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

const MenuSection = () => {
  const [active, setActive] = useState<number | null>(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ rootMargin: "0px 0px -20px 0px" });
  const { t, lang } = useLanguage();

  const currency = t("menu.currency");

  const showAll = active === null;
  const displayItems = showAll
    ? categories.flatMap((c) => c.items)
    : categories[active]?.items ?? [];

  const activeLabel = showAll
    ? t("menu.all")
    : lang === "en"
      ? categories[active!]?.nameEn
      : categories[active!]?.name;

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={sectionRef}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">{t("menu.subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            {t("menu.title")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            {t("menu.desc")}
          </p>
        </div>

        {/* Category selector - grid on desktop, dropdown on mobile */}
        <div className="mb-8">
          {/* Mobile dropdown */}
          <div className="md:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-card border border-border text-foreground font-medium text-base shadow-sm"
            >
              <span>{activeLabel}</span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-2xl shadow-xl z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <button
                  onClick={() => { setActive(null); setDropdownOpen(false); }}
                  className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors ${
                    showAll ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {t("menu.all")}
                </button>
                {categories.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => { setActive(i); setDropdownOpen(false); }}
                    className={`w-full text-left px-5 py-3 text-sm font-medium transition-colors border-t border-border/50 ${
                      i === active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {lang === "en" ? c.nameEn : c.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop grid of pills */}
          <div className="hidden md:flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActive(null)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                showAll
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:scale-[1.02]"
              }`}
            >
              {t("menu.all")}
            </button>
            {categories.map((c, i) => (
              <button
                key={c.name}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  i === active
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:scale-[1.02]"
                }`}
              >
                {lang === "en" ? c.nameEn : c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Items grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayItems.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className={`bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 group overflow-hidden ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${Math.min(idx * 60, 400)}ms` }}
            >
              {item.image && (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={lang === "en" ? item.nameEn : item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  <span className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    {item.price} {currency}
                  </span>
                </div>
              )}
              <div className="p-5">
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {lang === "en" ? item.nameEn : item.name}
                    </h3>
                    {(lang === "en" ? item.descEn : item.desc) && (
                      <p className="text-muted-foreground text-sm mt-1">
                        {lang === "en" ? item.descEn : item.desc}
                      </p>
                    )}
                  </div>
                  {!item.image && (
                    <span className="text-primary font-bold text-lg whitespace-nowrap">
                      {item.price} {currency}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

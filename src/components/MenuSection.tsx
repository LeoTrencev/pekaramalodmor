import { useState } from "react";
import { categories } from "@/data/menuData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const MenuSection = () => {
  const [active, setActive] = useState<number | null>(0);
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ rootMargin: "0px 0px -20px 0px" });
  const { t, lang } = useLanguage();

  const currency = t("menu.currency");

  const showAll = active === null;
  const displayItems = showAll
    ? categories.flatMap((c) => c.items)
    : categories[active]?.items ?? [];

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

        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
          <button
            onClick={() => setActive(null)}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
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
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:scale-[1.02]"
              }`}
            >
              {lang === "en" ? c.nameEn : c.name}
            </button>
          ))}
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

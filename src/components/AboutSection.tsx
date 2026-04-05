import { Clock, Award, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const features = [
    { icon: Clock, title: t("about.fresh.title"), desc: t("about.fresh.desc") },
    { icon: Award, title: t("about.quality.title"), desc: t("about.quality.desc") },
    { icon: Heart, title: t("about.love.title"), desc: t("about.love.desc") },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">{t("about.subtitle")}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {t("about.title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("about.desc")}
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div
              key={idx}
              className={`text-center group transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

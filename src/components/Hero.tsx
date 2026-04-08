import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import heroBg from "@/assets/hero-bakery.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const WOLT_URL = "https://wolt.com/en/mkd/skopje/restaurant/mal-odmor";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Пекара Мал Одмор"
          className="absolute inset-0 w-full h-full object-cover animate-hero-ken-burns"
          width={1920}
          height={1080}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className={`text-amber-300 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          {t("hero.subtitle")}
        </p>
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          {t("hero.title")}
        </h1>
        <p
          className={`text-white/90 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 drop-shadow-lg transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          {t("hero.desc")}
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <a
            href={WOLT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            {t("hero.orderNow")}
          </a>
          <a href="#menu" className="px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-medium hover:bg-white/15 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
            {t("hero.viewMenu")}
          </a>
          <a href="#location" className="px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-medium hover:bg-white/15 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
            {t("hero.findUs")}
          </a>
        </div>
      </div>

      
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1.3s" }}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

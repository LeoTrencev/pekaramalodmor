import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bakery.jpg";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Пекара Мал Одмор - свежи печива"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ${loaded ? "scale-100" : "scale-110"}`}
        width={1920}
        height={1080}
      />
      {/* Stronger overlay for text readability in both themes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p
          className={`text-amber-300 font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          Карпош 1 · Бул. Партизански Одреди 59/1 · Скопје
        </p>
        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          Мал Одмор
        </h1>
        <p
          className={`text-white/90 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 drop-shadow-lg transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          Традиција, квалитет и вкус — секој ден свежо печено за вас
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0.9s" }}
        >
          <a href="#menu" className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg">
            Погледни го менито
          </a>
          <a href="#location" className="px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-medium hover:bg-white/15 hover:border-white/60 transition-all duration-300 backdrop-blur-sm">
            Најди нè
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`} style={{ transitionDelay: "1.3s" }}>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

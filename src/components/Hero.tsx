import heroBg from "@/assets/hero-bakery.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Пекара Мал Одмор - свежи печива"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-[hsl(var(--hero-overlay)/0.65)]" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Бул. Партизански Одреди 59/1 · Скопје
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Мал Одмор
        </h1>
        <p className="text-cream/80 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Традиција, квалитет и вкус — секој ден свежо печено за вас
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.45s" }}>
          <a href="#menu" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-accent transition-colors">
            Погледни го менито
          </a>
          <a href="#location" className="px-8 py-3 border border-cream/30 text-cream rounded-lg font-medium hover:bg-cream/10 transition-colors">
            Најди нè
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

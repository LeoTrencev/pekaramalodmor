import { MapPin, Clock, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LocationSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Најдете нè</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Локација
          </h2>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-8 items-stretch transition-all duration-700 ${
            contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg min-h-[400px] hover:shadow-2xl transition-shadow duration-500">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5!2d21.412571!3d42.000491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAwJzAxLjgiTiAyMcKwMjQnNDUuMyJF!5e0!3m2!1sen!2smk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Локација на Мал Одмор"
            />
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: MapPin,
                title: "Адреса",
                content: (
                  <>
                    <p className="text-muted-foreground">Бул. Партизански Одреди 59/1</p>
                    <p className="text-muted-foreground">Карпош 1, 1000 Скопје</p>
                  </>
                ),
                delay: 0,
              },
              {
                icon: Clock,
                title: "Работно време",
                content: (
                  <div className="text-muted-foreground space-y-1">
                    <p>Понеделник — Петок: <span className="text-foreground font-medium">09:00 – 17:00</span></p>
                    <p>Сабота — Недела: <span className="text-destructive font-medium">Затворено</span></p>
                  </div>
                ),
                delay: 100,
              },
              {
                icon: Phone,
                title: "Контакт",
                content: (
                  <a href="tel:+38978219675" className="text-primary hover:underline font-medium">
                    +389 78 219 675
                  </a>
                ),
                delay: 200,
              },
            ].map((card) => (
              <div
                key={card.title}
                className={`bg-card rounded-2xl p-8 border border-border flex-1 hover:border-primary/30 hover:shadow-lg transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${card.delay + 200}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">{card.title}</h3>
                    {card.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

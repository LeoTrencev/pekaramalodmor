import { MapPin, Clock, Phone } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Најдете нè</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Локација
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg min-h-[400px]">
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
            <div className="bg-card rounded-2xl p-8 border border-border flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">Адреса</h3>
                  <p className="text-muted-foreground">Бул. Партизански Одреди 59/1</p>
                  <p className="text-muted-foreground">1000 Скопје, Македонија</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">Работно време</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Понеделник — Петок: <span className="text-foreground font-medium">09:00 – 17:00</span></p>
                    <p>Сабота — Недела: <span className="text-destructive font-medium">Затворено</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border flex-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">Контакт</h3>
                  <a href="tel:+38978219675" className="text-primary hover:underline font-medium">
                    +389 78 219 675
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

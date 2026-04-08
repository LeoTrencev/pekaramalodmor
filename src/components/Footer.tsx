import { Instagram, Facebook, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WOLT_URL = "https://wolt.com/en/mkd/skopje/restaurant/mal-odmor";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-0.5">Пекара</p>
            <h3 className="font-display text-2xl font-bold text-primary mb-1">Мал Одмор</h3>
            <p className="text-muted-foreground text-sm">Карпош 1 · Бул. Партизански Одреди 59/1, Скопје</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={WOLT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:brightness-110 transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              <ShoppingBag className="w-4 h-4" />
              {t("footer.orderWolt")}
            </a>
            <a
              href="https://www.instagram.com/pekaramalodmor/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-foreground hover:scale-110 hover:-rotate-6"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/malodmorpekara/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-foreground hover:scale-110 hover:rotate-6"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Пекара Мал Одмор. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

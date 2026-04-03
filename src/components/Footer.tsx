import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-1">Мал Одмор</h3>
            <p className="text-muted-foreground text-sm">Карпош 1 · Бул. Партизански Одреди 59/1, Скопје</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/malodmor_bakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-foreground hover:scale-110 hover:-rotate-6"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/malodmor/"
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
          © {new Date().getFullYear()} Мал Одмор. Сите права задржани.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

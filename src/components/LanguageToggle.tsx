import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "mk" ? "en" : "mk")}
      className="px-2.5 py-1.5 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs font-bold tracking-wide hover:scale-110"
      aria-label="Toggle language"
    >
      {lang === "mk" ? "EN" : "MK"}
    </button>
  );
};

export default LanguageToggle;

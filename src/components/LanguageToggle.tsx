import { useLanguage } from "@/i18n/LanguageContext";
import flagUk from "@/assets/flag-uk.png";
import flagMk from "@/assets/flag-mk.png";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "mk" ? "en" : "mk")}
      className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300 shadow-sm border border-border flex-shrink-0"
      aria-label="Toggle language"
    >
      <img
        src={lang === "mk" ? flagUk : flagMk}
        alt={lang === "mk" ? "Switch to English" : "Префрли на македонски"}
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default LanguageToggle;

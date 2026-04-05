import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "mk" ? "en" : "mk")}
      className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300 shadow-sm border border-border"
      aria-label="Toggle language"
    >
      {lang === "mk" ? (
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <rect fill="#012169" width="640" height="480"/>
          <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"/>
          <path fill="#C8102E" d="m42 0 278 206L599 0h41v31L400 241l240 178v31h-42L320 272 42 480H0v-31l239-178L0 30V0z"/>
          <path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z"/>
          <path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z"/>
        </svg>
      ) : (
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#D20000" width="640" height="480" d="M0 0h640v480H0z"/>
          <rect fill="#D20000" width="640" height="480"/>
          <g transform="translate(320,240)">
            <circle r="80" fill="#FFBE00"/>
            <g fill="#D20000">
              {[...Array(8)].map((_, i) => (
                <rect key={i} x="-4" y="-120" width="8" height="120" transform={`rotate(${i * 45})`}/>
              ))}
            </g>
            <circle r="40" fill="#FFBE00"/>
          </g>
        </svg>
      )}
    </button>
  );
};

export default LanguageToggle;

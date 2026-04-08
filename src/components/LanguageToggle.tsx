import { useLanguage } from "@/i18n/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "mk" ? "en" : "mk")}
      className="w-8 h-8 rounded-full overflow-hidden hover:scale-110 transition-transform duration-300 shadow-sm border border-border flex-shrink-0"
      aria-label="Toggle language"
    >
      {lang === "mk" ? (
        // Show UK flag (switch to English)
        <svg viewBox="0 0 36 36" className="w-full h-full scale-[1.6]">
          <rect fill="#012169" width="36" height="36"/>
          <path fill="#FFF" d="M0 0l36 27v-3L5 0H0zm36 0L0 27v-3l31-24h5zM13 0v36h10V0zM0 12v12h36V12z"/>
          <path fill="#C8102E" d="M0 14.4v7.2h36v-7.2zM15 0v36h6V0zM0 0l12 9h3.5L0 0zm20.5 9L36 0h-5L15.5 9zM0 36l15.5-9H12L0 36zm36 0L20.5 27H24l12 9z"/>
        </svg>
      ) : (
        // Show Macedonian flag (switch to Macedonian)
        <svg viewBox="0 0 36 36" className="w-full h-full scale-[1.6]">
          <rect fill="#CE2028" width="36" height="36"/>
          <g transform="translate(18,18)">
            {/* Sun rays */}
            <polygon fill="#F9D616" points="-18,-3 -3,-3 0,-18 3,-3 18,-3 3,3 18,18 3,3 0,18 -3,3 -18,18 -3,3" />
            <line x1="0" y1="-18" x2="0" y2="18" stroke="#CE2028" strokeWidth="2.5"/>
            <line x1="-18" y1="0" x2="18" y2="0" stroke="#CE2028" strokeWidth="2.5"/>
            <line x1="-18" y1="-18" x2="18" y2="18" stroke="#CE2028" strokeWidth="1.5"/>
            <line x1="18" y1="-18" x2="-18" y2="18" stroke="#CE2028" strokeWidth="1.5"/>
            <circle r="6" fill="#CE2028"/>
            <circle r="5" fill="#F9D616"/>
          </g>
        </svg>
      )}
    </button>
  );
};

export default LanguageToggle;

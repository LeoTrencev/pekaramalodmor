import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "mk" | "en";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { mk: "Почетна", en: "Home" },
  "nav.menu": { mk: "Мени", en: "Menu" },
  "nav.about": { mk: "За нас", en: "About" },
  "nav.location": { mk: "Локација", en: "Location" },
  "nav.contact": { mk: "Контакт", en: "Contact" },
  "nav.order": { mk: "Нарачај", en: "Order" },
  "nav.callUs": { mk: "Јави се", en: "Call Us" },
  "hero.subtitle": { mk: "Карпош 1 · Бул. Партизански Одреди 59/1 · Скопје", en: "Karposh 1 · Bul. Partizanski Odredi 59/1 · Skopje" },
  "hero.title": { mk: "Мал Одмор", en: "Mal Odmor" },
  "hero.desc": { mk: "Традиција, квалитет и вкус — секој ден свежо печено за вас", en: "Tradition, quality and taste — freshly baked for you every day" },
  "hero.viewMenu": { mk: "Погледни го менито", en: "View Menu" },
  "hero.findUs": { mk: "Најди нè", en: "Find Us" },
  "hero.orderNow": { mk: "Нарачај сега", en: "Order Now" },
  "menu.subtitle": { mk: "Наше мени", en: "Our Menu" },
  "menu.title": { mk: "Свежо & Вкусно", en: "Fresh & Delicious" },
  "menu.desc": { mk: "Разгледајте ја нашата богата понуда — од свежи пецива до домашни десерти", en: "Browse our rich selection — from fresh pastries to homemade desserts" },
  "menu.currency": { mk: "ден", en: "MKD" },
  "menu.all": { mk: "Сите", en: "All" },
  "about.subtitle": { mk: "За нас", en: "About Us" },
  "about.title": { mk: "Традиција на вкусот", en: "A Tradition of Taste" },
  "about.desc": {
    mk: "Пекара Мал Одмор е вашето омилено место за свежи пецива, бурек, пици, десерти и многу повеќе. Лоцирани во населба Карпош 1, на Бул. Партизански Одреди 59/1 во Скопје, ве очекуваме секој ден.",
    en: "Mal Odmor Bakery is your favorite place for fresh pastries, burek, pizza, desserts and much more. Located in the Karposh 1 neighborhood, at Bul. Partizanski Odredi 59/1 in Skopje, we welcome you every day.",
  },
  "about.fresh.title": { mk: "Секој ден свежо", en: "Fresh Every Day" },
  "about.fresh.desc": { mk: "Од раните утрински часови, нашата пекара подготвува свежи производи за вас.", en: "From the early morning hours, our bakery prepares fresh products for you." },
  "about.quality.title": { mk: "Квалитетни состојки", en: "Quality Ingredients" },
  "about.quality.desc": { mk: "Користиме само најквалитетни и природни состојки за секој наш производ.", en: "We use only the highest quality natural ingredients for every product." },
  "about.love.title": { mk: "Со љубов", en: "Made with Love" },
  "about.love.desc": { mk: "Секое пециво е направено со внимание, грижа и страст кон занаетот.", en: "Every pastry is made with attention, care and passion for the craft." },
  "loc.subtitle": { mk: "Најдете нè", en: "Find Us" },
  "loc.title": { mk: "Локација", en: "Location" },
  "loc.address": { mk: "Адреса", en: "Address" },
  "loc.address1": { mk: "Бул. Партизански Одреди 59/1", en: "Bul. Partizanski Odredi 59/1" },
  "loc.address2": { mk: "Карпош 1, 1000 Скопје", en: "Karposh 1, 1000 Skopje" },
  "loc.hours": { mk: "Работно време", en: "Working Hours" },
  "loc.monSat": { mk: "Понеделник — Сабота", en: "Monday — Saturday" },
  "loc.sun": { mk: "Недела", en: "Sunday" },
  "loc.closed": { mk: "Затворено", en: "Closed" },
  "loc.contact": { mk: "Контакт", en: "Contact" },
  "footer.rights": { mk: "Сите права задржани.", en: "All rights reserved." },
  "footer.orderWolt": { mk: "Нарачај преку Wolt", en: "Order via Wolt" },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("mk");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en") setLangState("en");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
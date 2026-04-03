import { useState } from "react";

type MenuItem = {
  name: string;
  price: number;
  desc?: string;
};

type Category = {
  name: string;
  icon: string;
  items: MenuItem[];
};

const categories: Category[] = [
  {
    name: "Бели пецива",
    icon: "🥐",
    items: [
      { name: "Кифла со шунка и кашкавал", price: 80 },
      { name: "Кифла со кашкавал", price: 65 },
      { name: "Кифла со зденка", price: 65 },
      { name: "Кифла со зденка и маслинки", price: 80 },
      { name: "Ѓеврек", price: 40 },
      { name: "Ѓеврек со маслинки", price: 65 },
      { name: "Чунче со кашкавал, кулен, маслинки", price: 105 },
      { name: "Чунче со кашкавал, свински врат, кари сос", price: 105 },
      { name: "Баварски ѓеврек", price: 45 },
      { name: "Баварски перек", price: 45 },
      { name: "Баварско стапче", price: 45 },
      { name: "Соленка", price: 40, desc: "Солено стапче со веѓета, сусам" },
      { name: "Плетенка со виршла", price: 80, desc: "Пилешка виршла, кашкавал" },
      { name: "Срце со врат", price: 80, desc: "Кашкавал, свински врат" },
      { name: "Хот дог", price: 80, desc: "Пилешка виршла, сенф, кисела краставичка" },
    ],
  },
  {
    name: "Пица",
    icon: "🍕",
    items: [
      { name: "Затворена пица — панцерота", price: 105, desc: "Кашкавал, кечап, пилешки гради, печурки" },
      { name: "Конопица", price: 105, desc: "Кашкавал, павлака, пилешки гради" },
      { name: "Парче пица", price: 100, desc: "Кашкавал, кечап, пилешки гради, печурки, оригано" },
      { name: "Мини пица", price: 80, desc: "Кечап, оригано, кашкавал, свински кулен" },
    ],
  },
  {
    name: "Лиснато",
    icon: "🥧",
    items: [
      { name: "Лиснато зденка маслинка", price: 100 },
      { name: "Лиснато шунка и кашкавал", price: 100 },
      { name: "Лиснато виршла", price: 90 },
      { name: "Лисната плетенка", price: 60, desc: "Веѓета, сусам" },
    ],
  },
  {
    name: "Бурек",
    icon: "🫓",
    items: [
      { name: "Бурек со месо", price: 100, desc: "Јунешко месо, кромид, сол, мелен бибер" },
      { name: "Бурек со сирење", price: 100, desc: "Млечна урда" },
      { name: "Пица бурек", price: 120, desc: "Кашкавал, рендани пилешки гради, кечап" },
      { name: "Бурек со кашкавал, павлака и пилешки гради", price: 120 },
      { name: "Симит погача", price: 50 },
    ],
  },
  {
    name: "Вртена пита",
    icon: "🌀",
    items: [
      { name: "Вртена пита со месо", price: 100 },
      { name: "Вртена пита со сирење", price: 100 },
      { name: "Вртена пита со спанаќ", price: 100 },
      { name: "Вртена пита со компир", price: 100 },
      { name: "Вртена пита со праз и сирење", price: 100 },
      { name: "Вртена пита со спанаќ и сирење", price: 100 },
      { name: "Вртена пита со пилешко во кари", price: 160 },
    ],
  },
  {
    name: "Врап",
    icon: "🌯",
    items: [
      { name: "Врап со пченкарна тортиља", price: 200 },
      { name: "Врап со пченична тортиља", price: 200 },
      { name: "Врап со интегрална тортиља", price: 200 },
    ],
  },
  {
    name: "Пастрмајлија",
    icon: "🥩",
    items: [
      { name: "Пастрмајлија пекарска пилешка", price: 200, desc: "Пилешки стек, кашкавал" },
      { name: "Пастрмајлија пекарска свинска", price: 200, desc: "Свинско каре, кашкавал" },
    ],
  },
  {
    name: "Пирошка",
    icon: "🥞",
    items: [
      { name: "Пирошка", price: 130, desc: "Кашкавал, шунка во палачинка" },
    ],
  },
  {
    name: "Печено пиле",
    icon: "🍗",
    items: [
      { name: "Свежо печено пиле на ражен 1.5kg", price: 500 },
    ],
  },
  {
    name: "Десерти",
    icon: "🍰",
    items: [
      { name: "Чизкејк во чаша чоколаден", price: 130 },
      { name: "Чизкејк во чаша малина", price: 130 },
      { name: "Тарт ванила крем и вишна", price: 130 },
      { name: "Тарт чоколаден", price: 130 },
      { name: "Тарт ф'стак", price: 130 },
      { name: "Штрудла со мак", price: 90 },
      { name: "Ролококос", price: 90 },
      { name: "Принцес крофна", price: 90 },
      { name: "Павлова торта", price: 90 },
      { name: "Падобранец", price: 60 },
      { name: "Орасник", price: 60 },
      { name: "Мафин", price: 60 },
      { name: "Нутела топка", price: 90 },
      { name: "Кроасан од лиснато тесто со нутела крем", price: 70 },
      { name: "Еклер", price: 60 },
      { name: "Капина колач", price: 90 },
      { name: "Чоко вишна", price: 90 },
    ],
  },
  {
    name: "Кифлички, погачи и ситни колачи",
    icon: "🧁",
    items: [
      { name: "Кифлички пекарски (1kg)", price: 360 },
      { name: "Кифлички лиснати (1kg)", price: 400 },
      { name: "Славска погача", price: 350 },
      { name: "Ситни колачи посни (1kg)", price: 950 },
      { name: "Ситни колачи мрсни (1kg)", price: 950 },
    ],
  },
  {
    name: "Пијалоци",
    icon: "🥛",
    items: [
      { name: "Јогурт чашка 0.18l", price: 35 },
      { name: "Јогурт шише 0.5l", price: 70 },
      { name: "Јогурт шише 0.25l", price: 45 },
      { name: "Јогурт 1l", price: 100 },
      { name: "Јогурт 1.5l", price: 140 },
      { name: "Кисело млеко 400gr", price: 50 },
      { name: "Павлака 180gr", price: 50 },
    ],
  },
];

const MenuSection = () => {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">Наше мени</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Свежо & Вкусно
          </h2>
        </div>

        {/* Category tabs - scrollable */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
          {categories.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === active
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              <span className="mr-1.5">{c.icon}</span>
              {c.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.items.map((item) => (
            <div
              key={item.name}
              className="bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all group"
            >
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  {item.desc && (
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  )}
                </div>
                <span className="text-primary font-bold text-lg whitespace-nowrap">
                  {item.price} ден
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

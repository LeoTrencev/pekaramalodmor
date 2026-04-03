export type MenuItem = {
  name: string;
  price: number;
  desc?: string;
  image?: string;
};

export type Category = {
  name: string;
  icon: string;
  items: MenuItem[];
};

const woltImg = (id: string) => `https://imageproxy.wolt.com/assets/${id}`;

export const categories: Category[] = [
  {
    name: "Бели пецива",
    icon: "🥐",
    items: [
      { name: "Кифла со шунка и кашкавал", price: 80, image: woltImg("67fe27b5ff803e27f048883c") },
      { name: "Кифла со кашкавал", price: 65, image: woltImg("67fe27b0ff803e27f0488839") },
      { name: "Кифла со зденка", price: 65, image: woltImg("67fe27b8ff803e27f048883e") },
      { name: "Кифла со зденка и маслинки", price: 80, image: woltImg("67fe28d6ff803e27f04888cc") },
      { name: "Ѓеврек", price: 40, image: woltImg("67fe2884ff803e27f04888b4") },
      { name: "Ѓеврек со маслинки", price: 65, image: woltImg("67fe277b24bfc8a04be59909") },
      { name: "Чунче со кашкавал, кулен, маслинки", price: 105, image: woltImg("67fe276424bfc8a04be59901") },
      { name: "Чунче со кашкавал, свински врат, кари сос", price: 105, image: woltImg("67fe29f324bfc8a04be59a0b") },
      { name: "Баварски ѓеврек", price: 45, image: woltImg("67fe263f24bfc8a04be5987d") },
      { name: "Баварски перек", price: 45, image: woltImg("67fe264f24bfc8a04be59882") },
      { name: "Баварско стапче", price: 45, image: woltImg("67fe265924bfc8a04be59886") },
      { name: "Соленка", price: 40, desc: "Солено стапче со веѓета, сусам", image: woltImg("67fe295fff803e27f0488901") },
      { name: "Плетенка со виршла", price: 80, desc: "Пилешка виршла, кашкавал", image: woltImg("67fe290c24bfc8a04be599b0") },
      { name: "Срце со врат", price: 80, desc: "Кашкавал, свински врат", image: woltImg("67fe28dcff803e27f04888ce") },
      { name: "Хот дог", price: 80, desc: "Пилешка виршла, сенф, кисела краставичка", image: woltImg("67fe34cc24bfc8a04be59c40") },
    ],
  },
  {
    name: "Пица",
    icon: "🍕",
    items: [
      { name: "Затворена пица — панцерота", price: 105, desc: "Кашкавал, кечап, пилешки гради, печурки", image: woltImg("67fe29d524bfc8a04be599fd") },
      { name: "Конопица", price: 105, desc: "Кашкавал, павлака, пилешки гради", image: woltImg("67fe27c3ff803e27f0488842") },
      { name: "Парче пица", price: 100, desc: "Кашкавал, кечап, пилешки гради, печурки, оригано", image: woltImg("67fe289524bfc8a04be59986") },
      { name: "Мини пица", price: 80, desc: "Кечап, оригано, кашкавал, свински кулен", image: woltImg("67fe2858c3b7e6aa29d6045a") },
    ],
  },
  {
    name: "Лиснато",
    icon: "🥧",
    items: [
      { name: "Лиснато зденка маслинка", price: 100, image: woltImg("67fe283bc3b7e6aa29d60451") },
      { name: "Лиснато шунка и кашкавал", price: 100, image: woltImg("67fe2835c3b7e6aa29d6044e") },
      { name: "Лиснато виршла", price: 90, image: woltImg("67fe2838c3b7e6aa29d6044f") },
      { name: "Лисната плетенка", price: 60, desc: "Веѓета, сусам", image: woltImg("67fe2832ff803e27f0488885") },
    ],
  },
  {
    name: "Бурек",
    icon: "🫓",
    items: [
      { name: "Бурек со месо", price: 100, desc: "Јунешко месо, кромид, сол, мелен бибер", image: woltImg("67fe2670c3b7e6aa29d603f7") },
      { name: "Бурек со сирење", price: 100, desc: "Млечна урда", image: woltImg("67fe26ccff803e27f04887ef") },
      { name: "Пица бурек", price: 120, desc: "Кашкавал, рендани пилешки гради, кечап", image: woltImg("67fe26c7c3b7e6aa29d60401") },
      { name: "Бурек со кашкавал, павлака и пилешки гради", price: 120, image: woltImg("67fe2669c3b7e6aa29d603f6") },
      { name: "Симит погача", price: 50, image: woltImg("67fe294cc3b7e6aa29d60499") },
    ],
  },
  {
    name: "Вртена пита",
    icon: "🌀",
    items: [
      { name: "Вртена пита со месо", price: 100, image: woltImg("67fe297a24bfc8a04be599e0") },
      { name: "Вртена пита со сирење", price: 100, image: woltImg("67fe297b24bfc8a04be599e1") },
      { name: "Вртена пита со спанаќ", price: 100, image: woltImg("67fe297c24bfc8a04be599e2") },
      { name: "Вртена пита со компир", price: 100, image: woltImg("67fe297d24bfc8a04be599e3") },
      { name: "Вртена пита со праз и сирење", price: 100, image: woltImg("67fe297fff803e27f048890a") },
      { name: "Вртена пита со спанаќ и сирење", price: 100, image: woltImg("67fe2980ff803e27f048890b") },
      { name: "Вртена пита со пилешко во кари", price: 160, image: woltImg("67fe2980ff803e27f048890b") },
    ],
  },
  {
    name: "Врап",
    icon: "🌯",
    items: [
      { name: "Врап со пченкарна тортиља", price: 200, image: woltImg("67fe29ca24bfc8a04be599f6") },
      { name: "Врап со пченична тортиља", price: 200, image: woltImg("67fe311724bfc8a04be59bae") },
      { name: "Врап со интегрална тортиља", price: 200, image: woltImg("67fe29c624bfc8a04be599f5") },
    ],
  },
  {
    name: "Пастрмајлија",
    icon: "🥩",
    items: [
      { name: "Пастрмајлија пекарска пилешка", price: 200, desc: "Пилешки стек, кашкавал", image: woltImg("67fe289d24bfc8a04be5998a") },
      { name: "Пастрмајлија пекарска свинска", price: 200, desc: "Свинско каре, кашкавал", image: woltImg("67fe289f24bfc8a04be5998d") },
    ],
  },
  {
    name: "Пирошка",
    icon: "🥞",
    items: [
      { name: "Пирошка", price: 130, desc: "Кашкавал, шунка во палачинка", image: woltImg("67fe28f124bfc8a04be599a3") },
    ],
  },
  {
    name: "Печено пиле",
    icon: "🍗",
    items: [
      { name: "Свежо печено пиле на ражен 1.5kg", price: 500, image: woltImg("67fe28afff803e27f04888bf") },
    ],
  },
  {
    name: "Десерти",
    icon: "🍰",
    items: [
      { name: "Чизкејк во чаша чоколаден", price: 130, image: woltImg("67fe26f3ff803e27f0488803") },
      { name: "Чизкејк во чаша малина", price: 130, image: woltImg("67fe274824bfc8a04be598fc") },
      { name: "Тарт ванила крем и вишна", price: 130, image: woltImg("67fe296ec3b7e6aa29d6049e") },
      { name: "Тарт чоколаден", price: 130, image: woltImg("67fe296624bfc8a04be599d8") },
      { name: "Тарт ф'стак", price: 130, image: woltImg("67fe296a24bfc8a04be599db") },
      { name: "Штрудла со мак", price: 90, image: woltImg("67fe2942c3b7e6aa29d60496") },
      { name: "Ролококос", price: 90, image: woltImg("67fe2919c3b7e6aa29d6048b") },
      { name: "Принцес крофна", price: 90, image: woltImg("67fe2915c3b7e6aa29d60489") },
      { name: "Павлова торта", price: 90, image: woltImg("67fe28aaff803e27f04888bc") },
      { name: "Падобранец", price: 60, image: woltImg("67fe2891ff803e27f04888b7") },
      { name: "Орасник", price: 60, image: woltImg("67fe288dff803e27f04888b5") },
      { name: "Мафин", price: 60, image: woltImg("67fe2844c3b7e6aa29d60453") },
      { name: "Нутела топка", price: 90, image: woltImg("67fe287b24bfc8a04be59979") },
      { name: "Кроасан од лиснато тесто со нутела крем", price: 70, image: woltImg("67fe280ec3b7e6aa29d60448") },
      { name: "Еклер", price: 60, image: woltImg("67fe276e24bfc8a04be59907") },
      { name: "Капина колач", price: 90, image: woltImg("67fe27a224bfc8a04be59915") },
      { name: "Чоко вишна", price: 90, image: woltImg("67fe275424bfc8a04be59900") },
    ],
  },
  {
    name: "Кифлички, погачи и ситни колачи",
    icon: "🧁",
    items: [
      { name: "Кифлички пекарски (1kg)", price: 360, image: woltImg("67fe36e1c3b7e6aa29d6086b") },
      { name: "Кифлички лиснати (1kg)", price: 400, image: woltImg("67fe36e824bfc8a04be59cb3") },
      { name: "Славска погача", price: 350, image: woltImg("67fe3717ff803e27f0488bcb") },
      { name: "Ситни колачи посни (1kg)", price: 950, image: woltImg("67fe373bc3b7e6aa29d60874") },
      { name: "Ситни колачи мрсни (1kg)", price: 950, image: woltImg("67fe373eff803e27f0488bd8") },
    ],
  },
  {
    name: "Пијалоци",
    icon: "🥛",
    items: [
      { name: "Јогурт чашка 0.18l", price: 35, image: woltImg("68232bd62d144b8e648fc126") },
      { name: "Јогурт шише 0.5l", price: 70, image: woltImg("68232c132d144b8e648fc134") },
      { name: "Јогурт шише 0.25l", price: 45, image: woltImg("68232c1704a215be52e554c0") },
      { name: "Јогурт 1l", price: 100, image: woltImg("68232c1ed145a32756002470") },
      { name: "Јогурт 1.5l", price: 140, image: woltImg("68232c2304a215be52e554c3") },
      { name: "Кисело млеко 400gr", price: 50, image: woltImg("68232c4ad145a32756002474") },
      { name: "Павлака 180gr", price: 50, image: woltImg("68232c672d144b8e648fc148") },
    ],
  },
];

export type MenuItem = {
  name: string;
  nameEn: string;
  price: number;
  desc?: string;
  descEn?: string;
  image?: string;
};

export type Category = {
  name: string;
  nameEn: string;
  items: MenuItem[];
};

const woltImg = (id: string) => `https://imageproxy.wolt.com/assets/${id}`;

export const categories: Category[] = [
  {
    name: "Бели пецива",
    nameEn: "White Pastries",
    items: [
      { name: "Кифла со шунка и кашкавал", nameEn: "Ham & Cheese Croissant", price: 80, image: woltImg("67fe27b5ff803e27f048883c") },
      { name: "Кифла со кашкавал", nameEn: "Cheese Croissant", price: 65, image: woltImg("67fe27b0ff803e27f0488839") },
      { name: "Кифла со зденка", nameEn: "Zdenka Cheese Croissant", price: 65, image: woltImg("67fe27b8ff803e27f048883e") },
      { name: "Кифла со зденка и маслинки", nameEn: "Zdenka & Olive Croissant", price: 80, image: woltImg("67fe28d6ff803e27f04888cc") },
      { name: "Ѓеврек", nameEn: "Pretzel", price: 40, image: woltImg("67fe2884ff803e27f04888b4") },
      { name: "Ѓеврек со маслинки", nameEn: "Olive Pretzel", price: 65, image: woltImg("67fe277b24bfc8a04be59909") },
      { name: "Чунче со кашкавал, кулен, маслинки", nameEn: "Boat Roll with Cheese, Kulen & Olives", price: 105, image: woltImg("67fe276424bfc8a04be59901") },
      { name: "Чунче со кашкавал, свински врат, кари сос", nameEn: "Boat Roll with Cheese, Pork Neck & Curry", price: 105, image: woltImg("67fe29f324bfc8a04be59a0b") },
      { name: "Баварски ѓеврек", nameEn: "Bavarian Pretzel", price: 45, image: woltImg("67fe263f24bfc8a04be5987d") },
      { name: "Баварски перек", nameEn: "Bavarian Perek", price: 45, image: woltImg("67fe264f24bfc8a04be59882") },
      { name: "Баварско стапче", nameEn: "Bavarian Stick", price: 45, image: woltImg("67fe265924bfc8a04be59886") },
      { name: "Соленка", nameEn: "Salt Stick", price: 40, desc: "Солено стапче со веѓета, сусам", descEn: "Salty stick with Vegeta, sesame", image: woltImg("67fe295fff803e27f0488901") },
      { name: "Плетенка со виршла", nameEn: "Braided Roll with Sausage", price: 80, desc: "Пилешка виршла, кашкавал", descEn: "Chicken sausage, cheese", image: woltImg("67fe290c24bfc8a04be599b0") },
      { name: "Срце со врат", nameEn: "Heart Roll with Pork Neck", price: 80, desc: "Кашкавал, свински врат", descEn: "Cheese, pork neck", image: woltImg("67fe28dcff803e27f04888ce") },
      { name: "Хот дог", nameEn: "Hot Dog", price: 80, desc: "Пилешка виршла, сенф, кисела краставичка", descEn: "Chicken sausage, mustard, pickled cucumber", image: woltImg("67fe34cc24bfc8a04be59c40") },
    ],
  },
  {
    name: "Пица",
    nameEn: "Pizza",
    items: [
      { name: "Затворена пица — панцерота", nameEn: "Calzone — Panzerotta", price: 105, desc: "Кашкавал, кечап, пилешки гради, печурки", descEn: "Cheese, ketchup, chicken breast, mushrooms", image: woltImg("67fe29d524bfc8a04be599fd") },
      { name: "Конопица", nameEn: "Konopica Pizza", price: 105, desc: "Кашкавал, павлака, пилешки гради", descEn: "Cheese, sour cream, chicken breast", image: woltImg("67fe27c3ff803e27f0488842") },
      { name: "Парче пица", nameEn: "Pizza Slice", price: 100, desc: "Кашкавал, кечап, пилешки гради, печурки, оригано", descEn: "Cheese, ketchup, chicken breast, mushrooms, oregano", image: woltImg("67fe289524bfc8a04be59986") },
      { name: "Мини пица", nameEn: "Mini Pizza", price: 80, desc: "Кечап, оригано, кашкавал, свински кулен", descEn: "Ketchup, oregano, cheese, pork kulen", image: woltImg("67fe2858c3b7e6aa29d6045a") },
    ],
  },
  {
    name: "Лиснато",
    nameEn: "Puff Pastry",
    items: [
      { name: "Лиснато зденка маслинка", nameEn: "Puff Pastry with Zdenka & Olives", price: 100, image: woltImg("67fe283bc3b7e6aa29d60451") },
      { name: "Лиснато шунка и кашкавал", nameEn: "Puff Pastry with Ham & Cheese", price: 100, image: woltImg("67fe2835c3b7e6aa29d6044e") },
      { name: "Лиснато виршла", nameEn: "Puff Pastry with Sausage", price: 90, image: woltImg("67fe2838c3b7e6aa29d6044f") },
      { name: "Лисната плетенка", nameEn: "Puff Pastry Braid", price: 60, desc: "Веѓета, сусам", descEn: "Vegeta, sesame", image: woltImg("67fe2832ff803e27f0488885") },
    ],
  },
  {
    name: "Бурек",
    nameEn: "Burek",
    items: [
      { name: "Бурек со месо", nameEn: "Meat Burek", price: 100, desc: "Јунешко месо, кромид, сол, мелен бибер", descEn: "Beef, onion, salt, ground pepper", image: woltImg("67fe2670c3b7e6aa29d603f7") },
      { name: "Бурек со сирење", nameEn: "Cheese Burek", price: 100, desc: "Млечна урда", descEn: "Milk curd", image: woltImg("67fe26ccff803e27f04887ef") },
      { name: "Пица бурек", nameEn: "Pizza Burek", price: 120, desc: "Кашкавал, рендани пилешки гради, кечап", descEn: "Cheese, shredded chicken breast, ketchup", image: woltImg("67fe26c7c3b7e6aa29d60401") },
      { name: "Бурек со кашкавал, павлака и пилешки гради", nameEn: "Burek with Cheese, Sour Cream & Chicken", price: 120, image: woltImg("67fe2669c3b7e6aa29d603f6") },
      { name: "Симит погача", nameEn: "Simit Pogacha", price: 50, image: woltImg("67fe294cc3b7e6aa29d60499") },
    ],
  },
  {
    name: "Вртена пита",
    nameEn: "Twisted Pie",
    items: [
      { name: "Вртена пита со месо", nameEn: "Twisted Pie with Meat", price: 100, image: woltImg("67fe297a24bfc8a04be599e0") },
      { name: "Вртена пита со сирење", nameEn: "Twisted Pie with Cheese", price: 100, image: woltImg("67fe297b24bfc8a04be599e1") },
      { name: "Вртена пита со спанаќ", nameEn: "Twisted Pie with Spinach", price: 100, image: woltImg("67fe297c24bfc8a04be599e2") },
      { name: "Вртена пита со компир", nameEn: "Twisted Pie with Potato", price: 100, image: woltImg("67fe297d24bfc8a04be599e3") },
      { name: "Вртена пита со праз и сирење", nameEn: "Twisted Pie with Leek & Cheese", price: 100, image: woltImg("67fe297fff803e27f048890a") },
      { name: "Вртена пита со спанаќ и сирење", nameEn: "Twisted Pie with Spinach & Cheese", price: 100, image: woltImg("67fe2980ff803e27f048890b") },
      { name: "Вртена пита со пилешко во кари", nameEn: "Twisted Pie with Chicken Curry", price: 160, image: woltImg("67fe2980ff803e27f048890b") },
    ],
  },
  {
    name: "Врап",
    nameEn: "Wrap",
    items: [
      { name: "Врап со пченкарна тортиља", nameEn: "Corn Tortilla Wrap", price: 200, image: woltImg("67fe29ca24bfc8a04be599f6") },
      { name: "Врап со пченична тортиља", nameEn: "Wheat Tortilla Wrap", price: 200, image: woltImg("67fe311724bfc8a04be59bae") },
      { name: "Врап со интегрална тортиља", nameEn: "Whole Wheat Tortilla Wrap", price: 200, image: woltImg("67fe29c624bfc8a04be599f5") },
    ],
  },
  {
    name: "Пастрмајлија",
    nameEn: "Pastrmajlija",
    items: [
      { name: "Пастрмајлија пекарска пилешка", nameEn: "Chicken Pastrmajlija", price: 200, desc: "Пилешки стек, кашкавал", descEn: "Chicken steak, cheese", image: woltImg("67fe289d24bfc8a04be5998a") },
      { name: "Пастрмајлија пекарска свинска", nameEn: "Pork Pastrmajlija", price: 200, desc: "Свинско каре, кашкавал", descEn: "Pork loin, cheese", image: woltImg("67fe289f24bfc8a04be5998d") },
    ],
  },
  {
    name: "Пирошка",
    nameEn: "Piroshka",
    items: [
      { name: "Пирошка", nameEn: "Piroshka", price: 130, desc: "Кашкавал, шунка во палачинка", descEn: "Cheese, ham in a pancake", image: woltImg("67fe28f124bfc8a04be599a3") },
    ],
  },
  {
    name: "Печено пиле",
    nameEn: "Roasted Chicken",
    items: [
      { name: "Свежо печено пиле на ражен 1.5kg", nameEn: "Fresh Roasted Chicken on a Spit 1.5kg", price: 500, image: woltImg("67fe28afff803e27f04888bf") },
    ],
  },
  {
    name: "Десерти",
    nameEn: "Desserts",
    items: [
      { name: "Чизкејк во чаша чоколаден", nameEn: "Chocolate Cheesecake in a Cup", price: 130, image: woltImg("67fe26f3ff803e27f0488803") },
      { name: "Чизкејк во чаша малина", nameEn: "Raspberry Cheesecake in a Cup", price: 130, image: woltImg("67fe274824bfc8a04be598fc") },
      { name: "Тарт ванила крем и вишна", nameEn: "Vanilla Cream & Cherry Tart", price: 130, image: woltImg("67fe296ec3b7e6aa29d6049e") },
      { name: "Тарт чоколаден", nameEn: "Chocolate Tart", price: 130, image: woltImg("67fe296624bfc8a04be599d8") },
      { name: "Тарт ф'стак", nameEn: "Pistachio Tart", price: 130, image: woltImg("67fe296a24bfc8a04be599db") },
      { name: "Штрудла со мак", nameEn: "Poppy Seed Strudel", price: 90, image: woltImg("67fe2942c3b7e6aa29d60496") },
      { name: "Ролококос", nameEn: "Coconut Roll", price: 90, image: woltImg("67fe2919c3b7e6aa29d6048b") },
      { name: "Принцес крофна", nameEn: "Princess Doughnut", price: 90, image: woltImg("67fe2915c3b7e6aa29d60489") },
      { name: "Павлова торта", nameEn: "Pavlova Cake", price: 90, image: woltImg("67fe28aaff803e27f04888bc") },
      { name: "Падобранец", nameEn: "Parachute Pastry", price: 60, image: woltImg("67fe2891ff803e27f04888b7") },
      { name: "Орасник", nameEn: "Walnut Pastry", price: 60, image: woltImg("67fe288dff803e27f04888b5") },
      { name: "Мафин", nameEn: "Muffin", price: 60, image: woltImg("67fe2844c3b7e6aa29d60453") },
      { name: "Нутела топка", nameEn: "Nutella Ball", price: 90, image: woltImg("67fe287b24bfc8a04be59979") },
      { name: "Кроасан од лиснато тесто со нутела крем", nameEn: "Puff Pastry Croissant with Nutella", price: 70, image: woltImg("67fe280ec3b7e6aa29d60448") },
      { name: "Еклер", nameEn: "Eclair", price: 60, image: woltImg("67fe276e24bfc8a04be59907") },
      { name: "Капина колач", nameEn: "Blackberry Cake", price: 90, image: woltImg("67fe27a224bfc8a04be59915") },
      { name: "Чоко вишна", nameEn: "Choco Cherry", price: 90, image: woltImg("67fe275424bfc8a04be59900") },
    ],
  },
  {
    name: "Кифлички, погачи и ситни колачи",
    nameEn: "Croissants, Pogacha & Petit Fours",
    items: [
      { name: "Кифлички пекарски (1kg)", nameEn: "Bakery Croissants (1kg)", price: 360, image: woltImg("67fe36e1c3b7e6aa29d6086b") },
      { name: "Кифлички лиснати (1kg)", nameEn: "Puff Pastry Croissants (1kg)", price: 400, image: woltImg("67fe36e824bfc8a04be59cb3") },
      { name: "Славска погача", nameEn: "Slavska Pogacha", price: 350, image: woltImg("67fe3717ff803e27f0488bcb") },
      { name: "Ситни колачи посни (1kg)", nameEn: "Lenten Petit Fours (1kg)", price: 950, image: woltImg("67fe373bc3b7e6aa29d60874") },
      { name: "Ситни колачи мрсни (1kg)", nameEn: "Butter Petit Fours (1kg)", price: 950, image: woltImg("67fe373eff803e27f0488bd8") },
    ],
  },
  {
    name: "Пијалоци",
    nameEn: "Beverages",
    items: [
      { name: "Јогурт чашка 0.18l", nameEn: "Yogurt Cup 0.18l", price: 35, image: woltImg("68232bd62d144b8e648fc126") },
      { name: "Јогурт шише 0.5l", nameEn: "Yogurt Bottle 0.5l", price: 70, image: woltImg("68232c132d144b8e648fc134") },
      { name: "Јогурт шише 0.25l", nameEn: "Yogurt Bottle 0.25l", price: 45, image: woltImg("68232c1704a215be52e554c0") },
      { name: "Јогурт 1l", nameEn: "Yogurt 1l", price: 100, image: woltImg("68232c1ed145a32756002470") },
      { name: "Јогурт 1.5l", nameEn: "Yogurt 1.5l", price: 140, image: woltImg("68232c2304a215be52e554c3") },
      { name: "Кисело млеко 400gr", nameEn: "Sour Milk 400gr", price: 50, image: woltImg("68232c4ad145a32756002474") },
      { name: "Павлака 180gr", nameEn: "Sour Cream 180gr", price: 50, image: woltImg("68232c672d144b8e648fc148") },
    ],
  },
];

import { Clock, Award, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Секој ден свежо",
    desc: "Од раните утрински часови, нашите пекари подготвуваат свежи производи за вас.",
  },
  {
    icon: Award,
    title: "Квалитетни состојки",
    desc: "Користиме само најквалитетни и природни состојки за секој наш производ.",
  },
  {
    icon: Heart,
    title: "Со љубов",
    desc: "Секое печиво е направено со внимание, грижа и страст кон занаетот.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2">За нас</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Традиција на вкусот
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Пекара <span className="text-primary font-semibold">Мал Одмор</span> е вашето омилено место за свежи пецива, 
            бурек, пици, десерти и многу повеќе. Лоцирани на Бул. Партизански Одреди 59/1 во Скопје, 
            ве очекуваме секој работен ден од 09:00 до 17:00.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

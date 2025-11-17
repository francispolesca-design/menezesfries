import { Card } from "@/components/ui/card";
import { Flame, Clock, Heart, ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Flame,
      title: "Frescor Garantido",
      description: "Batatas selecionadas e fritas na hora para garantir o máximo de sabor e crocância."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Preparamos seu pedido com agilidade para que você receba quentinho e crocante."
    },
    {
      icon: Heart,
      title: "Feito com Carinho",
      description: "Cada porção é preparada com dedicação e ingredientes de qualidade premium."
    },
    {
      icon: ShieldCheck,
      title: "Higiene Total",
      description: "Seguimos os mais altos padrões de higiene e segurança alimentar."
    }
  ];

  return (
    <section id="qualidades" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Por Que Escolher a Menezes Fries?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade, sabor e dedicação em cada porção
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-shadow bg-card border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

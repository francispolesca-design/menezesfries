import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingOptions = [
  {
    id: 1,
    name: "Porção Individual",
    price: "R$ 15",
    description: "Perfeita para matar a fome",
    features: ["200g de batatas", "Molho à escolha", "Tempero especial", "Embalagem Round Fries"],
    symbol: "○",
  },
  {
    id: 2,
    name: "Porção Dupla",
    price: "R$ 28",
    description: "Ideal para compartilhar",
    features: ["400g de batatas", "2 molhos à escolha", "Tempero especial", "Embalagem Round Fries", "Brinde exclusivo"],
    symbol: "△",
    popular: true,
  },
  {
    id: 3,
    name: "Porção Família",
    price: "R$ 50",
    description: "Para toda a família",
    features: ["800g de batatas", "4 molhos à escolha", "Tempero especial", "Embalagem Round Fries", "2 brindes exclusivos", "Bebida inclusa"],
    symbol: "□",
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="precos" className="py-24 px-4 bg-gradient-to-br from-background via-fries-yellow/20 to-fries-orange/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-fries-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Nosso <span className="text-primary">Cardápio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a porção perfeita para você. Todas feitas com batatas selecionadas e amor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingOptions.map((option) => (
            <Card 
              key={option.id} 
              className={`relative transition-all hover:shadow-xl ${
                option.popular ? "border-primary border-2 scale-105" : ""
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center border-4 border-primary rounded-lg text-4xl font-bold text-primary">
                  {option.symbol}
                </div>
                <CardTitle className="text-2xl mb-2">{option.name}</CardTitle>
                <CardDescription className="text-base">{option.description}</CardDescription>
                <div className="text-5xl font-bold text-primary mt-4">{option.price}</div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={option.popular ? "hero" : "outline"} 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Fazer Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            <strong>Molhos disponíveis:</strong> Ketchup, Maionese, Barbecue, Cheddar, Ranch
          </p>
          <p className="text-sm text-muted-foreground">
            Entregas via WhatsApp • Retirada no local disponível
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

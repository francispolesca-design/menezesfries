import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import batataImage from "@/assets/batata.jpg";

const pricingOptions = [
  {
    id: 1,
    name: "Porção Individual",
    price: "R$ 15",
    symbol: "○",
  },
  {
    id: 2,
    name: "Batata Frita",
    price: "R$ 12",
    symbol: "△",
    image: batataImage,
  },
  {
    id: 3,
    name: "Porção Família",
    price: "R$ 50",
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
              className="relative transition-all hover:shadow-xl"
            >
              <CardHeader className="text-center pb-8">
                {option.image ? (
                  <div className="mx-auto mb-4 w-full h-48 overflow-hidden rounded-lg">
                    <img 
                      src={option.image} 
                      alt={option.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center border-4 border-primary rounded-lg text-4xl font-bold text-primary">
                    {option.symbol}
                  </div>
                )}
                <CardTitle className="text-2xl mb-2">{option.name}</CardTitle>
                <div className="text-5xl font-bold text-primary mt-4">{option.price}</div>
              </CardHeader>

              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Fazer Pedido
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-3">
          <p className="text-muted-foreground">
            <strong>Molhos disponíveis:</strong> Requeijão, Cheddar, Maionese, Ketchup e Molho Rosé
          </p>
          <p className="text-muted-foreground">
            <strong>Completos disponíveis:</strong> Calabresa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

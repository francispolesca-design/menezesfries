import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const MenuSection = () => {
  const handleMenuClick = () => {
    window.open("https://menezes-fries.ola.click/products", "_blank");
  };

  return (
    <section id="cardapio" className="py-20 px-4 bg-gradient-to-br from-fries-yellow/20 via-background to-fries-orange/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Nosso Cardápio
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Confira todas as opções de batatas fritas artesanais, molhos especiais e acompanhamentos deliciosos.
        </p>
        <Button
          size="lg"
          onClick={handleMenuClick}
          className="text-lg gap-2"
        >
          Ver Cardápio Completo
          <ExternalLink className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default MenuSection;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fries.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Round Fries - Batata Frita Artesanal"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-primary rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 border-4 border-secondary opacity-20" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 border-4 border-primary opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
              R
            </div>
            <div className="w-16 h-16 bg-secondary flex items-center justify-center text-secondary-foreground font-bold text-2xl" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}>
              F
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Round <span className="text-primary">Fries</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Batatas fritas artesanais inspiradas no jogo. Crocantes por fora, macias por dentro. Cada porção é uma experiência única.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("precos")}
            className="text-lg"
          >
            Ver Cardápio
            <ArrowRight className="ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="text-lg"
          >
            Entre em Contato
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Artesanal</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">456</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Porções Vendidas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5★</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Avaliação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

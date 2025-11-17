import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fries.jpg";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-fries-yellow via-fries-orange to-primary">
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Menezes Fries - Batata Frita Artesanal"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-fries-yellow/70 via-fries-orange/80 to-primary/90"></div>
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-white rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 border-4 border-white opacity-30" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 border-4 border-fries-gold opacity-50"></div>
      <div className="absolute top-40 right-1/3 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <img 
            src={logo} 
            alt="Menezes Fries Logo" 
            className="w-32 h-32 mx-auto drop-shadow-2xl"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
          Menezes <span className="text-squid-dark">Fries</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-2xl mx-auto drop-shadow-md font-medium">
          Batatas fritas artesanais inspiradas no jogo. Crocantes por fora, macias por dentro. Cada porção é uma experiência única.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="secondary" 
            size="lg"
            onClick={() => scrollToSection("contato")}
            className="text-lg"
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

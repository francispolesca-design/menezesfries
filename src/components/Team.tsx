import { Card, CardContent } from "@/components/ui/card";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  return (
    <section id="organizadores" className="py-24 px-4 bg-gradient-to-br from-fries-orange/30 via-background to-fries-yellow/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-fries-gold/20 blur-3xl" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              A Round Fries nasceu da paixão por batatas fritas perfeitas e do desejo de proporcionar momentos deliciosos para nossos clientes.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nosso compromisso é com a qualidade: selecionamos as melhores batatas, fritamos no ponto ideal de crocância e oferecemos molhos exclusivos que tornam cada porção uma experiência única.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex gap-2">
                <span className="text-3xl text-primary">○</span>
                <span className="text-3xl text-fries-gold">△</span>
                <span className="text-3xl text-primary">□</span>
              </div>
              <p className="text-sm text-muted-foreground italic">
                Unidos pela paixão de servir o melhor
              </p>
            </div>
          </div>

          {/* Right side - Team Photo */}
          <Card className="overflow-hidden h-full min-h-[400px]">
            <CardContent className="h-full p-0">
              <img
                src={teamPhoto}
                alt="Equipe Round Fries"
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;

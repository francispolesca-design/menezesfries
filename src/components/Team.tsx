import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const Team = () => {
  return (
    <section id="organizadores" className="py-24 px-4 bg-gradient-to-br from-fries-orange/30 via-background to-fries-yellow/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-fries-gold/20 blur-3xl" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
            <Users className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Somos uma equipe apaixonada por gastronomia e dedicada a trazer a você as melhores batatas fritas artesanais da região. 
              Com a temática inspirada em Round Six, cada membro do nosso time trabalha com excelência e comprometimento para 
              garantir que cada porção seja uma experiência única e memorável.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Nossa missão é transformar um simples alimento em uma verdadeira obra de arte culinária, combinando ingredientes 
              selecionados, técnicas especiais de preparo e um atendimento que faz toda a diferença.
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

          {/* Right side - Photo placeholder */}
          <Card className="overflow-hidden h-full min-h-[400px] bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-dashed">
            <CardContent className="h-full flex items-center justify-center p-12">
              <div className="text-center">
                <Users className="w-24 h-24 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">
                  Espaço para foto da equipe
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  400 x 400 pixels recomendado
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;

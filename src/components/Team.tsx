import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Fundadora & Chef",
    number: "001",
    symbol: "○",
  },
  {
    id: 2,
    name: "Pedro Santos",
    role: "Gerente de Operações",
    number: "002",
    symbol: "△",
  },
  {
    id: 3,
    name: "Maria Costa",
    role: "Especialista em Atendimento",
    number: "003",
    symbol: "□",
  },
];

const Team = () => {
  return (
    <section id="organizadores" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-6">
            <Users className="w-8 h-8 text-secondary" />
          </div>
          <h2 className="text-5xl font-bold mb-4">
            Nossa <span className="text-primary">Equipe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça as pessoas que tornam cada porção especial
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="group hover:shadow-xl transition-all hover:scale-105 border-2">
              <CardContent className="pt-12 pb-8 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary">{member.symbol}</span>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                    {member.number}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-muted-foreground font-medium">{member.role}</p>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    Dedicado a oferecer a melhor experiência Round Fries
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-muted/50">
            <CardContent className="pt-8 pb-8">
              <p className="text-lg text-foreground">
                <strong className="text-primary">Junte-se ao nosso time!</strong>
                <br />
                <span className="text-muted-foreground">
                  Estamos sempre em busca de pessoas apaixonadas por gastronomia.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;

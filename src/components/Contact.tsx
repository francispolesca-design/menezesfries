import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Mensagem enviada com sucesso!", {
      description: "Retornaremos em breve pelo WhatsApp.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Faça seu pedido ou tire suas dúvidas. Estamos aqui para atendê-lo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email ou WhatsApp</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="seu@email.com ou (11) 99999-9999"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Seu pedido ou mensagem..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">(11) 98765-4321</p>
                  <p className="text-sm text-muted-foreground mt-1">Segunda a Sábado, 10h às 22h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@roundfries.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Respondemos em até 24h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">Rua das Batatas, 456</p>
                  <p className="text-muted-foreground">São Paulo - SP</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Instagram</h3>
                  <p className="text-muted-foreground">@roundfries</p>
                  <p className="text-sm text-muted-foreground mt-1">Siga para promoções exclusivas</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

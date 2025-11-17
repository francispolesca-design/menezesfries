import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Instagram } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast.error("Por favor, escreva uma mensagem.");
      return;
    }

    // Open Instagram DM with the message
    const instagramUsername = "menezesfries";
    const encodedMessage = encodeURIComponent(message);
    
    // Instagram doesn't support pre-filled messages in DMs via URL, so we'll copy the message and open Instagram
    navigator.clipboard.writeText(message).then(() => {
      toast.success("Mensagem copiada!", {
        description: "Abrindo Instagram... Cole a mensagem no direct.",
      });
      
      // Open Instagram profile
      window.open(`https://www.instagram.com/${instagramUsername}/`, "_blank");
      
      // Reset form
      setMessage("");
    }).catch(() => {
      toast.error("Erro ao copiar mensagem. Tente novamente.");
    });
  };

  return (
    <section id="contato" className="py-24 px-4 bg-gradient-to-br from-fries-yellow/30 via-fries-orange/20 to-primary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-fries-gold/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Digite sua mensagem aqui..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar via Instagram
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="pt-6 pb-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Localização</h3>
                  <p className="text-muted-foreground">Escola Estadual Padre Menezes</p>
                  <p className="text-muted-foreground">Avenida Belmiro Salomão</p>
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
                  <p className="text-muted-foreground">@menezesfries</p>
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

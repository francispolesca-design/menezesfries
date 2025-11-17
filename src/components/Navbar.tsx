import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={logo} alt="Menezes Fries" className="w-8 h-8" />
            <span className="font-bold text-lg">Menezes Fries</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("cardapio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Cardápio
            </button>
            <button
              onClick={() => scrollToSection("qualidades")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Qualidades
            </button>
            <button
              onClick={() => scrollToSection("equipe")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("cardapio")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Cardápio
              </button>
              <button
                onClick={() => scrollToSection("qualidades")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Qualidades
              </button>
              <button
                onClick={() => scrollToSection("equipe")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Equipe
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

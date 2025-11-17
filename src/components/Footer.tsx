import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Menezes Fries Logo" 
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">Menezes Fries</span>
            </div>
            <p className="text-sm text-white/80">
              Batatas fritas artesanais. Cada porção é uma vitória de sabor.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#cardapio" className="text-white/80 hover:text-fries-gold transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-white/80 hover:text-fries-gold transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-fries-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2025 Menezes Fries. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-3xl text-white">○</span>
            <span className="text-3xl text-fries-gold">△</span>
            <span className="text-3xl text-white">□</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

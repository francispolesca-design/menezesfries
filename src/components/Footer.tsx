const Footer = () => {
  return (
    <footer className="bg-squid-dark text-squid-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                R
              </div>
              <span className="text-xl font-bold">Round Fries</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Batatas fritas artesanais com a intensidade do jogo. Cada porção é uma vitória de sabor.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#organizadores" className="text-muted-foreground hover:text-primary transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Segunda a Sexta: 10h às 22h</li>
              <li>Sábado: 11h às 23h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Round Fries. Todos os direitos reservados.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <span className="text-3xl">○</span>
            <span className="text-3xl text-primary">△</span>
            <span className="text-3xl">□</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

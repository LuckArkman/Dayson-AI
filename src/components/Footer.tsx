import { Brain, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Produto",
      links: [
        { name: "Funcionalidades", href: "#features" },
        { name: "Como Funciona", href: "#how-it-works" },
        { name: "Preços", href: "#pricing" },
        { name: "API", href: "#" },
        { name: "Integrações", href: "#" }
      ]
    },
    {
      title: "Empresa",
      links: [
        { name: "Sobre Nós", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Carreiras", href: "#" },
        { name: "Imprensa", href: "#" },
        { name: "Contato", href: "#contact" }
      ]
    },
    {
      title: "Recursos",
      links: [
        { name: "Documentação", href: "#" },
        { name: "Tutoriais", href: "#" },
        { name: "Centro de Ajuda", href: "#" },
        { name: "Status", href: "#" },
        { name: "Roadmap", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Termos de Uso", href: "#" },
        { name: "Política de Privacidade", href: "#" },
        { name: "Cookies", href: "#" },
        { name: "LGPD", href: "#" },
        { name: "Licenças", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-ai-primary" />
              <span className="text-xl font-bold gradient-text">AI Genesis</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Transforme suas ideias em realidade com o poder da inteligência artificial generativa.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:border-ai-primary/50 transition-colors"
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-ai-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-ai-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="glass-card p-8 rounded-2xl mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Fique por <span className="gradient-text">Dentro</span>
              </h3>
              <p className="text-muted-foreground">
                Receba as últimas novidades sobre IA, dicas e atualizações da plataforma.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-ai-primary/30 focus:border-ai-primary focus:outline-none transition-colors"
              />
              <button className="bg-gradient-primary px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                Inscrever-se
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-ai-primary/20">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 AI Genesis. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>🇧🇷 Feito no Brasil</span>
            <span>•</span>
            <span>Powered by Advanced AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
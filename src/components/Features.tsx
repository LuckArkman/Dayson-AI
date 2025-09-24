import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Image, 
  FileText, 
  Code, 
  Zap, 
  Shield,
  Palette,
  MessageSquare 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "IA Generativa Avançada",
      description: "Modelos de linguagem de última geração para gerar conteúdo de alta qualidade em segundos."
    },
    {
      icon: Image,
      title: "Geração de Imagens",
      description: "Crie imagens impressionantes a partir de descrições textuais com nossa IA especializada."
    },
    {
      icon: FileText,
      title: "Criação de Conteúdo",
      description: "Produza artigos, posts, e-mails e qualquer tipo de texto de forma automática e inteligente."
    },
    {
      icon: Code,
      title: "Assistente de Código",
      description: "Gere, otimize e debugue código em diversas linguagens de programação."
    },
    {
      icon: Zap,
      title: "Processamento Rápido",
      description: "Resultados instantâneos com nossa infraestrutura de alta performance."
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Seus dados estão protegidos com criptografia de ponta e privacidade total."
    },
    {
      icon: Palette,
      title: "Design Inteligente",
      description: "Crie designs e layouts profissionais com nossa IA especializada em design."
    },
    {
      icon: MessageSquare,
      title: "Chat Interativo",
      description: "Interface de conversação natural para interagir com nossa IA de forma intuitiva."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Recursos <span className="gradient-text">Poderosos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossa plataforma de IA pode transformar sua forma de trabalhar 
            e criar conteúdo de maneira revolucionária.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="glass-card p-6 hover:border-ai-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-ai-primary group-hover:text-ai-secondary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para <span className="gradient-text">Revolucionar</span> seu Trabalho?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que já estão usando nossa IA para 
              aumentar sua produtividade e criatividade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Teste Grátis por 14 Dias
              </button>
              <button className="border border-ai-primary/30 px-8 py-3 rounded-lg hover:bg-ai-primary/10 transition-colors">
                Fale com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
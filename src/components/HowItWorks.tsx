import { Card } from "@/components/ui/card";
import { ArrowRight, Users, Cog, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Users,
      step: "1",
      title: "Cadastre-se",
      description: "Crie sua conta gratuitamente e acesse nossa plataforma em segundos."
    },
    {
      icon: Cog,
      step: "2", 
      title: "Configure",
      description: "Personalize suas preferências e escolha os modelos de IA que melhor atendem suas necessidades."
    },
    {
      icon: Rocket,
      step: "3",
      title: "Crie",
      description: "Comece a gerar conteúdo incrível com o poder da inteligência artificial."
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Como <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Em apenas 3 passos simples, você estará criando conteúdo incrível 
            com o poder da inteligência artificial.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <Card className="glass-card p-8 text-center hover:border-ai-primary/50 transition-all duration-300 hover:scale-105">
                  {/* Step number */}
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <step.icon className="h-12 w-12 text-ai-primary mx-auto" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-ai-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Demo section */}
        <div className="mt-20">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Veja a <span className="gradient-text">Magia</span> Acontecer
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa interface intuitiva torna a criação com IA simples e divertida. 
                  Basta digitar sua ideia e deixar nossa tecnologia fazer o resto.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-ai-primary rounded-full mr-3"></div>
                    Interface drag-and-drop intuitiva
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-ai-secondary rounded-full mr-3"></div>
                    Resultados em tempo real
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-ai-accent rounded-full mr-3"></div>
                    Múltiplos formatos de export
                  </li>
                </ul>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-secondary rounded-xl p-6 glass-card">
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="bg-background/20 rounded p-4">
                      <div className="text-sm text-ai-secondary mb-2">Prompt:</div>
                      <div className="text-sm">"Crie um artigo sobre as tendências de IA em 2024"</div>
                    </div>
                  </div>
                  <div className="bg-background/20 rounded p-4">
                    <div className="text-sm text-ai-primary mb-2">Resultado:</div>
                    <div className="text-xs text-muted-foreground">
                      Artigo completo gerado em 3.2 segundos...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
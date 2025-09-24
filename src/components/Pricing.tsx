import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Grátis",
      period: "",
      description: "Perfeito para começar e explorar as funcionalidades",
      features: [
        "1.000 tokens por mês",
        "Geração de texto básica",
        "3 imagens por dia",
        "Suporte por email",
        "Modelos básicos de IA"
      ],
      cta: "Começar Grátis",
      popular: false,
      variant: "outline"
    },
    {
      name: "Pro",
      price: "R$ 49",
      period: "/mês",
      description: "Ideal para profissionais e pequenas empresas",
      features: [
        "50.000 tokens por mês",
        "Geração avançada de conteúdo",
        "100 imagens por dia",
        "Suporte prioritário",
        "Todos os modelos de IA",
        "API Access",
        "Integração com ferramentas",
        "Histórico ilimitado"
      ],
      cta: "Upgrade para Pro",
      popular: true,
      variant: "default"
    },
    {
      name: "Enterprise",
      price: "Customizado",
      period: "",
      description: "Soluções escaláveis para grandes organizações",
      features: [
        "Tokens ilimitados",
        "Modelos personalizados",
        "Imagens ilimitadas",
        "Suporte dedicado 24/7",
        "SLA garantido",
        "Integração personalizada",
        "Treinamento da equipe",
        "Auditoria e compliance"
      ],
      cta: "Falar com Vendas",
      popular: false,
      variant: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Planos que <span className="gradient-text">Crescem</span> com Você
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano perfeito para suas necessidades. Comece grátis e 
            faça upgrade quando precisar de mais recursos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 glass-card hover:border-ai-primary/50 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'border-ai-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary px-4 py-2 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">Mais Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-ai-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-primary hover:opacity-90' 
                    : 'border-ai-primary/30 hover:bg-ai-primary/10'
                }`}
                variant={plan.variant as "default" | "outline"}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
            <Check className="h-5 w-5 text-ai-primary" />
            <span className="text-sm">30 dias de garantia ou seu dinheiro de volta</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Posso cancelar a qualquer momento?",
                answer: "Sim! Você pode cancelar seu plano a qualquer momento sem taxas ou multas."
              },
              {
                question: "O que são tokens?",
                answer: "Tokens são unidades de medida para o processamento de IA. Cada caractere ou palavra consome tokens."
              },
              {
                question: "Há desconto para estudantes?",
                answer: "Sim! Oferecemos 50% de desconto para estudantes com email .edu válido."
              },
              {
                question: "Posso fazer upgrade do meu plano?",
                answer: "Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
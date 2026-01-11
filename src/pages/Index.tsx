import { motion } from 'framer-motion';
import { 
  Zap, Shield, Star, CheckCircle, Users, ChevronDown, 
  CreditCard, Lock, Clock
} from 'lucide-react';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FeatureCard } from '@/components/FeatureCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { PricingItem } from '@/components/PricingItem';
import { TimelineStep } from '@/components/TimelineStep';
import { CTAButton } from '@/components/CTAButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const testimonials = [
  { content: "Recuperei R$ 8.450 em vendas perdidas no primeiro mês. O InFlow pagou por si mesmo em 3 dias.", author: "João Silva", role: "Infoprodutor" },
  { content: "Antes eu perdia 30% das vendas com carrinho abandonado. Agora recupero quase tudo automaticamente.", author: "Maria Santos", role: "Criadora de Curso" },
  { content: "A IA responde meus clientes 24h. Acordo com vendas feitas enquanto dormia.", author: "Pedro Costa", role: "Mentor Digital" },
  { content: "Instalei em 2 horas e já comecei a ver resultados. Muito mais simples do que imaginei.", author: "Ana Oliveira", role: "Infoprodutora" },
  { content: "Finalmente um sistema que não cobra mensalidade absurda. Paguei uma vez e pronto.", author: "Lucas Ferreira", role: "Afiliado" },
  { content: "O suporte é incrível. Sempre que tive dúvida, recebi resposta rápida.", author: "Carla Mendes", role: "Coach" },
  { content: "Centralizar Hotmart, Kiwify e Braip num lugar só foi game changer pro meu negócio.", author: "Ricardo Lima", role: "Produtor Digital" },
  { content: "A automação de comentários do Instagram triplicou minhas conversões.", author: "Juliana Rocha", role: "Social Media" },
  { content: "Recuperei o valor investido em menos de uma semana. ROI absurdo.", author: "Fernando Alves", role: "Empresário Digital" },
  { content: "Melhor investimento que fiz pro meu negócio digital esse ano.", author: "Patricia Nunes", role: "Infoprodutora" },
];

const features = [
  { icon: "💰", title: "Recuperação Automática de Vendas", description: "Mensagens personalizadas para carrinho abandonado, pagamento recusado, boleto vencido. Recupere até 40% das vendas perdidas.", badge: "Dinheiro no Bolso" },
  { icon: "🤖", title: "Agente de IA que Vende", description: "Responde Instagram e WhatsApp instantaneamente, tira dúvidas, vende produtos e faz follow-up 24/7.", badge: "Essencial", badgeVariant: "accent" as const },
  { icon: "🎯", title: "Experiência VIP", description: "Boas-vindas personalizadas, acesso ao grupo exclusivo, offboarding inteligente. Cada cliente se sente único.", badge: "Alta Conversão" },
  { icon: "📊", title: "Controle Total do Negócio", description: "Todas as vendas de Hotmart, Kiwify, Braip, Ticto em um único painel. Métricas que realmente importam.", badge: "Painel Unificado" },
  { icon: "💬", title: "Automação de Comentários", description: "Palavra-chave nos comentários ativa resposta automática e envia DM personalizada.", badge: "Pronto para vender" },
  { icon: "🔧", title: "Painel Web de Controle", description: "Configure tudo pelo navegador, sem precisar mexer em código ou automação.", badge: "Zero Programação" },
];

const bonusFeatures = [
  { icon: "🛡️", title: "APIs Oficiais e Não-Oficiais", description: "Você escolhe qual usar baseado nas suas necessidades. Flexibilidade total." },
  { icon: "🎓", title: "Vídeo Aulas Completas", description: "Instalação e configuração VPS, N8N e setup completo dos fluxos." },
  { icon: "⚙️", title: "Instalação Única", description: "Instala uma vez no seu servidor e funciona para sempre. Sem mensalidades." },
  { icon: "💬", title: "Suporte Prioritário", description: "Eu não te deixo travar. Tire dúvidas direto comigo e com a equipe na comunidade." },
];

const timeline = [
  { day: "DIA 1", title: "Setup do Sistema", description: "Você instala o InFlow no seu servidor próprio. Sem dependência de plataformas gringas." },
  { day: "DIAS 2–3", title: "Primeira Recuperação Rodando", description: "Suas primeiras mensagens de carrinho abandonado começam a recuperar vendas reais." },
  { day: "DIAS 4–5", title: "IA + Atendimento 24h", description: "Conexão com ChatGPT/DeepSeek e WhatsApp/Instagram. O sistema começa a trabalhar sozinho." },
  { day: "DIAS 6–7", title: "Escala Vertical", description: "Você conecta múltiplas plataformas, centraliza dados e começa a escalar com controle total." },
];

const pricingItems = [
  { title: "Sistema Completo de Recuperação", description: "Carrinhos, pagamentos, boletos, assinaturas.", price: "R$ 297" },
  { title: "Agente de IA para WhatsApp/Instagram", description: "Atendimento 24/7 que vende sozinho.", price: "R$ 397" },
  { title: "Painel Web de Controle", description: "Configure tudo visualmente, sem código.", price: "R$ 147" },
  { title: "Centralização de Plataformas", description: "Hotmart, Kiwify, Braip, Ticto unificados.", price: "R$ 197" },
  { title: "Vídeo Aulas Completas", description: "Setup passo a passo de VPS, N8N e fluxos.", price: "R$ 247" },
  { title: "Suporte Prioritário", description: "Comunidade exclusiva para dúvidas.", price: "R$ 97" },
];

const faqs = [
  { q: "Preciso pagar mensalidade?", a: "Não! Você paga uma única vez e os fluxos são seus para sempre. Sem custos recorrentes, sem surpresas." },
  { q: "Preciso entender de programação ou automação?", a: "Não! Tudo é configurado pelo painel web de forma visual. Você ainda recebe vídeo aulas ensinando passo a passo." },
  { q: "Funciona com qual plataforma de vendas?", a: "Funciona com Hotmart, Kiwify, Braip, Ticto e outras principais plataformas de infoprodutos do mercado." },
  { q: "Onde fica hospedado?", a: "No seu próprio servidor VPS. Você tem controle total e privacidade dos seus dados. Ensinamos como configurar tudo." },
  { q: "Quanto custa o servidor?", a: "A partir de R$25/mês em servidores confiáveis. Muito menos do que pagar múltiplas ferramentas de automação que custam R$300-500/mês." },
  { q: "Consigo customizar as mensagens?", a: "Sim! Tudo é personalizável pelo painel web. Você define o tom, o conteúdo e quando cada automação é acionada." },
  { q: "A IA realmente vende?", a: "Sim! O agente de IA é treinado para conhecer seus produtos, responder dúvidas, contornar objeções e fechar vendas. Tudo de forma natural e contextualizada." },
  { q: "Qual a diferença entre API oficial e não-oficial?", a: "A API oficial tem mais estabilidade mas pode ter limitações. A não-oficial é mais flexível. Você recebe ambas e escolhe qual usar." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto">
          {/* Top offer badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Oferta • Preço Dobra 14 de Janeiro</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-2xl text-muted-foreground line-through">R$67</span>
              <span className="text-5xl font-bold font-display text-gradient-primary">R$47</span>
            </div>
            
            <CTAButton variant="primary" size="lg" className="mt-4">
              Entrar
            </CTAButton>
          </motion.div>

          {/* Social proof bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10"
          >
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              MAIS DE 500 INFOPRODUTORES RECUPERANDO VENDAS
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">SISTEMA VALIDADO PARA 2026</span>
          </motion.div>

          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foreground mb-4 leading-tight">
              InFlow - Recuperação<br />
              <span className="text-gradient-primary">Automática de Vendas</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display text-foreground/90 mb-6">
              Pare de Perder <span className="text-accent">40%</span> Das Suas Vendas<br />
              e Recupere Automaticamente Cada Real Deixado na Mesa
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Carrinhos abandonados, pagamentos recusados e clientes sem resposta. Seu dinheiro está sangrando. Sem depender de mensalidades caras e sem precisar ser programador.
            </p>

            {/* Avatars + stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {['J', 'M', 'P', 'A', 'L'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground border-2 border-background"
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">500+ infoprodutores</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>

            {/* Featured testimonial */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-card border border-border rounded-xl p-6 max-w-xl mx-auto mb-8 shadow-card"
            >
              <p className="text-foreground italic mb-4">
                "Recuperei R$ 8.450 em vendas perdidas no primeiro mês. O InFlow pagou por si mesmo em 3 dias."
              </p>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Verificado</span>
                <span className="font-semibold text-foreground">João Silva</span>
              </div>
            </motion.div>

            <CTAButton variant="primary" size="xl">
              Quero Começar Agora
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              O Que Estão Dizendo Sobre o Sistema?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.slice(0, 9).map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-primary font-medium mb-6">
              🎯 Do carrinho abandonado até o cliente recuperado - sistema completíssimo
            </p>
            <CTAButton variant="primary" size="lg">
              Quero Recuperar Minhas Vendas
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Automações Reais Que Recuperam Dinheiro
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Do zero ao seu primeiro sistema de recuperação — sem pagar mensalidades absurdas e sem dor de cabeça técnica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>

          {/* Bonus features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold font-display text-foreground text-center mb-8">
              MÓDULOS BÔNUS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bonusFeatures.map((feature, i) => (
                <FeatureCard key={i} {...feature} badge="BÔNUS" badgeVariant="bonus" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              O Que Acontece Quando Você Entra
            </h2>
            <p className="text-lg text-muted-foreground">
              Um passo a passo real da sua jornada no InFlow:
            </p>
          </motion.div>

          <div className="space-y-2">
            {timeline.map((step, i) => (
              <TimelineStep
                key={i}
                {...step}
                index={i}
                isLast={i === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Creator Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 shadow-card"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-5xl font-bold text-primary-foreground flex-shrink-0">
                🚀
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
                  Quem Criou o InFlow?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prazer, sou o criador do InFlow. Desenvolvi um método para recuperar vendas perdidas usando automação inteligente, fugindo das mensalidades caras que sangram o lucro.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Hoje tenho mais de <span className="text-primary font-semibold">500 infoprodutores</span> recuperando dinheiro deixado na mesa todos os dias.
                </p>
                <p className="text-foreground font-medium">
                  Minha missão: te dar o controle do seu negócio que as big techs não querem que você tenha.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-medium text-muted-foreground">(Economia de R$ 1.200+)</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mt-2">
              O Que Você Leva Hoje
            </h2>
          </motion.div>

          <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-8 shadow-card mb-8">
            {pricingItems.map((item, i) => (
              <PricingItem key={i} {...item} index={i} />
            ))}
            
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-muted-foreground mb-2">Valor Total Real:</p>
              <p className="text-3xl font-bold font-display text-foreground line-through decoration-destructive">
                R$ 1.382
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Mas hoje, nessa oferta de lançamento, você NÃO vai pagar isso.
              </p>
            </div>
          </div>

          <div className="text-center">
            <CTAButton variant="secondary" size="lg">
              VER VALOR PROMOCIONAL
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-20 px-4" id="pricing">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-2">
              Garanta o Sistema Completo
            </h2>
            <p className="text-xl text-gradient-accent font-display font-semibold">
              Pelo Menor Valor da História
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="px-4 py-2 bg-gradient-accent text-accent-foreground text-sm font-bold rounded-full flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Oferta Relâmpago
              </span>
            </div>

            <div className="bg-gradient-card border-2 border-primary rounded-2xl p-8 shadow-glow">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold font-display text-foreground">InFlow Completo</h3>
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="text-xs font-medium text-accent">MAIS VENDIDO</span>
                </div>
                
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-muted-foreground line-through">R$ 67</span>
                  <span className="text-5xl font-bold font-display text-gradient-primary">R$47</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">ou 12x de R$ 4,87</p>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Todos os fluxos de automação completos",
                  "Recuperação de vendas perdidas",
                  "Agente de IA para WhatsApp e Instagram",
                  "Painel web de configuração",
                  "Centralização de plataformas",
                  "Vídeo aulas passo a passo",
                  "Análise de dados e métricas",
                  "Suporte prioritário",
                  "Acesso Vitalício + Atualizações",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-3">O desconto encerra em:</p>
                <CountdownTimer />
              </div>

              <CTAButton variant="primary" size="xl" className="w-full mb-4">
                GARANTIR MINHA VAGA
              </CTAButton>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span>Pagamento Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Acesso Vitalício</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>7 Dias de Garantia</span>
                </div>
              </div>

              <p className="text-center text-sm text-primary font-medium">
                127 pessoas entraram hoje.
              </p>
              
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>💳 Pagamento 100% Seguro via Kiwify</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-primary/30 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold font-display text-foreground mb-4">Para Quem É</h3>
              <ul className="space-y-3">
                {[
                  "Quer recuperar vendas perdidas automaticamente.",
                  "Quer parar de pagar mensalidades caras em ferramentas.",
                  "Está disposto a instalar uma vez e colher resultados para sempre.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-destructive/30 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold font-display text-foreground mb-4">Para Quem NÃO É</h3>
              <ul className="space-y-3">
                {[
                  'Busca "dinheiro fácil" sem implementar nada.',
                  "Acha que automação funciona sem configurar.",
                  "Quer tudo de graça sem investir em servidor básico (R$25/mês).",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-destructive font-bold">✕</span>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-card"
          >
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
              Garantia Blindada de 7 Dias
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              🛡️ Teste o InFlow por 7 dias. Se não recuperar pelo menos o valor investido em vendas perdidas, devolvemos <span className="text-primary font-semibold">100% do seu dinheiro</span>. Simples assim.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <h4 className="font-semibold text-foreground">Acesso Vitalício</h4>
                <p className="text-sm text-muted-foreground">O sistema é seu para sempre.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-6">
              Pare de Perder Vendas<br />
              <span className="text-gradient-primary">Agora Mesmo</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Cada dia que passa, você está deixando dinheiro na mesa. Carrinhos abandonados, pagamentos recusados, clientes sem resposta.
            </p>
            <p className="text-xl text-foreground font-semibold mb-8">
              O InFlow resolve isso hoje. <span className="text-primary">Pagamento único. Seu para sempre.</span>
            </p>
            <CTAButton variant="primary" size="xl">
              QUERO RECUPERAR MINHAS VENDAS
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 InFlow. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

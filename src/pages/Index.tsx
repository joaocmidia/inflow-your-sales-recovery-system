import { motion } from 'framer-motion';
import { Zap, Shield, Star, CheckCircle, Users, ChevronDown, CreditCard, Lock, Clock, DollarSign, Bot, Target, BarChart3, MessageSquare, Wrench, ShieldCheck, GraduationCap, Settings, Rocket, X } from 'lucide-react';
import { CountdownTimer } from '@/components/CountdownTimer';
import { FeatureCard } from '@/components/FeatureCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { PricingItem } from '@/components/PricingItem';
import { TimelineStep } from '@/components/TimelineStep';
import { CTAButton } from '@/components/CTAButton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useState, useEffect, useMemo } from 'react';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import dashboardPreview from '@/assets/dashboard-preview.png';
const testimonials = [{
  content: "Recuperei R$ 8.450 em vendas perdidas no primeiro mês. O InFlow pagou por si mesmo em 3 dias.",
  author: "João Silva",
  role: "Infoprodutor"
}, {
  content: "Antes eu perdia 30% das vendas com carrinho abandonado. Agora recupero quase tudo automaticamente.",
  author: "Maria Santos",
  role: "Criadora de Curso"
}, {
  content: "A IA responde meus clientes 24h. Acordo com vendas feitas enquanto dormia.",
  author: "Pedro Costa",
  role: "Mentor Digital"
}, {
  content: "Instalei em 2 horas e já comecei a ver resultados. Muito mais simples do que imaginei.",
  author: "Ana Oliveira",
  role: "Infoprodutora"
}, {
  content: "Finalmente um sistema que não cobra mensalidade absurda. Paguei uma vez e pronto.",
  author: "Lucas Ferreira",
  role: "Afiliado"
}, {
  content: "O suporte é incrível. Sempre que tive dúvida, recebi resposta rápida.",
  author: "Carla Mendes",
  role: "Coach"
}, {
  content: "Centralizar todas as plataformas num lugar só foi game changer pro meu negócio.",
  author: "Ricardo Lima",
  role: "Produtor Digital"
}, {
  content: "A automação de comentários do Instagram triplicou minhas conversões.",
  author: "Juliana Rocha",
  role: "Social Media"
}, {
  content: "Recuperei o valor investido em menos de uma semana. ROI absurdo.",
  author: "Fernando Alves",
  role: "Empresário Digital"
}, {
  content: "Melhor investimento que fiz pro meu negócio digital esse ano.",
  author: "Patricia Nunes",
  role: "Infoprodutora"
}];
const features = [{
  icon: <DollarSign className="w-10 h-10 text-primary" />,
  title: "Recuperação Automática de Vendas",
  description: "Mensagens personalizadas para carrinho abandonado, pagamento recusado, pix/boleto gerado, compra aprovada, reembolso, assinaturas.",
  badge: "Dinheiro no Bolso"
}, {
  icon: <Bot className="w-10 h-10 text-accent" />,
  title: "Agente de IA que Vende",
  description: "Responde Instagram e WhatsApp instantaneamente, tira dúvidas, vende produtos e faz follow-up 24/7.",
  badge: "Essencial",
  badgeVariant: "accent" as const
}, {
  icon: <Target className="w-10 h-10 text-primary" />,
  title: "Experiência Personalizada",
  description: "Mensagens personalizadas para onboarding, reembolso, chargeback visando melhor experiência. Cada cliente se sente único.",
  badge: "Alta Conversão"
}, {
  icon: <BarChart3 className="w-10 h-10 text-primary" />,
  title: "Controle Total do Negócio",
  description: "Visualize os principais indicadores de todas as plataformas em um único painel.",
  badge: "Painel Unificado"
}, {
  icon: <MessageSquare className="w-10 h-10 text-primary" />,
  title: "Automação de Comentários",
  description: "Palavra-chave nos comentários ativa resposta automática e envia DM personalizada.",
  badge: "Pronto para vender"
}, {
  icon: <Wrench className="w-10 h-10 text-primary" />,
  title: "Painel Web de Controle",
  description: "Configure tudo pelo navegador, sem precisar mexer em código ou automação.",
  badge: "Zero Programação"
}];
const bonusFeatures = [
// { icon: <ShieldCheck className="w-10 h-10 text-primary" />, title: "APIs Oficiais e Não-Oficiais", description: "Você escolhe qual usar baseado nas suas necessidades. Flexibilidade total." },
{
  icon: <GraduationCap className="w-10 h-10 text-primary" />,
  title: "Vídeo Aulas Completas",
  description: "Instalação e configuração VPS, N8N e setup completo dos fluxos."
}, {
  icon: <Settings className="w-10 h-10 text-primary" />,
  title: "Instalação Única",
  description: "Instala uma vez no seu servidor e funciona para sempre. Sem mensalidades."
}, {
  icon: <MessageSquare className="w-10 h-10 text-primary" />,
  title: "Suporte Prioritário",
  description: "Eu não te deixo travar. Tire dúvidas direto comigo e com a equipe na comunidade."
}];
const timeline = [{
  day: "DIA 1",
  title: "Setup do Sistema",
  description: "Você instala o InFlow no seu servidor próprio. Sem dependência de plataformas gringas."
}, {
  day: "DIA 2",
  title: "Primeira Recuperação Rodando",
  description: "Suas primeiras mensagens de carrinho abandonado começam a recuperar vendas reais."
}, {
  day: "DIA 3",
  title: "IA + Atendimento 24h",
  description: "Conexão com Agente de IA no WhatsApp e Instagram. O sistema começa a trabalhar sozinho."
}, {
  day: "DIA 4",
  title: "Escala Vertical",
  description: "Você conecta múltiplas plataformas, centraliza dados e começa a escalar com controle total."
}];
const pricingItems = [{
  title: "Sistema Completo de Recuperação",
  description: "Carrinho abandonado, pix/boleto gerado, falha de pagamento, assinaturas, onboarding e offboarding.",
  price: "R$ 497"
}, {
  title: "Agente de IA para WhatsApp/Instagram",
  description: "Atendimento 24/7 que vende sozinho.",
  price: "R$ 497"
}, {
  title: "Painel Web de Controle",
  description: "Configure tudo visualmente, sem código.",
  price: "R$ 247"
}, {
  title: "Centralização de Plataformas",
  description: "Kiwify, Lastlink e todas as outras unificadas.",
  price: "R$ 197"
}, {
  title: "Vídeo Aulas Completas",
  description: "Setup passo a passo de VPS, N8N e fluxos.",
  price: "R$ 147"
}, {
  title: "Suporte Prioritário",
  description: "Comunidade exclusiva para dúvidas.",
  price: "R$ 97"
}];
const faqs = [{
  q: "Preciso pagar mensalidade?",
  a: "Do sistema não, você paga uma única vez pelo sistema e os fluxos são seus para sempre. O único custo recorrente é para manter o seu servidor no ar."
}, {
  q: "Preciso entender de programação ou automação?",
  a: "Não! Tudo é configurado pelo painel web de forma visual. Você ainda recebe vídeo aulas ensinando passo a passo."
}, {
  q: "Funciona com qual plataforma de vendas?",
  a: "Funciona com Kiwify e Lastlink, em alguns dias outras plataformas já serão incluídas. Caso queira solicitar a inclusão de uma plataforma, fale conosco."
}, {
  q: "Onde fica hospedado?",
  a: "No seu próprio servidor VPS. Você tem controle total e privacidade dos seus dados. Ensinamos como configurar tudo."
}, {
  q: "Quanto custa o servidor?",
  a: "A partir de R$27,99/mês em servidores confiáveis. Muito menos do que pagar múltiplas ferramentas de automação que custam R$300-500/mês."
}, {
  q: "Consigo customizar as mensagens?",
  a: "Sim! Tudo é personalizável pelo painel web."
}, {
  q: "Qual a diferença entre API oficial e não-oficial?",
  a: "A API oficial tem mais estabilidade mas pode ter limitações. A não-oficial é mais flexível. Você recebe ambas e escolhe qual usar."
}];
const Index = () => {
  const [joinCount, setJoinCount] = useState(0);
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);
  const tomorrowFormatted = useMemo(() => {
    return `${tomorrow.getDate().toString().padStart(2, '0')}/${(tomorrow.getMonth() + 1).toString().padStart(2, '0')}`;
  }, [tomorrow]);
  useEffect(() => {
    const calculateJoinCount = () => {
      const now = new Date();
      const minutesToday = now.getHours() * 60 + now.getMinutes();

      // Daily seed for stable but different randomness each day
      const daySeed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
      const pseudoRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
      };
      const dailyOffset = Math.floor(pseudoRandom(daySeed) * 20) - 10; // -10 to +10

      let baseCount = 0;
      if (minutesToday < 480) {
        // 00h - 08h
        baseCount = minutesToday / 480 * 50;
      } else if (minutesToday < 1200) {
        // 08h - 20h
        baseCount = 50 + (minutesToday - 480) / 720 * 50;
      } else {
        // 20h - 24h
        baseCount = 100 + (minutesToday - 1200) / 240 * 50;
      }
      setJoinCount(Math.max(1, Math.floor(baseCount + dailyOffset)));
    };
    calculateJoinCount();
    const interval = setInterval(calculateJoinCount, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);
  return <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top Banner Offer */}
      <div className="bg-background/80 border-b border-primary/20 py-2 px-4 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Left Side: Offer Text */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Oferta • Preço Dobra em {tomorrowFormatted}</span>
          </div>

          {/* Right Side: Price + Button */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">R$97</span>
              <span className="text-xl font-bold text-primary">R$47</span>
            </div>
            <CTAButton href="#pricing" variant="primary" size="sm" className="hidden sm:inline-flex h-8 px-6 text-xs font-bold uppercase tracking-widest">
              Entrar Agora
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-md border-t border-primary/20 sm:hidden">
        <CTAButton href="#pricing" variant="primary" size="lg" className="w-full text-sm font-bold uppercase tracking-widest shadow-glow">
          Entrar Agora
        </CTAButton>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">

          {/* Social proof bar */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">Automações Inteligentes para Infoprodutores</span>
          </motion.div>

          {/* Main headline */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold font-display text-foreground mb-4 leading-tight lg:text-5xl">Turbine as vendas e a experiência do seu cliente com as Automações InFlow
            <br />
              
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display text-foreground/90 mb-6">
              Pare de Perder <span className="text-accent">40%</span> Das Suas Vendas<br />
              e Recupere Automaticamente Cada Real Deixado na Mesa
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Carrinhos abandonados, faturas geradas, pagamentos recusados e clientes sem resposta. Seu dinheiro está sangrando. Sem depender de mensalidades caras e sem precisar ser programador.
            </p>

            {/* Avatars + stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {['J', 'M', 'P', 'A', 'L'].map((letter, i) => <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground border-2 border-background">
                    {letter}
                  </div>)}
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">234+ infoprodutores</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
              </div>
            </div>

            {/* Featured testimonial */}
            

            <CTAButton href="#pricing" variant="primary" size="xl">
              Quero Começar Agora
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Automações Reais Que Recuperam Dinheiro
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Do zero ao seu primeiro sistema de recuperação, sem pagar mensalidades absurdas e sem dor de cabeça técnica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 justify-center">
            {features.map((feature, i) => <FeatureCard key={i} {...feature} />)}
          </div>

          {/* Bonus features */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mt-16">
            <h3 className="text-2xl font-bold font-display text-foreground text-center mb-8">
              BÔNUS INCLUSOS
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {bonusFeatures.map((feature, i) => <div key={i} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                  <FeatureCard {...feature} badge="BÔNUS" badgeVariant="bonus" />
                </div>)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              Painel Web de Controle Completo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visualize todas as métricas do seu negócio em tempo real. Faturamento, vendas, ticket médio e performance diária em um único lugar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl -z-10 scale-95" />
            
            {/* Dashboard image with border and shadow */}
            <div className="rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10">
              <img
                src={dashboardPreview}
                alt="Painel de controle InFlow mostrando métricas de vendas, performance diária e top produtos"
                className="w-full h-auto"
              />
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Métricas em Tempo Real</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
                <Target className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">Performance Diária</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Ranking de Produtos</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              O Que Estão Dizendo Sobre o InFlow?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.slice(0, 9).map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-primary font-medium mb-6">
              <Target className="w-5 h-5" />
              <span>Do carrinho abandonado até o cliente recuperado, sistema completo!</span>
            </div>
            <CTAButton href="#pricing" variant="primary" size="lg">
              Quero Recuperar Minhas Vendas
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-4">
              O Que Acontece Quando Você Entra
            </h2>
            <p className="text-lg text-muted-foreground">
              Um passo a passo real da sua jornada no InFlow:
            </p>
          </motion.div>

          <div className="space-y-2">
            {timeline.map((step, i) => <TimelineStep key={i} {...step} index={i} isLast={i === timeline.length - 1} />)}
          </div>
        </div>
      </section>

      {/* About Creator Section 
       <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-border rounded-2xl p-8 md:p-12 shadow-card"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground flex-shrink-0">
                <Rocket className="w-16 h-16" />
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
       </section>*/}

      {/* Value Stack Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <span className="text-sm font-medium text-muted-foreground">(Economia de +R$ 1.600)</span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mt-2">
              O Que Você Leva Hoje
            </h2>
          </motion.div>

          <div className="bg-gradient-card border border-border rounded-2xl p-6 md:p-8 shadow-card mb-8">
            {pricingItems.map((item, i) => <PricingItem key={i} {...item} index={i} />)}

            <div className="mt-6 pt-6 border-border text-center">
              <p className="text-muted-foreground mb-2">Valor Total Real:</p>
              <p className="text-3xl font-bold font-display text-foreground line-through decoration-destructive">
                R$ 1.682
              </p>
              <p className="text-lg text-muted-foreground mt-4">
                Mas hoje, nessa oferta de lançamento, você NÃO vai pagar isso.
              </p>
            </div>
          </div>

          {/*<div className="text-center">
            <CTAButton variant="secondary" size="lg">
              VER VALOR PROMOCIONAL
            </CTAButton>
           </div>*/}
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-20 px-4" id="pricing">
        <div className="max-w-lg mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground mb-2">
              Garanta o Sistema Completo
            </h2>
            <p className="text-xl text-gradient-accent font-display font-semibold">
              Pelo Menor Valor da História
            </p>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="relative">
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
                  {/*<Star className="w-5 h-5 fill-accent text-accent" />
                   <span className="text-xs font-medium text-accent">MAIS VENDIDO</span>*/}
                </div>

                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl text-muted-foreground line-through">R$ 97</span>
                  <span className="text-5xl font-bold font-display text-gradient-primary">R$47</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">ou 9x de R$ 3,62</p>
              </div>

              <div className="space-y-3 mb-6">
                {["Todos os fluxos de automação completos", "Recuperação de vendas perdidas", "Agente de IA para WhatsApp e Instagram", "Painel web de configuração", "Centralização de plataformas", "Vídeo aulas passo a passo", "Análise de dados e métricas", "Suporte via Grupo no Whatsapp", "Acesso Vitalício + Atualizações"].map((item, i) => <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>)}
              </div>

              {/*<div className="text-center mb-6">
                <p className="text-sm text-muted-foreground mb-3">O desconto encerra em:</p>
                <CountdownTimer />
               </div>*/}

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

              <div className="flex flex-col items-center gap-2 mb-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider">Oferta • Preço Dobra em {tomorrowFormatted}</span>
                </div>
                <p className="text-center text-sm text-primary font-medium">
                  {joinCount} pessoas entraram hoje.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span>Pagamento 100% Seguro via Lastlink</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-4 bg-gradient-dark">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-gradient-card border border-primary/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold font-display text-foreground mb-4">Para Quem É</h3>
              <ul className="space-y-3">
                {["Quer recuperar vendas perdidas automaticamente.", "Quer parar de pagar mensalidades caras em ferramentas.", "Está disposto a instalar uma vez e colher resultados para sempre."].map((item, i) => <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-gradient-card border border-destructive/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold font-display text-foreground mb-4">Para Quem NÃO É</h3>
              <ul className="space-y-3">
                {['Busca "dinheiro fácil" sem implementar nada.', "Acha que automação funciona sem configurar.", "Quer tudo de graça sem investir em servidor básico (R$28/mês)."].map((item, i) => <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-card border border-primary/30 rounded-2xl p-8 md:p-12 text-center shadow-card">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground mb-4">
              Garantia Blindada de 15 Dias
            </h2>
            <p className="text-lg text-muted-foreground mb-6 flex items-start sm:items-center justify-center gap-2">
              <span>Teste o InFlow por 15 dias. Se não gostar do sistema, devolvemos 100% do seu dinheiro.</span>
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
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foreground">
              Perguntas Frequentes
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="bg-gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section 
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
            <CTAButton href="#pricing" variant="primary" size="xl">
              QUERO RECUPERAR MINHAS VENDAS
            </CTAButton>
          </motion.div>
        </div>
       </section>*/}

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2026 InFlow – Automação Inteligente para Infoprodutores. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>;
};
export default Index;
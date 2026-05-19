import {
  Phone,
  Mail,
  MapPin,
  Stethoscope,
  Milk,
  Wheat,
  HeartPulse,
  BarChart3,
  GraduationCap,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Menu,
  ArrowRight,
  Sparkles,
  Quote,
  ClipboardCheck,
  Users,
  BadgeCheck,
} from "lucide-react";

const WHATSAPP_NUMBER = "5534998096163";
const WHATSAPP_TEXT =
  "Olá, Tamires! Vim pelo site da Solução Veterinária e gostaria de solicitar informações sobre consultoria.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_TEXT
)}`;

const images = {
  hero: "/images/hero-pasto.jpeg",
  cocho: "/images/vacas-cocho.jpeg",
  curral: "/images/curral-manejo.jpeg",
  familia: "/images/familia-fazenda.jpeg",
  vacaPB: "/images/vaca-pretoebranco.jpeg",
  bezerroPB: "/images/bezerro-pretoebranco.jpeg",
  manejo: "/images/manejo-curral.jpeg",
  paisagem: "/images/fazenda-paisagem.jpeg",
};

const services = [
  {
    icon: Stethoscope,
    title: "Consultoria Veterinária",
    text: "Assistência técnica em propriedades leiteiras, manejo sanitário, organização de rotina e acompanhamento prático no campo.",
  },
  {
    icon: Milk,
    title: "Qualidade do Leite",
    text: "Controle de CCS, CBT, mastite, higiene de ordenha, resfriamento, coleta de amostras e adequação técnica às IN 76 e 77.",
  },
  {
    icon: Wheat,
    title: "Nutrição de Ruminantes",
    text: "Avaliação de dieta, volumosos, silagem, suplementação, manejo alimentar e estratégias para melhorar eficiência produtiva.",
  },
  {
    icon: HeartPulse,
    title: "Reprodução Bovina",
    text: "Acompanhamento reprodutivo, organização de indicadores, manejo de matrizes e suporte técnico à tomada de decisão.",
  },
  {
    icon: BarChart3,
    title: "Gestão Rural",
    text: "Relatórios técnicos, análise de indicadores, planejamento produtivo e visão econômica aplicada à rotina da fazenda.",
  },
  {
    icon: GraduationCap,
    title: "Cursos e Capacitações",
    text: "Treinamentos para produtores, vaqueiros, equipes de ordenha, estudantes e programas de capacitação rural.",
  },
];

const courseItems = [
  "Treinamento de vaqueiros",
  "Manejo de ordenha",
  "Qualidade do leite",
  "Controle de mastite",
  "Forragicultura",
  "Nutrição de ruminantes",
  "Silagem e volumosos",
  "Boas práticas na fazenda",
];

const blog = [
  {
    title: "Como reduzir a CCS no leite",
    text: "Medidas práticas para identificar falhas de manejo, mastite subclínica e pontos críticos na ordenha.",
    img: images.vacaPB,
  },
  {
    title: "Silagem de qualidade",
    text: "A importância do ponto de corte, compactação, vedação e manejo de cocho para vacas leiteiras.",
    img: images.paisagem,
  },
  {
    title: "Manejo correto da ordenha",
    text: "Rotina, higiene, pré e pós-dipping, equipamentos e treinamento de equipe para reduzir perdas.",
    img: images.curral,
  },
];

function Button({ children, href, variant = "primary" }) {
  const styles = {
    primary:
      "bg-amber-400 text-emerald-950 hover:bg-amber-300 shadow-lg shadow-black/20",
    secondary:
      "border border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur",
    dark: "bg-emerald-950 text-white hover:bg-emerald-900 shadow-lg",
    light:
      "bg-white text-emerald-950 hover:bg-stone-100 shadow-lg shadow-black/10",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-black uppercase tracking-[0.28em] text-amber-600">
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-black leading-tight md:text-5xl ${
          light ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-lg leading-8 ${
            light ? "text-stone-200" : "text-stone-700"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-emerald-950/85 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="flex items-center gap-3">
  <img
    src="/images/logo.jpeg"
    alt="Logo Solução Veterinária"
    className="h-14 w-auto object-contain"
  />

  <div>
    <p className="text-base font-black leading-none">
      Solução Veterinária
    </p>

    <p className="mt-1 text-xs text-stone-300">
      Consultoria Veterinária LTDA
    </p>
  </div>
</a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-stone-200 md:flex">
            <a href="#sobre" className="hover:text-amber-300">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-amber-300">
              Serviços
            </a>
            <a href="#cursos" className="hover:text-amber-300">
              Cursos
            </a>
            <a href="#conteudo" className="hover:text-amber-300">
              Conteúdo
            </a>
            <a href="#contato" className="hover:text-amber-300">
              Contato
            </a>
          </nav>

          <div className="hidden md:block">
            <Button href={WHATSAPP_LINK}>Falar no WhatsApp</Button>
          </div>

          <Menu className="md:hidden" />
        </div>
      </header>

      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden pt-24 text-white"
      >
        <img
          src={images.hero}
          alt="Vacas em pastagem verde"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/75 to-black/20" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-28">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              <Sparkles size={16} className="text-amber-300" />
              Ciência, manejo e resultado para transformar o agro
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Soluções inteligentes para transformar a pecuária leiteira
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-stone-100">
              Consultoria veterinária, gestão técnica, nutrição de ruminantes e
              qualidade do leite com ciência aplicada ao campo.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href={WHATSAPP_LINK}>
                Solicitar consultoria <ArrowRight size={18} />
              </Button>
              <Button href="#servicos" variant="secondary">
                Conhecer serviços
              </Button>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {["Qualidade do leite", "Nutrição", "Gestão", "Capacitação"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center text-sm font-bold backdrop-blur"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <BadgeCheck className="mb-4 text-amber-300" />
            <h3 className="font-black">Responsável Técnica</h3>
            <p className="mt-2 text-stone-300">Tamires Soares de Assis</p>
            <p className="text-stone-300">CRMV-MG 14229</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <MapPin className="mb-4 text-amber-300" />
            <h3 className="font-black">Região de atendimento</h3>
            <p className="mt-2 text-stone-300">
              Patrocínio, Triângulo Mineiro e Alto Paranaíba
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <Phone className="mb-4 text-amber-300" />
            <h3 className="font-black">Atendimento direto</h3>
            <p className="mt-2 text-stone-300">WhatsApp: (34) 9 9809-6163</p>
            <p className="text-stone-300">tamires.manejo@gmail.com</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-amber-700">
              Quem somos
            </p>
            <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
              Consultoria veterinária com olhar técnico, humano e estratégico
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-700">
              A Solução Veterinária LTDA nasceu com o propósito de levar
              assistência técnica de verdade ao produtor rural, unindo ciência,
              prática e proximidade no campo.
            </p>
            <p className="mt-4 text-lg leading-8 text-stone-700">
              Atuamos principalmente na pecuária leiteira, oferecendo soluções
              voltadas à qualidade do leite, nutrição de ruminantes, reprodução,
              gestão rural e capacitação de equipes.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Ciência aplicada ao campo",
                "Atendimento humanizado",
                "Experiência prática em fazendas",
                "Gestão técnica especializada",
                "Capacitação de equipes",
                "Mulheres transformando o agro",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="text-emerald-800" size={20} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={images.familia}
              alt="Família na fazenda"
              className="h-[560px] w-full rounded-[2.2rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-7 left-5 right-5 rounded-[2rem] bg-amber-400 p-6 text-emerald-950 shadow-xl md:-left-7 md:right-auto md:max-w-xs">
              <p className="text-3xl font-black">Campo real</p>
              <p className="mt-2 text-sm font-bold">
                Assistência próxima da rotina do produtor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Serviços"
            title="Soluções completas para propriedades leiteiras"
            text="Cada serviço é pensado para gerar resultado técnico, produtivo e econômico, respeitando a realidade da fazenda."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-950 text-amber-400">
                  <service.icon size={26} />
                </div>
                <h3 className="text-xl font-black text-stone-950">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-stone-700">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-28 text-white">
        <img
          src={images.vacaPB}
          alt="Vaca em preto e branco"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-emerald-950/85" />

        <div className="relative mx-auto max-w-5xl px-5 text-center">
          <Leaf className="mx-auto mb-6 text-amber-300" size={46} />
          <h2 className="text-4xl font-black md:text-6xl">
            Mulheres que transformam o agro
          </h2>
          <p className="mx-auto mt-7 max-w-3xl text-xl leading-9 text-stone-100">
            A Solução Veterinária representa a força feminina no campo, levando
            conhecimento, gestão, tecnologia e cuidado para transformar
            propriedades rurais e fortalecer o agronegócio brasileiro.
          </p>
        </div>
      </section>

      <section id="cursos" className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.cocho}
              alt="Vacas no cocho"
              className="h-72 rounded-[2rem] object-cover shadow-lg"
            />
            <img
              src={images.manejo}
              alt="Manejo em curral"
              className="mt-12 h-72 rounded-[2rem] object-cover shadow-lg"
            />
            <img
              src={images.curral}
              alt="Curral"
              className="col-span-2 h-72 w-full rounded-[2rem] object-cover shadow-lg"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-amber-700">
              Cursos e treinamentos
            </p>
            <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
              Capacitação prática para quem vive o campo
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Treinamentos presenciais e itinerantes para produtores,
              vaqueiros, equipes de ordenha e estudantes, com foco em aplicação
              imediata na propriedade.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {courseItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-800" size={20} />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Button href={WHATSAPP_LINK} variant="dark">
                Solicitar treinamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Depoimentos"
            title="Confiança construída no campo"
            text="Exemplos de relatos que representam a proposta da Solução Veterinária."
            light
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              "A orientação técnica trouxe mais clareza para a rotina de ordenha e para o controle da qualidade do leite.",
              "O atendimento é próximo, prático e fala a linguagem do produtor, sem perder a base técnica.",
              "A capacitação da equipe ajudou a organizar processos e melhorar o cuidado com os animais.",
            ].map((text, i) => (
              <div
                key={i}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
              >
                <Quote className="mb-5 text-amber-300" />
                <p className="leading-8 text-stone-200">{text}</p>
                <p className="mt-6 font-black text-white">
                  Produtor rural atendido
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudo" className="bg-stone-100 py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow="Blog técnico"
            title="Conteúdo para melhorar a rotina da fazenda"
            text="Espaço preparado para artigos, orientações e materiais educativos."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {blog.map((post) => (
              <article
                key={post.title}
                className="overflow-hidden rounded-[2rem] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-700">
                    Artigo técnico
                  </p>
                  <h3 className="mt-3 text-xl font-black">{post.title}</h3>
                  <p className="mt-3 leading-7 text-stone-700">{post.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-amber-700">
              Contato
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Vamos transformar sua propriedade?
            </h2>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Fale com a Solução Veterinária e solicite uma consultoria,
              treinamento ou proposta técnica personalizada.
            </p>

            <div className="mt-8 space-y-5 text-stone-800">
              <p className="flex items-center gap-3">
                <Phone className="text-emerald-800" />
                WhatsApp: (34) 9 9809-6163
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-emerald-800" />
                tamires.manejo@gmail.com
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="mt-1 text-emerald-800" />
                Patrocínio, Mesorregião do Triângulo Mineiro e Alto Paranaíba
              </p>
              <p className="flex items-center gap-3">
                <ClipboardCheck className="text-emerald-800" />
                Responsável Técnica: Tamires Soares de Assis — CRMV-MG 14229
              </p>
            </div>

            <div className="mt-9">
              <Button href={WHATSAPP_LINK} variant="dark">
                Chamar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-xl">
            <h3 className="text-2xl font-black">Solicite atendimento</h3>
            <p className="mt-3 text-stone-600">
              Clique no botão abaixo para iniciar a conversa pelo WhatsApp com
              uma mensagem pronta.
            </p>

            <div className="mt-8 rounded-[2rem] bg-stone-100 p-6">
              <p className="font-black text-emerald-950">
                Mensagem automática:
              </p>
              <p className="mt-3 leading-7 text-stone-700">
                “Olá, Tamires! Vim pelo site da Solução Veterinária e gostaria
                de solicitar informações sobre consultoria.”
              </p>
            </div>

            <div className="mt-8">
              <Button href={WHATSAPP_LINK} variant="dark">
                Enviar pelo WhatsApp <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-stone-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <p className="text-2xl font-black">Solução Veterinária</p>
            <p className="mt-3 text-stone-400">
              Ciência, manejo e resultado para transformar o agro.
            </p>
          </div>

          <div>
            <p className="font-black">Empresa</p>
            <p className="mt-3 text-stone-400">Solução Veterinária LTDA</p>
            <p className="text-stone-400">
              Responsável Técnica: Tamires Soares de Assis
            </p>
            <p className="text-stone-400">CRMV-MG 14229</p>
          </div>

          <div>
            <p className="font-black">Contato</p>
            <p className="mt-3 text-stone-400">(34) 9 9809-6163</p>
            <p className="text-stone-400">tamires.manejo@gmail.com</p>
            <p className="text-stone-400">
              Patrocínio | Triângulo Mineiro | Alto Paranaíba
            </p>
          </div>
        </div>
      </footer>

      <a
        href={WHATSAPP_LINK}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <Phone />
      </a>
    </main>
  );
}

export default function Home() {
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

  return (
    <main className="bg-stone-50 text-stone-900">
      <section className="relative min-h-screen flex items-center text-white">
        <img src={images.hero} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-5xl px-8">
          <h1 className="text-6xl font-black max-w-4xl">
            Soluções inteligentes para transformar a pecuária leiteira
          </h1>
          <p className="mt-6 text-xl max-w-2xl">
            Consultoria veterinária, gestão técnica, nutrição de ruminantes
            e qualidade do leite com ciência aplicada ao campo.
          </p>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-amber-700 font-bold">
              Quem Somos
            </p>
            <h2 className="text-5xl font-black mt-4">
              Ciência, campo e resultado
            </h2>
            <p className="mt-6 text-lg leading-8">
              A Solução Veterinária nasceu com o propósito de levar assistência
              técnica de verdade ao produtor rural, unindo ciência, prática e
              proximidade no campo.
            </p>
          </div>

          <img
            src={images.familia}
            className="rounded-[2rem] shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-emerald-950 text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center">
            Mulheres que transformam o agro
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <img src={images.vacaPB} className="rounded-[2rem]" />
            <img src={images.bezerroPB} className="rounded-[2rem]" />
            <img src={images.cocho} className="rounded-[2rem]" />
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center">
          Manejo, capacitação e assistência técnica
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <img src={images.curral} className="rounded-[2rem]" />
          <img src={images.manejo} className="rounded-[2rem]" />
        </div>
      </section>

      <footer className="bg-stone-950 text-white px-8 py-12 text-center">
        <h3 className="text-2xl font-bold">Solução Veterinária</h3>
        <p className="mt-4 text-stone-400">
          Ciência, manejo e resultado para transformar o agro.
        </p>
      </footer>
    </main>
  );
}

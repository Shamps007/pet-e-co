export default function Positioning() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="/img1 (3).jpeg" 
              alt="Veterinária examinando cachorro" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
            Nosso Posicionamento
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-8 leading-tight">
            Nosso atendimento é focado em prevenção, diagnóstico preciso e acompanhamento próximo.
          </h2>
          <div className="w-12 h-[2px] bg-accent-500 mx-auto md:mx-0 mb-8"></div>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            Nada de consultas rápidas ou superficiais. Cada paciente é avaliado de forma completa, respeitando sua história, rotina e necessidades do seu pet.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-surface-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
            Sobre a Clínica (Humanização)
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-8 leading-tight">
            A PETS&Co. nasceu com um propósito simples: oferecer um atendimento mais humano, próximo e responsável.
          </h2>
          <div className="w-12 h-[2px] bg-accent-500 mx-auto md:mx-0 mb-8"></div>
          <p className="text-lg text-slate-500 font-light leading-relaxed mb-6">
            Aqui, entendemos que cada pet é parte da família. Por isso, valorizamos o tempo da consulta, o cuidado nos detalhes e a transparência com cada tutor.
          </p>
          <p className="text-xl font-display font-semibold text-brand-600 italic">
            Cuidar bem também é explicar, acolher e acompanhar.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="/img1 (2).jpeg" 
              alt="Veterinária carinhosa com cachorro" 
              className="object-cover w-full h-full" 
            />
            <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

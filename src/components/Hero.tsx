import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-surface-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">
            Cuidado veterinário que vai além do básico
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-brand-900 leading-[1.1] mb-6">
            A clínica <span className="italic font-normal text-brand-600">roxinha</span><br/> do Campeche.
          </h1>
          <p className="text-lg text-slate-500 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            Clínica Multiespecialidades e Coworking Veterinário. Cuidados precisos e compassivos para o bem-estar do seu pet.
          </p>
          <ul className="flex flex-col gap-2 mb-6 text-brand-900 font-medium text-lg">
            <li className="flex items-center justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-accent-500 mr-3"></span> Atenção
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-accent-500 mr-3"></span> Prevenção
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <span className="w-2 h-2 rounded-full bg-accent-500 mr-3"></span> Respeito
            </li>
          </ul>
          <p className="text-md text-slate-500 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            Nosso foco é evitar doenças antes que elas apareçam e garantir mais qualidade de vida para quem você ama.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a href="https://wa.me/554833650966" target="_blank" rel="noreferrer" className="bg-brand-900 text-white px-10 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-brand-800 transition-colors flex items-center justify-center shadow-lg shadow-brand-900/20">
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
             <img 
               src="/img1 (1).jpeg" 
               alt="Cuidado veterinário" 
               className="w-full h-auto" 
             />
             <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

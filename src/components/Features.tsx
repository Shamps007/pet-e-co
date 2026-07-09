import { HeartPulse, Stethoscope, ShieldCheck, Check } from 'lucide-react';

const features = [
  {
    icon: <Stethoscope className="w-10 h-10" />,
    title: 'Multiespecialidades',
    description: 'Atendemos diversas especialidades para garantir a saúde completa do seu pet em um só lugar.'
  },
  {
    icon: <HeartPulse className="w-10 h-10" />,
    title: 'Amor e Cuidado',
    description: 'Entendemos que cada paciente pertence a família de alguém, portanto merecem todo nosso respeito e empatia.'
  },
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'Coworking Veterinário',
    description: 'Espaço integrado para profissionais veterinários parceiros atuarem com excelência.'
  }
];

const checkmarks = [
  'Atendimento sem pressa',
  'Foco em medicina preventiva',
  'Explicação clara e transparente',
  'Ambiente acolhedor',
  'Equipe que realmente se importa'
];

export default function Features() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Diferenciais</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-6">Por que escolher a Pets<span className="font-sans text-[0.8em] text-accent-500 mx-1">&amp;</span>Co.?</h2>
          <div className="w-12 h-[2px] bg-accent-500 mx-auto"></div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Nossa infraestrutura no Campeche foi pensada para oferecer o melhor atendimento. Nosso compromisso é com a saúde e o bem-estar do seu pet.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-brand-900 group-hover:text-accent-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-brand-900 mb-4">{feature.title}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-surface-50 p-8 rounded-3xl border border-slate-100">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {checkmarks.map((item, idx) => (
              <li key={idx} className="flex items-center text-brand-900 font-medium">
                <div className="w-6 h-6 rounded-full bg-accent-500/20 flex items-center justify-center mr-3">
                  <Check className="w-4 h-4 text-accent-500" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

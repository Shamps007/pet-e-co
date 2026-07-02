import { Syringe, Stethoscope, Microscope, Pill, Activity, Scissors, Bed } from 'lucide-react';

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Consultas veterinárias',
    description: 'Avaliação completa da saúde do seu pet, com foco em prevenção e diagnóstico precoce.'
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: 'Vacinação',
    description: 'Protocolos atualizados para proteger seu pet contra as principais doenças, com orientação clara e segura.'
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Exames laboratoriais',
    description: 'Resultados rápidos e precisos para investigar qualquer alteração e agir com segurança.'
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: 'Atendimento preventivo',
    description: 'Acompanhamento contínuo para evitar problemas futuros e garantir mais qualidade de vida.'
  },
  {
    icon: <Pill className="w-8 h-8" />,
    title: 'Farmácia Veterinária',
    description: 'Medicamentos, suplementos e produtos específicos para o tratamento contínuo do seu pet.'
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Cirurgias veterinárias',
    description: 'Procedimentos realizados com segurança, estrutura adequada e equipe qualificada, desde cirurgias eletivas até intervenções mais complexas, sempre com cuidado individualizado em cada etapa.'
  },
  {
    icon: <Bed className="w-8 h-8" />,
    title: 'Internação e observação',
    description: 'Espaço preparado para monitoramento contínuo de pets que precisam de cuidados e/ou acompanhamento, garantindo conforto, segurança e atenção durante toda a recuperação.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-surface-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-20 text-center">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-6">Tudo para a saúde do seu pet</h2>
          <div className="w-12 h-[2px] bg-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Descubra o que oferecemos para cuidar da saúde do seu pet em um só lugar com total excelência.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:border-accent-500/30 transition-all duration-300 group">
              <div className="text-accent-500 mb-6 group-hover:scale-110 transition-transform origin-left duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 font-light text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://wa.me/554833650966" target="_blank" rel="noreferrer" className="inline-block bg-brand-900 text-white px-10 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-brand-800 transition-colors shadow-lg shadow-brand-900/20">
            Agendar um horário
          </a>
        </div>
      </div>
    </section>
  );
}

import { MapPin } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Nossa Localização</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-6">Como chegar até nós</h2>
          <div className="w-12 h-[2px] bg-accent-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light mb-4">
            Atendemos em Florianópolis, no coração do bairro Campeche.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light mb-8">
            Se você procura uma clínica veterinária de confiança na região, será um prazer cuidar do seu pet.
          </p>
          <p className="text-lg text-brand-900 font-medium max-w-2xl mx-auto flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-3 text-accent-500" />
            Avenida Pequeno Príncipe, 942, sala 04.
          </p>
        </div>
        
        <div className="w-full h-[450px] md:h-[600px] rounded-3xl border border-slate-100 overflow-hidden shadow-[0_4px_30px_-4px_rgba(0,0,0,0.05)]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.9142750982544!2d-48.49755492454659!3d-27.673629476201633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95273f324d20914d%3A0xcaf6f881267b2d5!2sAv.%20Pequeno%20Pr%C3%ADncipe%2C%20942%20-%20Campeche%2C%20Florian%C3%B3polis%20-%20SC%2C%2088063-000!5e0!3m2!1spt-BR!2sbr!4v1709669527964!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização Pets & Co."
          ></iframe>
        </div>
      </div>
    </section>
  );
}

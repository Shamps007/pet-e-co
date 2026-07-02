import { MapPin, Phone, Instagram, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-brand-800 pb-16">
        <div>
          <a href="#home" className="inline-block mb-6">
            <img src="/logo.svg" alt="Pets & Co." className="h-40 w-auto brightness-0 invert" />
          </a>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed font-light">
            A clínica roxinha do Campeche. Seu pet, nosso cuidado. Excelência em medicina veterinária no sul da ilha de Florianópolis.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/clinicapetseco" target="_blank" rel="noreferrer" className="w-10 h-10 bg-brand-800 rounded-full flex items-center justify-center hover:bg-accent-500 hover:text-brand-900 transition-all duration-300 text-white">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="lg:ml-auto">
          <h4 className="text-white font-display font-semibold text-lg mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><a href="#home" className="hover:text-accent-500 transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-accent-500 transition-colors">Sobre a Clínica</a></li>
            <li><a href="#servicos" className="hover:text-accent-500 transition-colors">Nossos Serviços</a></li>
            <li><a href="https://wa.me/554833650966" target="_blank" rel="noreferrer" className="hover:text-accent-500 transition-colors">Agendar Consulta</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-lg mb-6">Contato</h4>
          <ul className="space-y-5">
            <li className="flex items-start">
              <Phone className="w-4 h-4 text-accent-500 mr-4 shrink-0 mt-0.5" />
              <div className="text-sm font-light">
                <a href="https://wa.me/554833650966" target="_blank" rel="noreferrer" className="hover:text-accent-500 transition-colors">(48) 3365-0966</a>
              </div>
            </li>
            <li className="flex items-start">
              <MapPin className="w-4 h-4 text-accent-500 mr-4 shrink-0 mt-0.5" />
              <div className="text-sm text-slate-400 font-light leading-relaxed">
                <p className="text-white mb-1 font-medium">Av. Pequeno Príncipe, 942</p>
                <p>Sala 4 - Campeche</p>
                <p>Florianópolis - SC</p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-display font-semibold text-lg mb-6">Funcionamento</h4>
          <ul className="space-y-5">
            <li className="flex items-start">
              <Clock className="w-4 h-4 text-accent-500 mr-4 shrink-0 mt-0.5" />
              <div className="text-sm font-light">
                <p className="text-white font-medium mb-1">Segunda a Sexta</p>
                <p className="text-slate-400">09:00 - 19:00</p>
              </div>
            </li>
            <li className="flex items-start">
              <Clock className="w-4 h-4 text-accent-500 mr-4 shrink-0 mt-0.5" />
              <div className="text-sm font-light">
                <p className="text-white font-medium mb-1">Sábado</p>
                <p className="text-slate-400">09:00 - 13:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide text-slate-500">
        <p>&copy; {new Date().getFullYear()} Pets & Co. Clínica Veterinária. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100 transition-all duration-300">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="flex items-center">
            <img src="/logo.svg" alt="Pets & Co." className="h-32 w-auto" />
          </a>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-slate-500 font-medium text-lg tracking-wide">
          <a href="#home" className="text-brand-900 font-semibold">Home</a>
          <a href="#sobre" className="hover:text-brand-900 transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-brand-900 transition-colors">Serviços</a>
          <a href="#galeria" className="hover:text-brand-900 transition-colors">Galeria</a>
          <a href="#contato" className="hover:text-brand-900 transition-colors">Contato</a>
        </nav>
        
        <div className="hidden md:block">
          <a href="https://wa.me/554833650966" target="_blank" rel="noreferrer" className="bg-brand-900 text-white px-7 py-2.5 rounded-full font-medium hover:bg-brand-800 transition-colors text-sm tracking-wide shadow-lg shadow-brand-900/20">
            Agendar Consulta
          </a>
        </div>
        
        <div className="md:hidden text-brand-900 cursor-pointer">
          <Menu className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
}

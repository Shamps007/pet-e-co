export default function Cta() {
  return (
    <section className="py-24 bg-brand-900 text-white border-b border-brand-800 text-center px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Seu pet merece um cuidado completo.</h2>
        <p className="text-xl text-slate-300 font-light mb-10">Agende agora e venha conhecer a Pets<span className="font-sans text-[0.8em] text-accent-500 mx-1">&amp;</span>Co.</p>
        <a href="https://wa.me/554833650966" target="_blank" rel="noreferrer" className="inline-block bg-accent-500 text-brand-900 px-10 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-accent-400 transition-colors shadow-lg shadow-accent-500/20">
          Agendar um horário
        </a>
      </div>
    </section>
  );
}

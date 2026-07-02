export default function Connection() {
  return (
    <section className="py-24 bg-brand-900 text-white border-b border-brand-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 leading-tight">
          Você já ficou em dúvida se seu pet está realmente saudável?
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 leading-relaxed">
          Muitas doenças começam de forma silenciosa e quando os sinais aparecem, o tratamento pode ser mais difícil.
        </p>
        
        <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
          <p className="text-2xl md:text-3xl font-display font-semibold text-accent-500 italic">
            Aqui, a gente acredita que cuidar é antecipar.
          </p>
        </div>
      </div>
    </section>
  );
}

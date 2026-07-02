export default function Gallery() {
  const images = [
    "/img1 (4).jpeg",
    "/img1 (5).jpeg",
    "/img1 (6).jpeg",
    "/img1 (7).jpeg",
    "/img1 (8).jpeg",
    "/img1 (9).jpeg",
    "/img1 (10).jpeg",
  ];

  return (
    <section className="py-24 bg-brand-50" id="galeria">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-brand-900 mb-6">
            Nossa Estrutura
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conheça o espaço preparado com todo o carinho e cuidado para receber o seu melhor amigo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-2xl shadow-md group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img 
                src={src} 
                alt={`Imagem da clínica ${index + 1}`} 
                className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

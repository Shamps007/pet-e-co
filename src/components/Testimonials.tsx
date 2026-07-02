import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Silva',
    text: 'Atendimento excepcional! A equipe foi super carinhosa com meu cachorro. Fiquei muito tranquila.',
    rating: 5,
  },
  {
    name: 'Carlos Oliveira',
    text: 'Clínica muito bem estruturada. O ambiente é ótimo e os profissionais são muito competentes.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    text: 'Achei o foco em prevenção maravilhoso. A doutora explicou tudo com muita clareza. Recomendo!',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-500 font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Prova Social</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-900 mb-6">Quem confia, recomenda!</h2>
          <div className="w-12 h-[2px] bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
                ))}
              </div>
              <p className="text-slate-500 font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="font-display font-semibold text-brand-900">
                {testimonial.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

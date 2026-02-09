
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Cyril S.",
    role: "Propriétaire, Entreprise de Rénovation",
    content: "Un travail d'une grande qualité pour la refonte de mon site. Antonny est à l'écoute, très réactif et professionnel. Le résultat dépasse mes attentes. Je recommande vivement !",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Cyril"
  },
  {
    name: "Nathalie P.",
    role: "Gérante de Boutique",
    content: "Très satisfaite du site e-commerce réalisé par Roseval Design. Le design est moderne, élégant et la navigation est fluide. Un vrai plus pour le développement de mon activité à Toulouse.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nathalie"
  },
  {
    name: "Thomas B.",
    role: "Investisseur & Entrepreneur",
    content: "Expertise technique impressionnante sur les automatisations et l'IA. Gain de temps considérable pour mon entreprise grâce aux solutions mises en place par Antonny. Efficacité garantie.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thomas"
  },
  {
    name: "Léa G.",
    role: "Professionnelle Libérale",
    content: "Excellent accompagnement pour mon référencement local. Mon site est désormais bien positionné sur Google et j'ai déjà de nouveaux contacts. Un grand merci pour votre sérieux.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lea"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Quote size={200} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6">
            Avis Clients Google
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 outfit">
            Ils nous font <span className="text-indigo-500">Confiance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La satisfaction de nos clients à Toulouse et en Occitanie est notre plus belle réussite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 glass rounded-[40px] border border-white/5 flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-500">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-base text-gray-300 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-indigo-500/20 bg-indigo-500/10" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center">
          <a 
            href="https://www.google.com/search?q=Roseval+Design+Avis" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white font-bold hover:text-indigo-400 transition-colors"
          >
            Voir tous les avis sur Google
            <Star size={16} className="fill-indigo-500 text-indigo-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

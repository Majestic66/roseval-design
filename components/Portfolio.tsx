
import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "FL Rénovation",
    category: "Site vitrine pour entreprise de rénovation",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    link: "https://www.fl-renovation.com/"
  },
  {
    title: "DPC Immobilier",
    category: "Site de service immobilier",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    link: "https://www.dpcimmobilier.com/"
  },
  {
    title: "AP Design",
    category: "Site e-commerce pour AP Design",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    link: "https://ap-design.store/"
  },
  {
    title: "Trading Bot AI",
    category: "Application de trading automatisé avec IA",
    image: "https://images.unsplash.com/photo-1611974714013-3c846551847a?auto=format&fit=crop&q=80&w=800",
    link: "https://tradingbotairosevaldesign.vercel.app/"
  },
  {
    title: "Cabinet Dentaire Montrabé",
    category: "Site vitrine médical (Dr Robles & associés)",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    link: "https://cabinetdentairemontrabe.vercel.app/"
  },
  {
    title: "PrixFrance",
    category: "Observatoire collaboratif (Données INSEE)",
    image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
    link: "https://prixfrance.lovable.app/"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 outfit">
            Nos <span className="text-indigo-500">Réalisations</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Découvrez nos derniers projets à Toulouse et partout en France. Performance, design et résultats concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-[40px] overflow-hidden bg-gray-900 border border-white/5 block"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-100"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white outfit">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 shadow-xl flex-shrink-0">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 border border-white/10 rounded-2xl font-bold hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            Lancer mon projet maintenant
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

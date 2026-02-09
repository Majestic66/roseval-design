import React from 'react';
import { Layout, Search, Zap, Palette, Code, BarChart3, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-indigo-400" size={32} />,
    title: "Conception Web Elite",
    description: "Des interfaces haute couture, sculptées pour l'expérience utilisateur et optimisées pour la conversion maximale.",
    gradient: "from-indigo-500/20 to-transparent"
  },
  {
    icon: <BarChart3 className="text-purple-400" size={32} />,
    title: "SEO Haute Visibilité",
    description: "Dominez les résultats de recherche à Toulouse. Nous transformons votre site en un aimant à prospects qualifiés.",
    gradient: "from-purple-500/20 to-transparent"
  },
  {
    icon: <Zap className="text-amber-400" size={32} />,
    title: "Automatisation & IA",
    description: "Intégrez le futur dans votre flux de travail. Gagnez des heures précieuses grâce à nos agents IA personnalisés.",
    gradient: "from-amber-500/20 to-transparent"
  },
  {
    icon: <Palette className="text-pink-400" size={32} />,
    title: "Branding Stratégique",
    description: "Au-delà du logo, nous créons un univers visuel mémorable qui raconte votre histoire et impose votre autorité.",
    gradient: "from-pink-500/20 to-transparent"
  },
  {
    icon: <Code className="text-cyan-400" size={32} />,
    title: "Dev Sur-Mesure",
    description: "Applications web complexes ou sites ultra-rapides. Nous codons le futur avec une précision millimétrée.",
    gradient: "from-cyan-500/20 to-transparent"
  },
  {
    icon: <Search className="text-emerald-400" size={32} />,
    title: "Audit Performance",
    description: "Analyse chirurgicale de votre écosystème digital pour identifier les leviers de croissance inexploités.",
    gradient: "from-emerald-500/20 to-transparent"
  }
];

const Services: React.FC = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Services Roseval Design",
    "description": "Services web professionnels proposés par Roseval Design à Toulouse",
    "numberOfItems": 6,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "Conception Web Elite",
          "description": "Création d'interfaces web haute performance optimisées pour la conversion",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Roseval Design"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "SEO Haute Visibilité",
          "description": "Optimisation pour les moteurs de recherche et référencement local Toulouse",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Roseval Design"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "Automatisation & IA",
          "description": "Intégration d'agents IA et automatisation des processus métier",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Roseval Design"
          }
        }
      }
    ]
  };

  return (
    <section
      id="services"
      className="py-32 px-6 bg-slate-950/40"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Données structurées pour les services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema)
        }}
      />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800 border border-white/5 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Expertises Métiers
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 outfit tracking-tight">
              Propulsez votre <span className="text-indigo-500">Flux Digital</span>.
            </h2>
            <p className="text-slate-400 text-xl leading-relaxed">
              Une fusion entre design d'avant-garde et ingénierie de précision pour des résultats concrets.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-[40px] glass border border-white/5 hover:border-white/20 transition-all duration-700 hover:-translate-y-3 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-[28px] bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-5 outfit text-white group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 text-white font-bold text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  En savoir plus
                  <ArrowRight size={18} className="text-indigo-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
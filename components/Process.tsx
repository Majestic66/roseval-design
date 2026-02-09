
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Stratégie & Découverte",
    description: "Nous commençons par comprendre vos objectifs profonds et votre audience pour bâtir des bases solides."
  },
  {
    number: "02",
    title: "Design & Concept",
    description: "Notre équipe crée des maquettes haute fidélité qui capturent l'essence de votre marque."
  },
  {
    number: "03",
    title: "Développement & Flow",
    description: "Nous codons votre site avec précision et intégrons les automatisations nécessaires à votre efficacité."
  },
  {
    number: "04",
    title: "Lancement & Support",
    description: "Nous déployons votre projet et restons à vos côtés pour assurer sa croissance continue."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-indigo-950/10">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-6xl font-black mb-8 outfit leading-tight">
                Notre <span className="text-indigo-500">Processus</span> de Travail
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Une méthodologie rigoureuse pour garantir des résultats prévisibles et exceptionnels à chaque fois.
              </p>
              <div className="flex items-center gap-4 text-white font-bold">
                <div className="w-12 h-12 rounded-full border border-indigo-500/30 flex items-center justify-center animate-pulse">
                   <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                </div>
                En direct maintenant
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 flex flex-col gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row gap-8 p-10 glass rounded-[40px] border border-white/5 hover:bg-indigo-600/5 transition-all duration-500"
              >
                <div className="text-6xl font-black text-indigo-500/20 group-hover:text-indigo-500 transition-colors outfit">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 outfit text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;

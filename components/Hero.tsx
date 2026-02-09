import React from 'react';
import { ArrowUpRight, Star, CheckCircle2, Sparkles, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-40 pb-24 flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto text-center z-10 relative">
        <div className="flex flex-col items-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Sparkles size={14} className="text-indigo-400" />
            L'Élite Web en Haute-Garonne
          </div>
          <div className="flex items-center gap-4 text-amber-500 font-black bg-white/5 px-6 py-2 rounded-full border border-white/10 shadow-xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-1000 delay-200">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
            </div>
            <span className="text-xs text-white uppercase tracking-widest">Excellence certifiée 5.0</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter outfit animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          Digital<br />
          <span className="gradient-text">Exception.</span>
        </h1>

        <p className="max-w-3xl mx-auto text-slate-400 text-xl md:text-2xl mb-14 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          Nous créons des interfaces qui <span className="text-white font-bold">captivent</span>, <span className="text-white font-bold">convertissent</span> et <span className="text-white font-bold">propulsent</span> votre activité à Toulouse vers de nouveaux sommets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20 animate-in fade-in zoom-in-95 duration-1000 delay-700">
          <button 
            onClick={() => scrollTo('contact')}
            className="group w-full sm:w-auto px-12 py-6 bg-indigo-600 text-white rounded-[24px] font-black text-lg flex items-center justify-center gap-4 hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-600/20 active:scale-95 cursor-pointer"
          >
            Lancer mon projet
            <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
          <button 
            onClick={() => scrollTo('pricing')}
            className="w-full sm:w-auto px-12 py-6 glass text-white rounded-[24px] font-black text-lg flex items-center justify-center gap-4 hover:bg-white/10 transition-all active:scale-95 cursor-pointer border border-white/10"
          >
            Voir nos tarifs
            <MousePointer2 size={20} className="text-slate-400" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] animate-in fade-in duration-1000 delay-1000">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-indigo-500" />
            Paiement 3x sécurisé
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-indigo-500" />
            Déploiement en 15 jours
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 size={16} className="text-indigo-500" />
            SEO Elite Performance
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import SEOHead from './components/SEOHead';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';
import CookiePolicy from './components/CookiePolicy';
import { ShoppingBag, Globe, Video, ChevronRight, User, X, Check, Target, Zap, ShieldCheck, Award } from 'lucide-react';

const AboutModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" onClick={onClose}></div>
      <div className="relative w-full max-w-5xl max-h-[90vh] glass rounded-[48px] border border-white/10 overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        <button onClick={onClose} className="absolute top-8 right-8 z-20 p-2.5 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all border border-white/10">
          <X size={24} />
        </button>
        
        <div className="w-full md:w-2/5 p-12 bg-indigo-600/10 flex flex-col justify-center items-center text-center relative overflow-hidden border-r border-white/5">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
          <div className="relative w-56 h-56 rounded-[56px] overflow-hidden border-4 border-white/10 mb-8 shadow-2xl group">
            <img src="founder.jpg" alt="Antonny Ros" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=800"} />
          </div>
          <h3 className="text-4xl font-black outfit text-white mb-2 tracking-tight">Antonny F. Ros</h3>
          <p className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">Architecte Digital & Innovateur</p>
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-16 space-y-10 overflow-y-auto">
          <div>
            <h4 className="text-3xl font-bold outfit text-white mb-6">L'Engagement Roseval</h4>
            <p className="text-slate-400 leading-relaxed text-lg">
              Expert web toulousain, j'ai bâti Roseval Design sur un pilier central : l'alliance entre la <span className="text-white font-semibold">performance technologique</span> et l'élégance du <span className="text-white font-semibold">design minimaliste</span>. Pour moi, chaque pixel doit avoir un objectif commercial précis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-indigo-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                <Target size={24} />
              </div>
              <h5 className="font-bold text-white mb-2 text-xl">Conversion Max</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Transformer chaque visiteur en prospect qualifié par un design psychologique.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group hover:border-purple-500/30 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                <Zap size={24} />
              </div>
              <h5 className="font-bold text-white mb-2 text-xl">Rapidité Flow</h5>
              <p className="text-sm text-slate-500 leading-relaxed">Développement agile pour une mise en ligne record sans compromis sur la qualité.</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xl font-bold outfit text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-indigo-400" size={24} />
              Pourquoi nous choisir ?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Proximité Occitanie & Réactivité",
                "Transparence tarifaire totale",
                "Support premium illimité",
                "Intégration IA native"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-300 bg-white/5 p-4 rounded-2xl">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check size={14} className="text-emerald-500" />
                  </div>
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <button onClick={onClose} className="w-full py-5 bg-white text-black rounded-[24px] font-bold text-lg transition-all active:scale-[0.98] hover:shadow-2xl hover:shadow-white/10">
            Retourner au site
          </button>
        </div>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-32 px-6 relative border-y border-white/5 bg-slate-950/50 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.25em] mb-8">
                <User size={14} />
                L'âme du studio
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 outfit leading-[1.1]">
                <span className="gradient-text">Antonny Freval Ros</span>
              </h2>
              <div className="space-y-8 text-slate-400 text-lg leading-relaxed mb-12">
                <p className="border-l-4 border-indigo-500 pl-8 italic text-white/80 text-xl font-medium">
                  "Chaque site que je conçois est un investissement stratégique, pas une simple dépense. Mon but est de vous rendre fier de votre image à Toulouse."
                </p>
                <p>
                  Freelance toulousain spécialisé dans la transition numérique de haute volée. J'accompagne artisans, TPE et PME de l'Occitanie avec une rigueur d'agence et la souplesse du freelance. Mon obsession : votre retour sur investissement.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 mb-12">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group px-10 py-5 bg-white text-black rounded-[20px] font-bold flex items-center justify-center gap-3 hover:bg-slate-200 transition-all active:scale-95 cursor-pointer shadow-xl shadow-white/5"
                >
                  Découvrir mon parcours
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex gap-10 items-center border-l border-white/10 pl-10">
                  <div className="text-center">
                    <p className="text-4xl font-black text-white outfit">31</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Haute-Garonne</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-black text-white outfit">100%</p>
                    <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Sur Mesure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-10 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 rounded-[80px] blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
                
                <div className="aspect-[4/5] glass rounded-[64px] p-3 border border-white/10 overflow-hidden shadow-2xl relative z-10 transition-all duration-1000 hover:scale-[1.02]">
                   <img 
                     src="founder.jpg" 
                     alt="Antonny Freval Ros - Fondateur" 
                     className="w-full h-full object-cover rounded-[52px] transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=800";
                     }}
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="absolute -top-12 -right-8 px-8 py-6 glass rounded-3xl border border-white/20 text-white shadow-2xl animate-float z-20 backdrop-blur-3xl">
                   <div className="flex items-center gap-3 mb-2">
                     <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                     <span className="outfit font-black tracking-tight text-xl">Disponible</span>
                   </div>
                </div>

                <div className="absolute -bottom-8 -left-8 px-8 py-4 glass rounded-3xl border border-white/10 text-white text-sm font-bold shadow-2xl z-20 flex items-center gap-4">
                   <div className="w-10 h-10 rounded-2xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                      <Award size={20} />
                   </div>
                   <div>
                     <p className="text-white">Expert Certifié</p>
                     <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black">Performance Web</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Pack Vitrine",
      price: "399 €",
      description: "L'essentiel pour exister avec élégance et être trouvé sur Google.",
      features: ["Design Signature", "Optimisation SEO Local", "Interface Responsive", "Formulaire Intelligent"],
      icon: <Globe className="text-indigo-400" size={28} />,
      color: "indigo"
    },
    {
      title: "Pack E-commerce",
      price: "Dès 900 €",
      description: "Une machine à vendre performante, sécurisée et automatisée.",
      features: ["Gestion de Stock Intuitive", "Paiements Stripe/PayPal", "Analyse des Ventes", "Produits Illimités"],
      icon: <ShoppingBag className="text-purple-400" size={28} />,
      popular: true,
      color: "purple"
    },
    {
      title: "Pack Social",
      price: "Dès 40 €",
      description: "Boostez votre présence sur Instagram & Facebook.",
      features: ["Design de Posts (40€)", "Montage Reels (70€)", "Stratégie de Contenu", "Format 4K Optimisé"],
      icon: <Video className="text-pink-400" size={28} />,
      color: "pink"
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-slate-950/20 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 outfit tracking-tight">Investissement <span className="text-indigo-500">Clair</span>.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Aucun frais caché. Des tarifs transparents pensés pour la croissance des acteurs locaux de Toulouse.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div key={i} className={`relative p-10 rounded-[48px] glass border transition-all duration-500 hover:-translate-y-4 ${plan.popular ? 'border-indigo-500 ring-4 ring-indigo-500/10 shadow-2xl shadow-indigo-500/20' : 'border-white/5 hover:border-white/20'} flex flex-col`}>
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl">
                  Le Choix Performance
                </div>
              )}
              <div className="mb-10 w-16 h-16 rounded-[24px] bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {plan.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 outfit text-white">{plan.title}</h3>
              <div className="flex items-end gap-2 mb-6">
                <span className="text-5xl font-black text-white outfit">{plan.price}</span>
                {plan.price.includes('€') && <span className="text-slate-500 text-sm font-bold mb-2 uppercase tracking-widest">HT</span>}
              </div>
              <p className="text-slate-500 mb-10 text-sm leading-relaxed">{plan.description}</p>
              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-emerald-500" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                className={`w-full py-5 rounded-[24px] font-bold text-center transition-all cursor-pointer text-lg ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-500/20' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}
              >
                Démarrer mon projet
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass p-8 rounded-[32px] border border-white/5 flex justify-between items-center group hover:bg-indigo-500/5 transition-colors">
            <span className="text-slate-400 font-medium">Refonte Site Web</span>
            <span className="font-black text-indigo-400 outfit text-xl">Dès 400 €</span>
          </div>
          <div className="glass p-8 rounded-[32px] border border-white/5 flex justify-between items-center group hover:bg-indigo-500/5 transition-colors">
            <span className="text-slate-400 font-medium">Maintenance Expert</span>
            <span className="font-black text-indigo-400 outfit text-xl">50 € / mois</span>
          </div>
          <div className="glass p-8 rounded-[32px] border border-white/5 flex justify-between items-center group hover:bg-indigo-500/5 transition-colors">
            <span className="text-slate-400 font-medium">SEO & Visibilité</span>
            <span className="font-black text-indigo-400 outfit text-xl">Dès 300 €</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage: React.FC = () => {
  return (
    <main className="relative">
      <SEOHead />
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full bg-indigo-600/10 blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[0%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/10 blur-[150px] animate-pulse delay-1000"></div>
      </div>
      <Hero />
      <AboutSection />
      <PricingSection />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen selection:bg-indigo-500/40 text-slate-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-cookies" element={<CookiePolicy />} />
        </Routes>
        <AiAssistant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
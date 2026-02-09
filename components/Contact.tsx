
import React from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="glass rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Info Side */}
            <div className="lg:w-1/3 bg-indigo-600 p-12 lg:p-16 text-white">
              <h2 className="text-4xl font-bold mb-8 outfit">Votre projet à Toulouse</h2>
              <p className="text-indigo-100 text-lg mb-12">
                Besoin d'un devis personnalisé ? Contactez-nous pour une réponse sous 24h.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200 uppercase font-bold tracking-wider">Email</p>
                    <p className="text-lg font-medium">roseval.design@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200 uppercase font-bold tracking-wider">Téléphone</p>
                    <p className="text-lg font-medium">+33 6 68 39 98 99</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200 uppercase font-bold tracking-wider">Région</p>
                    <p className="text-lg font-medium">Toulouse, Haute-Garonne (31)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200 uppercase font-bold tracking-wider">Disponibilité</p>
                    <p className="text-lg font-medium">24h/24, 7j/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-2/3 p-12 lg:p-16 bg-black/40">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Nom / Entreprise</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-indigo-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Type de projet</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-indigo-500 focus:outline-none transition-colors appearance-none text-gray-300">
                    <option className="bg-gray-900">Site Vitrine (399€)</option>
                    <option className="bg-gray-900">Site E-commerce (900€+)</option>
                    <option className="bg-gray-900">Réseaux Sociaux</option>
                    <option className="bg-gray-900">Refonte / Maintenance</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-widest">Détails du projet</label>
                  <textarea 
                    rows={4}
                    placeholder="Décrivez votre besoin à Toulouse..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-5 bg-white text-black rounded-2xl font-bold text-xl flex items-center justify-center gap-4 hover:bg-gray-200 transition-all active:scale-95">
                  Demander mon devis gratuit
                  <Send size={24} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

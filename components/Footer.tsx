
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg italic">R</span>
              </div>
              <span className="text-xl font-bold outfit text-white">Roseval.</span>
            </button>
            <p className="text-gray-500 leading-relaxed">
              Propulsez votre vision digitale avec élégance et performance. Nous créons le futur du Web, aujourd'hui à Toulouse.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/roseval.design/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 outfit">Société</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => scrollTo('about')} className="hover:text-indigo-400 transition-colors cursor-pointer">À Propos</button></li>
              <li><button onClick={() => scrollTo('services')} className="hover:text-indigo-400 transition-colors cursor-pointer">Services</button></li>
              <li><button onClick={() => scrollTo('portfolio')} className="hover:text-indigo-400 transition-colors cursor-pointer">Réalisations</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-indigo-400 transition-colors cursor-pointer">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 outfit">Ressources</h4>
            <ul className="space-y-4 text-gray-500">
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-indigo-400 transition-colors cursor-pointer">Tarifs</button></li>
              <li><button className="hover:text-indigo-400 transition-colors opacity-50 cursor-not-allowed">Blog (Bientôt)</button></li>
              <li><button className="hover:text-indigo-400 transition-colors opacity-50 cursor-not-allowed">Études de cas</button></li>
              <li><a href="/mentions-legales" className="hover:text-indigo-400 transition-colors">Mentions Légales</a></li>
              <li><a href="/politique-confidentialite" className="hover:text-indigo-400 transition-colors">Politique de Confidentialité</a></li>
              <li><a href="/politique-cookies" className="hover:text-indigo-400 transition-colors">Politique des Cookies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 outfit">Newsletter</h4>
            <p className="text-gray-500 mb-6 text-sm">Restez informé de nos dernières innovations digitales.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-indigo-500 text-white"
              />
              <button className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all active:scale-95 cursor-pointer">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-gray-500 text-sm gap-4 text-center">
          <p>© 2024 Roseval Design & Flow. Made with ❤️ in Toulouse.</p>
          <div className="flex gap-8">
            <button className="hover:text-white cursor-pointer">Confidentialité</button>
            <button className="hover:text-white cursor-pointer">Mentions Légales</button>
            <button className="hover:text-white cursor-pointer">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

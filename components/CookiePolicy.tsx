import React, { useState } from 'react';
import { ArrowLeft, Cookie, Settings, Shield, Eye, X, Check } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Toujours activé
    analytics: false,
    marketing: false
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreferenceChange = (type: string, value: boolean) => {
    if (type === 'essential') return; // Essentiels toujours activés
    setPreferences(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const savePreferences = () => {
    // Ici vous pourriez sauvegarder les préférences dans localStorage ou envoyer au serveur
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowPreferences(false);
    alert('Préférences sauvegardées !');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-white/10">
        <div className="container mx-auto px-6 py-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-3 text-indigo-400 hover:text-indigo-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Retour au site
          </button>
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="text-indigo-400" size={32} />
            <h1 className="text-4xl font-black outfit">Politique des Cookies</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-12">

          {/* Introduction */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <Cookie className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Qu'est-ce qu'un Cookie ?</h2>
                <p className="text-slate-300 leading-relaxed">
                  Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou smartphone
                  lors de votre visite sur notre site. Il permet de stocker des informations relatives
                  à votre navigation et de faciliter votre expérience utilisateur.
                </p>
              </div>
            </div>
          </section>

          {/* Gestion des préférences */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Settings className="text-indigo-400" size={24} />
                <h2 className="text-2xl font-bold">Vos Préférences Cookies</h2>
              </div>
              <button
                onClick={() => setShowPreferences(!showPreferences)}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition-colors"
              >
                {showPreferences ? 'Masquer' : 'Gérer mes préférences'}
              </button>
            </div>

            {showPreferences && (
              <div className="space-y-6 mt-8 p-6 bg-slate-800/30 rounded-2xl border border-white/10">
                <div className="space-y-4">
                  {/* Cookies Essentiels */}
                  <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Shield className="text-green-400" size={20} />
                        <h3 className="text-lg font-semibold text-green-400">Cookies Essentiels</h3>
                        <span className="px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-full">Obligatoire</span>
                      </div>
                      <p className="text-slate-300 text-sm">
                        Nécessaires au fonctionnement du site (sécurité, navigation, formulaires)
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-green-400" size={20} />
                      <span className="text-green-400 font-medium">Activé</span>
                    </div>
                  </div>

                  {/* Cookies Analytiques */}
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl border border-white/10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Eye className="text-indigo-400" size={20} />
                        <h3 className="text-lg font-semibold">Cookies Analytiques</h3>
                      </div>
                      <p className="text-slate-300 text-sm">
                        Nous aident à comprendre l'utilisation du site pour l'améliorer
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>

                  {/* Cookies Marketing */}
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl border border-white/10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Cookie className="text-purple-400" size={20} />
                        <h3 className="text-lg font-semibold">Cookies Marketing</h3>
                      </div>
                      <p className="text-slate-300 text-sm">
                        Utilisés pour vous proposer des contenus personnalisés et des publicités pertinentes
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="px-6 py-3 border border-white/10 rounded-2xl font-medium hover:bg-white/5 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={savePreferences}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition-colors"
                  >
                    Sauvegarder mes préférences
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* Types de cookies utilisés */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Types de Cookies Utilisés</h2>
            <div className="space-y-6">

              <div className="p-6 bg-green-500/10 rounded-xl border border-green-500/20">
                <div className="flex items-start gap-4">
                  <Shield className="text-green-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-green-400 mb-3">Cookies Essentiels</h3>
                    <p className="text-slate-300 mb-4">
                      Ces cookies sont indispensables au fonctionnement du site. Ils ne peuvent pas être désactivés.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <strong>Finalité :</strong> Sécurité, navigation, soumission de formulaires
                      </div>
                      <div className="text-sm">
                        <strong>Durée :</strong> Session ou 1 an maximum
                      </div>
                      <div className="text-sm">
                        <strong>Base légale :</strong> Intérêt légitime (Art. 6.1.f RGPD)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <div className="flex items-start gap-4">
                  <Eye className="text-indigo-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-indigo-400 mb-3">Cookies Analytiques</h3>
                    <p className="text-slate-300 mb-4">
                      Ces cookies nous permettent de mesurer l'audience et d'analyser l'utilisation du site
                      pour l'améliorer continuellement.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <strong>Finalité :</strong> Analyse de trafic, optimisation UX
                      </div>
                      <div className="text-sm">
                        <strong>Durée :</strong> 26 mois maximum
                      </div>
                      <div className="text-sm">
                        <strong>Base légale :</strong> Consentement (Art. 6.1.a RGPD)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <Cookie className="text-purple-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-purple-400 mb-3">Cookies Marketing</h3>
                    <p className="text-slate-300 mb-4">
                      Ces cookies sont utilisés pour vous proposer des contenus personnalisés
                      et mesurer l'efficacité de nos campagnes publicitaires.
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm">
                        <strong>Finalité :</strong> Publicité personnalisée, remarketing
                      </div>
                      <div className="text-sm">
                        <strong>Durée :</strong> 13 mois maximum
                      </div>
                      <div className="text-sm">
                        <strong>Base légale :</strong> Consentement (Art. 6.1.a RGPD)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Liste détaillée des cookies */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Liste Détaillée des Cookies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-3 text-indigo-400 font-semibold">Nom du Cookie</th>
                    <th className="text-left p-3 text-indigo-400 font-semibold">Finalité</th>
                    <th className="text-left p-3 text-indigo-400 font-semibold">Durée</th>
                    <th className="text-left p-3 text-indigo-400 font-semibold">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="p-3 font-medium">session_id</td>
                    <td className="p-3 text-slate-300">Maintenir la session utilisateur</td>
                    <td className="p-3 text-slate-300">Session</td>
                    <td className="p-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Essentiel</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">csrf_token</td>
                    <td className="p-3 text-slate-300">Protection contre les attaques CSRF</td>
                    <td className="p-3 text-slate-300">Session</td>
                    <td className="p-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Essentiel</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">_ga</td>
                    <td className="p-3 text-slate-300">Google Analytics - Identification unique</td>
                    <td className="p-3 text-slate-300">2 ans</td>
                    <td className="p-3"><span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full">Analytique</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">_gid</td>
                    <td className="p-3 text-slate-300">Google Analytics - Session</td>
                    <td className="p-3 text-slate-300">24h</td>
                    <td className="p-3"><span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 text-xs rounded-full">Analytique</span></td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">cookie_consent</td>
                    <td className="p-3 text-slate-300">Mémorisation des préférences cookies</td>
                    <td className="p-3 text-slate-300">1 an</td>
                    <td className="p-3"><span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Essentiel</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Gestion des cookies */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Comment Gérer vos Cookies ?</h2>
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">Navigateur Web</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• <strong>Chrome :</strong> Paramètres → Cookies et données des sites</li>
                  <li>• <strong>Firefox :</strong> Préférences → Vie privée et sécurité</li>
                  <li>• <strong>Safari :</strong> Préférences → Sécurité</li>
                  <li>• <strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">Extensions</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• uBlock Origin</li>
                  <li>• Privacy Badger</li>
                  <li>• Ghostery</li>
                  <li>• NoScript</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Vos droits */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Vos Droits Concernant les Cookies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit d'opposition :</strong> Refuser les cookies non essentiels
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit d'accès :</strong> Connaître les cookies utilisés
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit de suppression :</strong> Supprimer les cookies existants
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit de modification :</strong> Changer vos préférences
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <p className="text-slate-300 mb-4">
              Pour toute question concernant notre utilisation des cookies ou pour exercer vos droits,
              n'hésitez pas à nous contacter :
            </p>
            <div className="flex items-center gap-3">
              <Cookie className="text-indigo-400" size={20} />
              <a href="mailto:roseval.design@gmail.com" className="text-indigo-400 hover:underline font-medium">
                roseval.design@gmail.com
              </a>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Mise à Jour de cette Politique</h2>
            <p className="text-slate-300">
              Cette politique des cookies est mise à jour régulièrement pour refléter les changements
              dans notre utilisation des cookies ou les évolutions réglementaires. La dernière mise à jour
              date du {new Date().toLocaleDateString('fr-FR')}.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <button
            onClick={scrollToTop}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-bold transition-colors"
          >
            Retour en haut
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
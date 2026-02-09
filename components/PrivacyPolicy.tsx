import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <Shield className="text-indigo-400" size={32} />
            <h1 className="text-4xl font-black outfit">Politique de Confidentialité</h1>
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
              <Eye className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-slate-300 leading-relaxed">
                  Chez <strong>Roseval Design</strong>, la protection de vos données personnelles est une priorité absolue.
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations
                  lorsque vous utilisez notre site web et nos services.
                </p>
              </div>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <Database className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Responsable du Traitement</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p><strong className="text-indigo-400">Entreprise :</strong> Roseval Design</p>
                    <p><strong className="text-indigo-400">Forme juridique :</strong> Entrepreneur individuel</p>
                    <p><strong className="text-indigo-400">SIRET :</strong> 947 650 594 00015</p>
                    <p><strong className="text-indigo-400">N° TVA :</strong> FR37947650594</p>
                  </div>
                  <div className="space-y-3">
                    <p><strong className="text-indigo-400">Date de création :</strong> 07 décembre 2022</p>
                    <p><strong className="text-indigo-400">Activité :</strong> Activités spécialisées de design (7410Z)</p>
                    <p><strong className="text-indigo-400">Adresse :</strong> 87 RUE DU GENERAL BOURBAKI, 31200 TOULOUSE</p>
                    <p><strong className="text-indigo-400">Email :</strong> roseval.design@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Données collectées */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lock className="text-indigo-400" size={24} />
              Données Personnelles Collectées
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Informations fournies directement</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Informations relatives à votre projet</li>
                  <li>Messages et communications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Informations collectées automatiquement</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                  <li>Adresse IP</li>
                  <li>Type de navigateur et version</li>
                  <li>Système d'exploitation</li>
                  <li>Pages visitées et durée de consultation</li>
                  <li>Source de trafic (référencement)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Utilisation des données */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Finalités du Traitement</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">Communication Commerciale</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Réponse à vos demandes de devis</li>
                  <li>• Envoi de propositions commerciales</li>
                  <li>• Suivi de projets en cours</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-indigo-400 mb-3">Amélioration du Service</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Analyse de l'utilisation du site</li>
                  <li>• Optimisation de l'expérience utilisateur</li>
                  <li>• Maintenance technique</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Base légale */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Base Légale du Traitement</h2>
            <div className="space-y-4">
              <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <h3 className="font-semibold text-indigo-400 mb-2">Exécution d'un contrat (Art. 6.1.b RGPD)</h3>
                <p className="text-slate-300">Traitement nécessaire à l'exécution de nos prestations de services.</p>
              </div>
              <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <h3 className="font-semibold text-purple-400 mb-2">Intérêt légitime (Art. 6.1.f RGPD)</h3>
                <p className="text-slate-300">Amélioration de nos services et communication commerciale légitime.</p>
              </div>
              <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                <h3 className="font-semibold text-green-400 mb-2">Consentement (Art. 6.1.a RGPD)</h3>
                <p className="text-slate-300">Pour l'envoi de communications marketing avec votre accord préalable.</p>
              </div>
            </div>
          </section>

          {/* Durée de conservation */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Durée de Conservation</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                <span className="font-medium">Données clients actifs</span>
                <span className="text-indigo-400 font-bold">3 ans après dernier contact</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                <span className="font-medium">Données prospects</span>
                <span className="text-indigo-400 font-bold">2 ans après collecte</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-xl">
                <span className="font-medium">Données analytiques</span>
                <span className="text-indigo-400 font-bold">26 mois maximum</span>
              </div>
            </div>
          </section>

          {/* Sécurité */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Mesures de Sécurité</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                <Lock className="text-indigo-400 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Chiffrement SSL</h3>
                <p className="text-sm text-slate-400">Toutes les données sont chiffrées en transit</p>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                <Shield className="text-indigo-400 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Accès Restreint</h3>
                <p className="text-sm text-slate-400">Personnel autorisé uniquement</p>
              </div>
              <div className="text-center p-4 bg-slate-800/30 rounded-xl">
                <Database className="text-indigo-400 mx-auto mb-3" size={32} />
                <h3 className="font-semibold mb-2">Sauvegarde Régulière</h3>
                <p className="text-sm text-slate-400">Données sauvegardées quotidiennement</p>
              </div>
            </div>
          </section>

          {/* Vos droits */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Vos Droits RGPD</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit d'accès :</strong> Connaître vos données personnelles
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit de rectification :</strong> Corriger vos données inexactes
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit à l'effacement :</strong> Supprimer vos données
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit d'opposition :</strong> Refuser certains traitements
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit à la portabilité :</strong> Récupérer vos données
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <strong className="text-indigo-400">Droit de réclamation :</strong> CNIL si nécessaire
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <p className="text-sm">
                <strong>Contact RGPD :</strong> Pour exercer vos droits, contactez-nous à{' '}
                <a href="mailto:roseval.design@gmail.com" className="text-indigo-400 hover:underline">
                  roseval.design@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Cookies et Technologies Similaires</h2>
            <p className="text-slate-300 mb-4">
              Notre site utilise des cookies essentiels pour son fonctionnement. Pour plus de détails,
              consultez notre <a href="/politique-cookies" className="text-indigo-400 hover:underline">Politique des Cookies</a>.
            </p>
          </section>

          {/* Modifications */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Modifications de cette Politique</h2>
            <p className="text-slate-300">
              Cette politique peut être mise à jour pour refléter les changements dans nos pratiques
              ou la législation. Nous vous informerons de toute modification importante par email
              ou via une notification sur notre site.
            </p>
          </section>

          {/* Contact */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Contact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <Mail className="text-indigo-400" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-slate-400">roseval.design@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-400" size={20} />
                <div>
                  <p className="font-medium">Téléphone</p>
                  <p className="text-slate-400">+33 6 68 39 98 99</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-400" size={20} />
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-slate-400">87 RUE DU GENERAL BOURBAKI<br />31200 TOULOUSE</p>
                </div>
              </div>
            </div>
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

export default PrivacyPolicy;
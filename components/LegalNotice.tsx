import React from 'react';
import { ArrowLeft, Building, FileText, Scale, Users, MapPin, Mail, Phone, Calendar } from 'lucide-react';

const LegalNotice: React.FC = () => {
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
            <Scale className="text-indigo-400" size={32} />
            <h1 className="text-4xl font-black outfit">Mentions Légales</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="space-y-12">

          {/* Éditeur du site */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <Building className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Éditeur du Site</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p><strong className="text-indigo-400">Entreprise :</strong> Roseval Design</p>
                    <p><strong className="text-indigo-400">Forme juridique :</strong> Entrepreneur individuel</p>
                    <p><strong className="text-indigo-400">SIRET :</strong> 947 650 594 00015</p>
                    <p><strong className="text-indigo-400">N° TVA :</strong> FR37947650594</p>
                  </div>
                  <div className="space-y-3">
                    <p><strong className="text-indigo-400">Représentant légal :</strong> Antonny Freval Ros</p>
                    <p><strong className="text-indigo-400">Date de création :</strong> 07 décembre 2022</p>
                    <p><strong className="text-indigo-400">Activité :</strong> Activités spécialisées de design (7410Z)</p>
                    <p><strong className="text-indigo-400">RCS :</strong> Non soumis à inscription RCS (entrepreneur individuel)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Coordonnées */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Coordonnées</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-indigo-400" size={16} />
                      <div>
                        <p className="font-medium">Adresse du siège social</p>
                        <p className="text-slate-300">87 RUE DU GENERAL BOURBAKI<br />31200 TOULOUSE</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="text-indigo-400" size={16} />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-slate-300">roseval.design@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-indigo-400" size={16} />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-slate-300">+33 6 68 39 98 99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <FileText className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
                <div className="space-y-3">
                  <p><strong className="text-indigo-400">Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong className="text-indigo-400">Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong className="text-indigo-400">Site web :</strong> <a href="https://vercel.com" className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">https://vercel.com</a></p>
                  <p><strong className="text-indigo-400">Numéro de téléphone :</strong> +1 (559) 288-7060</p>
                </div>
              </div>
            </div>
          </section>

          {/* Directeur de publication */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <Users className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Directeur de Publication</h2>
                <div className="space-y-3">
                  <p><strong className="text-indigo-400">Nom :</strong> Antonny Freval Ros</p>
                  <p><strong className="text-indigo-400">Qualité :</strong> Gérant et fondateur de Roseval Design</p>
                  <p><strong className="text-indigo-400">Contact :</strong> roseval.design@gmail.com</p>
                </div>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Propriété Intellectuelle</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Contenu du Site</h3>
                <p className="text-slate-300 leading-relaxed">
                  L'ensemble des éléments constituant ce site (textes, images, graphismes, logos, icônes, sons, logiciels)
                  est la propriété exclusive de Roseval Design ou de ses partenaires. Toute reproduction, distribution,
                  modification ou exploitation, même partielle, est strictement interdite sans autorisation préalable.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Marques et Logos</h3>
                <p className="text-slate-300 leading-relaxed">
                  "Roseval Design" est une marque déposée. Toute utilisation de cette marque ou de ses dérivés
                  sans autorisation constitue une contrefaçon sanctionnée par les articles L.713-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </div>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Responsabilité</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Contenu du Site</h3>
                <p className="text-slate-300 leading-relaxed">
                  Roseval Design s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site,
                  dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
                  Cependant, Roseval Design ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                  mises à disposition sur ce site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Liens Hypertextes</h3>
                <p className="text-slate-300 leading-relaxed">
                  Les liens hypertextes présents sur ce site en direction d'autres ressources présentes sur le réseau Internet
                  ne sauraient engager la responsabilité de Roseval Design quant aux contenus de ces sites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Disponibilité du Site</h3>
                <p className="text-slate-300 leading-relaxed">
                  Roseval Design s'efforce d'assurer la disponibilité du site 24h/24h et 7j/7j, mais ne peut être tenu
                  responsable des interruptions dues à des opérations de maintenance, des pannes techniques,
                  des interruptions du réseau ou autres causes extérieures.
                </p>
              </div>
            </div>
          </section>

          {/* Données Personnelles */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Données Personnelles</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD (Règlement Général
              sur la Protection des Données), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
              aux données personnelles vous concernant.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Pour exercer ces droits ou pour toute question relative au traitement de vos données,
              vous pouvez nous contacter à l'adresse :{' '}
              <a href="mailto:roseval.design@gmail.com" className="text-indigo-400 hover:underline">
                roseval.design@gmail.com
              </a>
            </p>
          </section>

          {/* Cookies */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Cookies</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              L'utilisation de ce site est susceptible de provoquer l'installation de cookie(s) sur l'ordinateur de l'utilisateur.
              Un cookie est un fichier de petite taille, qui ne permet pas l'identification de l'utilisateur, mais qui enregistre
              des informations relatives à la navigation d'un ordinateur sur un site.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Pour plus d'informations sur l'utilisation des cookies, consultez notre{' '}
              <a href="/politique-cookies" className="text-indigo-400 hover:underline">Politique des Cookies</a>.
            </p>
          </section>

          {/* Droit Applicable */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Droit Applicable et Juridiction</h2>
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Les présentes mentions légales sont régies par le droit français. En cas de litige,
                les tribunaux français seront seuls compétents.
              </p>
              <div className="p-4 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <p className="text-sm">
                  <strong>Juridiction compétente :</strong> Tribunal de commerce de Toulouse
                </p>
              </div>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="glass rounded-3xl p-8 border border-white/10">
            <div className="flex items-start gap-4 mb-6">
              <Calendar className="text-indigo-400 mt-1" size={24} />
              <div>
                <h2 className="text-2xl font-bold mb-4">Mise à Jour</h2>
                <p className="text-slate-300 leading-relaxed">
                  Ces mentions légales ont été mises à jour le {new Date().toLocaleDateString('fr-FR')}.
                  Elles peuvent être modifiées à tout moment sans préavis. Nous vous invitons à les consulter régulièrement.
                </p>
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

export default LegalNotice;
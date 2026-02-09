import React from 'react';

const SEOHead: React.FC = () => {
  return (
    <>
      {/* Métadonnées SEO supplémentaires injectées dynamiquement */}
      <meta name="google-site-verification" content="google4cacc43b8fdafeda" />

      {/* Métadonnées pour les moteurs de recherche locaux */}
      <meta name="DC.title" content="Roseval Design - Agence Web Toulouse" />
      <meta name="DC.creator" content="Antonny Freval Ros" />
      <meta name="DC.subject" content="Création sites web Toulouse" />
      <meta name="DC.description" content="Agence web premium spécialisée en création de sites internet, SEO et automatisation IA à Toulouse" />

      {/* Métadonnées pour la performance */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="format-detection" content="telephone=no" />

      {/* Favicon et icônes */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </>
  );
};

export default SEOHead;
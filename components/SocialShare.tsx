import React from 'react';
import { Facebook, Twitter, Linkedin, Link2, Share2 } from 'lucide-react';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  url = window.location.href,
  title = "Roseval Design - Agence Web Premium Toulouse",
  description = "🚀 Agence web d'élite à Toulouse. Création sites vitrines, e-commerce & SEO. Automatisation IA. Devis gratuit 24h."
}) => {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&via=rosevaldesign`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert('Lien copié dans le presse-papiers !');
    } catch (err) {
      // Fallback pour les navigateurs plus anciens
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (err) {
        console.log('Erreur partage natif:', err);
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-400 mr-2">Partager :</span>

      {/* Partage natif mobile / Copie lien desktop */}
      <button
        onClick={shareNative}
        className="w-10 h-10 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 flex items-center justify-center transition-colors group"
        title={navigator.share ? "Partager" : "Copier le lien"}
      >
        {navigator.share ? (
          <Share2 size={18} className="text-indigo-400 group-hover:text-indigo-300" />
        ) : (
          <Link2 size={18} className="text-indigo-400 group-hover:text-indigo-300" />
        )}
      </button>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 flex items-center justify-center transition-colors group"
        title="Partager sur Facebook"
      >
        <Facebook size={18} className="text-blue-400 group-hover:text-blue-300" />
      </a>

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-sky-600/20 hover:bg-sky-600/30 flex items-center justify-center transition-colors group"
        title="Partager sur Twitter"
      >
        <Twitter size={18} className="text-sky-400 group-hover:text-sky-300" />
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-lg bg-blue-700/20 hover:bg-blue-700/30 flex items-center justify-center transition-colors group"
        title="Partager sur LinkedIn"
      >
        <Linkedin size={18} className="text-blue-500 group-hover:text-blue-400" />
      </a>
    </div>
  );
};

export default SocialShare;
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Créer le dossier public s'il n'existe pas
if (!fs.existsSync('public')) {
  fs.mkdirSync('public');
}

// Générer le SVG du logo R
const svgLogo = `
<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#6366f1" rx="6"/>
  <text x="16" y="22" font-family="Arial, sans-serif" font-size="18" font-weight="bold" font-style="italic" fill="white" text-anchor="middle">R</text>
</svg>
`;

// Écrire le SVG temporaire
fs.writeFileSync('temp-logo.svg', svgLogo);

// Générer les favicons de différentes tailles
async function generateFavicons() {
  try {
    // Générer favicon.ico (16x16, 32x32)
    await sharp(Buffer.from(svgLogo))
      .resize(32, 32)
      .png()
      .toFile('public/favicon-32x32.png');

    await sharp(Buffer.from(svgLogo))
      .resize(16, 16)
      .png()
      .toFile('public/favicon-16x16.png');

    // Générer apple-touch-icon
    await sharp(Buffer.from(svgLogo))
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');

    // Générer icon-192 et icon-512 pour PWA
    await sharp(Buffer.from(svgLogo))
      .resize(192, 192)
      .png()
      .toFile('public/icon-192.png');

    await sharp(Buffer.from(svgLogo))
      .resize(512, 512)
      .png()
      .toFile('public/icon-512.png');

    // Créer le fichier site.webmanifest mis à jour
    const manifest = {
      "name": "Roseval Design - Agence Web Premium Toulouse",
      "short_name": "Roseval Design",
      "description": "Agence web d'élite à Toulouse spécialisée dans la création de sites internet haute performance, SEO et automatisation IA",
      "start_url": "/",
      "display": "standalone",
      "background_color": "#0f0f23",
      "theme_color": "#6366f1",
      "icons": [
        {
          "src": "/icon-192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any maskable"
        },
        {
          "src": "/icon-512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any maskable"
        }
      ]
    };

    fs.writeFileSync('public/site.webmanifest', JSON.stringify(manifest, null, 2));

    // Nettoyer le fichier temporaire
    fs.unlinkSync('temp-logo.svg');

    console.log('✅ Favicons et manifest générés avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons:', error);
  }
}

generateFavicons();
const fs = require('fs');
const path = require('path');

const baseUrl = process.env.VITE_SITE_URL || 'https://roseval-design.vercel.app';

// Pages du site
const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/#services', priority: '0.9', changefreq: 'monthly' },
  { url: '/#portfolio', priority: '0.8', changefreq: 'weekly' },
  { url: '/#process', priority: '0.8', changefreq: 'monthly' },
  { url: '/#testimonials', priority: '0.7', changefreq: 'monthly' },
  { url: '/#contact', priority: '0.9', changefreq: 'monthly' }
];

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  pages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  sitemap += '</urlset>';

  // Créer le dossier public s'il n'existe pas
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Écrire le sitemap
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

  console.log('✅ Sitemap généré avec succès dans public/sitemap.xml');
  console.log(`📊 ${pages.length} pages indexées`);
  console.log(`🌐 URL de base: ${baseUrl}`);
}

generateSitemap();
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function takeScreenshot() {
  let browser;
  try {
    console.log('🚀 Lancement du navigateur...');

    // Lancer le navigateur
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();

    // Configurer la taille de la fenêtre
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    console.log('📸 Chargement de la page...');

    // Aller sur la page d'accueil
    await page.goto('http://localhost:3000', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Attendre que le contenu se charge
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('📸 Prise du screenshot...');

    // Prendre le screenshot
    await page.screenshot({
      path: 'public/og-image.jpg',
      type: 'jpeg',
      quality: 90,
      fullPage: false
    });

    // Prendre aussi un screenshot mobile
    await page.setViewport({
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    });

    await page.screenshot({
      path: 'public/og-image-mobile.jpg',
      type: 'jpeg',
      quality: 90,
      fullPage: false
    });

    console.log('✅ Screenshots générés avec succès !');
    console.log('📁 Fichiers créés :');
    console.log('   - public/og-image.jpg (desktop)');
    console.log('   - public/og-image-mobile.jpg (mobile)');

  } catch (error) {
    console.error('❌ Erreur lors de la prise de screenshot:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

takeScreenshot();
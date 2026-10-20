// Gera os PNGs do carrossel do Instagram (1080x1350) a partir de carrossel/carrossel.html.
// Uso: node scripts/gerar_carrossel.js   (precisa do Playwright com o Chromium instalado)
const path = require('path');
const { chromium } = require('playwright');

const pasta = path.resolve(__dirname, '..', 'carrossel');
const nomes = ['01-capa', '02-wania-arantes', '03-pilates-karen-dantes', '04-paleta-do-dia', '05-comunhao', '06-local-e-confirmacao'];

(async () => {
  const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
  const page = await browser.newPage({ viewport: { width: 1200, height: 1500 } });
  await page.goto('file://' + path.join(pasta, 'carrossel.html'));
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => document.fonts.ready);
  for (let i = 0; i < nomes.length; i++) {
    const slide = await page.$('#s' + (i + 1));
    await slide.screenshot({ path: path.join(pasta, nomes[i] + '.png') });
    console.log(nomes[i] + '.png');
  }
  await browser.close();
})();

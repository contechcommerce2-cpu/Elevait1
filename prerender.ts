import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = ['/', '/case-studies'];

async function prerender() {
  const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.html'), 'utf-8');

  const { render } = await import('./dist/server/entry-server.js');

  for (const url of routes) {
    const { html: appHtml, helmet } = render(url);

    let page = template;

    if (helmet) {
      const headTags = [
        helmet.title?.toString() ?? '',
        helmet.meta?.toString() ?? '',
        helmet.link?.toString() ?? '',
      ]
        .filter(Boolean)
        .join('\n    ');

      if (headTags) {
        page = page.replace('</head>', `    ${headTags}\n  </head>`);
      }
    }

    page = page.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const filePath =
      url === '/'
        ? path.resolve(__dirname, 'dist/index.html')
        : path.resolve(__dirname, `dist${url}/index.html`);

    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, page);
    console.log(`Pre-rendered: ${url}`);
  }
}

prerender().catch(console.error);

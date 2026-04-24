import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

interface HelmetData {
  title?: { toString(): string };
  meta?: { toString(): string };
  link?: { toString(): string };
}

export function render(url: string) {
  const helmetContext: { helmet?: HelmetData } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;

  return { html, helmet };
}

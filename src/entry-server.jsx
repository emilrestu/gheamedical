import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

/**
 * @param {string} url
 * @param {string} [ssrManifest]
 * @param {import('react-dom/server').RenderToPipeableStreamOptions} [options]
 */
export function render(url, ssrManifest, context) {
    const helmetContext = context.helmetContext || {};

    return renderToPipeableStream(
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={url}>
                    <App />
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>,
        options
    );
}

// src/server.jsx
import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import App from './App';
import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
    const app = express();
    const vite = await createViteServer({
        server: { middlewareMode: true },
    });

    app.use(vite.middlewares);

    app.use('*', async (req, res) => {
        const url = req.originalUrl;

        try {
            const template = await vite.transformIndexHtml(url, `<div id="root"></div>`);
            const helmetContext = {};
            const appHtml = renderToString(
                <HelmetProvider context={helmetContext}>
                    <App />
                </HelmetProvider>
            );

            const { helmet } = helmetContext;
            const html = template
                .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`)
                .replace('</head>', `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`);

            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        } catch (e) {
            vite.ssrFixStacktrace(e);
            console.error(e);
            res.status(500).end(e.message);
        }
    });

    app.listen(3000, () => {
        console.log('Server is listening on http://localhost:3000');
    });
}

createServer();

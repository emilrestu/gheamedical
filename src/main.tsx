import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TranslateContextProvider from './context/TranslateContextProvider.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <TranslateContextProvider>
                <Routes>
                    <Route path="/*" element={<App />} />
                    <Route path="/:lang_code/*" element={<App />} />
                </Routes>
            </TranslateContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

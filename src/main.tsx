import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import TranslateContextProvider from './context/TranslateContextProvider.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TranslateContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                    <Route path="/:lang_code/*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </TranslateContextProvider>
    </React.StrictMode>
);

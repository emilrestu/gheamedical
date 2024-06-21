import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';
import TranslateContextProvider from './context/TranslateContextProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <TranslateContextProvider>
            <App />
        </TranslateContextProvider>
    </React.StrictMode>
);

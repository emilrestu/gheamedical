import React, { useEffect, useState } from 'react';
import TranslateContext, { TranslateContextType } from './TranslateContext';
import ar from '../data/translate/ar.json';

const TranslateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const cacheLangCode = typeof window !== 'undefined' ? localStorage.getItem('LANG_CODE') : null;
    const [langCode, setLangCode] = useState<TranslateContextType['langCode']>(cacheLangCode || 'en');
    const [translations, setTranslations] = useState<TranslateContextType['translations']>({
        ar,
    });

    const setDefaultLangCode = () => {
        const lang_code = process.env.NODE_ENV === 'production' ? 'ar' : 'en';

        if (process.env.NODE_ENV === 'production') {
            setLangCode(lang_code);
        }
    };

    useEffect(() => {
        setDefaultLangCode();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') localStorage.setItem('LANG_CODE', langCode);
    }, [langCode]);

    return (
        <TranslateContext.Provider
            value={{
                translations,
                setTranslations,
                langCode,
                setLangCode,
            }}
        >
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateContextProvider;

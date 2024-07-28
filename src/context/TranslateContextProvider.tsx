import React, { useEffect, useState } from 'react';
import TranslateContext, { TranslateContextType } from './TranslateContext';
import ar from '../data/translate/ar.json';

const TranslateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [langCode, setLangCode] = useState<TranslateContextType['langCode']>('en');
    const [translations, setTranslations] = useState<TranslateContextType['translations']>({
        ar,
    });

    const setDefaultLangCode = () => {
        const ArrHostName = window?.location.hostname.split('.');
        const lang_code = ArrHostName?.[0] === 'dev' ? 'ar' : ArrHostName?.[0];

        if (ArrHostName.length === 3 && process.env.NODE_ENV === 'production') {
            setLangCode(lang_code);
        }
    };

    useEffect(() => {
        setDefaultLangCode();
    }, []);

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

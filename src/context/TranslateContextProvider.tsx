import React, { useState } from 'react';
import TranslateContext, { TranslateContextType } from './TranslateContext';
import ar from './ar.json';

const TranslateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [translations, setTranslations] = useState<TranslateContextType['translations']>({
        ar,
    });

    return (
        <TranslateContext.Provider
            value={{
                translations,
                setTranslations,
            }}
        >
            {children}
        </TranslateContext.Provider>
    );
};

export default TranslateContextProvider;

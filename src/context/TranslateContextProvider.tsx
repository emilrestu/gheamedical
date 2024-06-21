import React, { useState } from 'react';
import TranslateContext, { TranslateContextType } from './TranslateContext';

const TranslateContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [translations, setTranslations] = useState<TranslateContextType['translations']>({});

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

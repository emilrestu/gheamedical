import { createContext, useContext } from 'react';

export type TranslateContextType = {
    translations: {
        [key: string]: {
            [key: string]: string;
        };
    };
    setTranslations: React.Dispatch<React.SetStateAction<TranslateContextType['translations']>>;
};

const TranslateContext = createContext<TranslateContextType>({
    translations: {},
    setTranslations: () => {},
});

export const useTranslateContext = () => useContext(TranslateContext);

export default TranslateContext;

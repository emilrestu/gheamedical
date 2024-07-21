import { useTranslateContext } from '../context/TranslateContext';

const useTranslate = (textId: string, defaultText: string) => {
    const { langCode, translations } = useTranslateContext();

    return (
        translations?.[langCode || '']?.[
            textId
                ?.replace(/[^a-zA-Z0-9_]/g, '')
                .trim()
                .toUpperCase() || ''
        ] || defaultText
    );
};

export default useTranslate;

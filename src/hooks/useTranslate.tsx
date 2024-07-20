import { useTranslateContext } from '../context/TranslateContext';

const useTranslate = (textId: string, defaultText: string) => {
    const { langCode, translations } = useTranslateContext();

    return translations?.[langCode || '']?.[textId?.toLowerCase() || ''] || defaultText;
};

export default useTranslate;

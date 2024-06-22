import { useTranslateContext } from '../context/TranslateContext';
import { useParams } from 'react-router-dom';

const useTranslate = (textId: string, defaultText: string) => {
    const { translations } = useTranslateContext();
    const { lang_code } = useParams();

    return translations?.[lang_code || '']?.[textId?.toLowerCase() || ''] || defaultText;
};

export default useTranslate;

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const useRedirect = () => {
    const { lang_code } = useParams();
    const navigate = useNavigate();

    const redirect = () => {
        if (!lang_code) {
            navigate('/ar');
        }
    };

    useEffect(() => {
        redirect();
    }, [lang_code]);
};

export default useRedirect;

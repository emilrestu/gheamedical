import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';
import Cookies from 'js-cookie';

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cookiesAccepted, setcookiesAccepted] = useState(false);

    useEffect(() => {
        const consent = Cookies.get('cookieConsent');
        if (consent) {
            setcookiesAccepted(true);
        }
    }, []);

    return (
        <AppContext.Provider
            value={{
                cookiesAccepted,
                setcookiesAccepted,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;

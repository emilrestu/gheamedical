import { createContext, useContext } from 'react';

export type AppContextType = {
    cookiesAccepted: boolean;
    setcookiesAccepted: React.Dispatch<React.SetStateAction<AppContextType['cookiesAccepted']>>;
};

const AppContext = createContext<AppContextType>({
    cookiesAccepted: false,
    setcookiesAccepted: () => {},
});

export const useAppContext = () => useContext(AppContext);

export default AppContext;

import { createContext, useContext } from 'react';

type ThemesContextType = {
    isArabic: boolean;
    setTheme: React.Dispatch<React.SetStateAction<object>>;
};

const ThemesContext = createContext<ThemesContextType>({
    isArabic: false,
    setTheme: () => null,
});

export const useThemesContext = () => useContext(ThemesContext);

export default ThemesContext;

import { createContext, useContext } from 'react';

type ThemesContextType = {
    setTheme: React.Dispatch<React.SetStateAction<object>>;
};

const ThemesContext = createContext<ThemesContextType>({
    setTheme: () => null,
});

export const useThemesContext = () => useContext(ThemesContext);

export default ThemesContext;

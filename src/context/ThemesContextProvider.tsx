import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import React, { useState } from 'react';
import ThemesContext from './ThemesContext';

const colorPrimary = '#0CD3B3';

const initialThemes: ThemeConfig = {
    token: {
        colorPrimary,
        colorInfo: colorPrimary,
    },
};

const ThemesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(initialThemes);

    return (
        <ThemesContext.Provider
            value={{
                setTheme: (newThemes) => {
                    setTheme((prevThemes) => ({ ...prevThemes, ...newThemes }));
                },
            }}
        >
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </ThemesContext.Provider>
    );
};

export default ThemesContextProvider;

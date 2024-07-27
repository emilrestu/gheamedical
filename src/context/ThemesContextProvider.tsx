import type { ThemeConfig } from 'antd';
import { ConfigProvider } from 'antd';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ThemesContext from './ThemesContext';
import { useTranslateContext } from './TranslateContext';

const colorPrimary = '#32998B';

const initialThemes: ThemeConfig = {
    token: {
        fontFamily: 'Montserrat',
        colorPrimary,
        colorInfo: colorPrimary,
        borderRadius: 16,
        borderRadiusLG: 16,
        colorText: '#303133',
        colorTextSecondary: '#A8AAAD',
    },
    components: {
        Input: {
            borderRadius: 4,
        },
        Select: {
            borderRadius: 4,
        },
        DatePicker: {
            borderRadius: 4,
        },
        Card: {
            borderRadius: 8,
            borderRadiusLG: 8,
        },
    },
};

const ThemesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(initialThemes);
    const { langCode } = useTranslateContext();
    const isArabic = useMemo(() => langCode?.toUpperCase() === 'AR', [langCode]);

    const updateHTMLLang = useCallback(() => {
        document.querySelector('html')?.setAttribute('lang', isArabic ? 'ar' : 'en');
        document.querySelector('html')?.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
    }, [isArabic]);

    useEffect(() => {
        updateHTMLLang();
    }, [isArabic, updateHTMLLang]);

    return (
        <ThemesContext.Provider
            value={{
                isArabic,
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

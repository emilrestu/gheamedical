import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import TranslateContextProvider from '../context/TranslateContextProvider';
import ThemesContextProvider from '../context/ThemesContextProvider';
import { FloatButton, Grid, Layout } from 'antd';
import Footer from '../components/footer';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { PHONE_NUMBER } from '@/data/constants';
import { useThemesContext } from '@/context/ThemesContext';
import useTranslate from '@/hooks/useTranslate';
import { GoogleTagManager } from '@next/third-parties/google';
import CookiesBanner from '@/components/cookies-banner';
import AppContextProvider from '@/context/AppContextProvider';
import { useAppContext } from '@/context/AppContext';
import '../themes/main.scss';
import Link from 'next/link';

const { Content } = Layout;

const InnerApp_: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isArabic } = useThemesContext();
    const { cookiesAccepted } = useAppContext();
    const { xs } = Grid.useBreakpoint();
    const textLine1 = useTranslate('GREETINGS', 'Greetings');
    const textLine2 = useTranslate(
        'IHAVEACASETHATREQUIRESHOMEHEALTHCAREANDIWOULDLIKETOINQUIREMOREABOUTTHESERVICESYOUPROVIDEINTHISAREARELATEDTOHOMEHEALTHCARE',
        'I have a case that requires home healthcare, and I would like to inquire more about the services you provide in this area related to home healthcare'
    );
    const textLine3 = useTranslate('THANKYOUFORYOURCOOPERATION', 'Thank you for your cooperation');

    if (xs === undefined) return <></>;

    return (
        <>
            <Layout id="app-layout" className={`${isArabic ? 'arabic' : 'english'} ${xs ? 'mobile' : ''}`.trim()}>
                <Navbar />

                <Content className="content-wrapper">{children}</Content>

                <Footer />
            </Layout>

            <Link href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURI(`${textLine1}\n\n${textLine2}\n\n${textLine3}`)}`} passHref target="_blank">
                <FloatButton
                    className="whatsapp-button"
                    icon={<WhatsAppOutlined style={{ color: 'white' }} />}
                    style={{ color: 'white', width: 65, height: 65 }}
                />
            </Link>

            <Link href={`tel:${PHONE_NUMBER}`} passHref target="_blank">
                <FloatButton
                    type="primary"
                    className="phone-button"
                    icon={<PhoneOutlined style={{ color: 'white' }} />}
                    style={{ color: 'white', width: 65, height: 65, marginBottom: 80 }}
                />
            </Link>

            <FloatButton.BackTop
                className="backtop-button"
                visibilityHeight={1000}
                style={{ color: 'white', width: 65, height: 65, marginBottom: 160 }}
            />
            {cookiesAccepted && (
                <>
                    <GoogleTagManager gtmId="GTM-5DQKNRZJ" />
                    {/* <GoogleTagManager gtmId="G-LC2Y275PM4" />
                    <GoogleTagManager gtmId="AW-10944457511" /> */}
                </>
            )}
        </>
    );
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <AppContextProvider>
            <TranslateContextProvider>
                <ThemesContextProvider>
                    <InnerApp_>
                        <Component {...pageProps} />
                        <CookiesBanner />
                    </InnerApp_>
                </ThemesContextProvider>
            </TranslateContextProvider>
        </AppContextProvider>
    );
};

export default App;

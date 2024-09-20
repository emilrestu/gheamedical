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
import '../themes/main.scss';

const { Content } = Layout;

const InnerApp_: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isArabic } = useThemesContext();
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

            <FloatButton
                className="whatsapp-button"
                icon={<WhatsAppOutlined style={{ color: 'white' }} />}
                style={{ color: 'white', width: 65, height: 65 }}
                onClick={() => {
                    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURI(`${textLine1}\n\n${textLine2}\n\n${textLine3}`)}`, '_blank');
                }}
            />

            <FloatButton
                type="primary"
                className="phone-button"
                icon={<PhoneOutlined style={{ color: 'white' }} />}
                style={{ color: 'white', width: 65, height: 65, marginBottom: 80 }}
                onClick={() => {
                    window.open(`tel:${PHONE_NUMBER}`, '_blank');
                }}
            />

            <FloatButton.BackTop
                className="backtop-button"
                visibilityHeight={1000}
                style={{ color: 'white', width: 65, height: 65, marginBottom: 160 }}
            />
        </>
    );
};

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <TranslateContextProvider>
            <ThemesContextProvider>
                <InnerApp_>
                    <Component {...pageProps} />
                </InnerApp_>
            </ThemesContextProvider>
        </TranslateContextProvider>
        <GoogleTagManager gtmId="GTM-5B7GKLF" />
        <GoogleTagManager gtmId="G-LC2Y275PM4" />
        <GoogleTagManager gtmId="AW-10944457511" />
    </>
);

export default App;

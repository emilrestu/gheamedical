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
    const textHello = useTranslate('HELLO', 'Hello');
    const textLine2 = useTranslate(
        'IWOULDLIKETOINQUIREABOUTTHESERVICESYOUOFFERANDHOWICANBOOKTHEMCOULDYOUPLEASEPROVIDEMEWITHMOREDETAILS',
        'I would like to inquire about the services you offer and how I can book them. Could you please provide me with more details'
    );
    const textThankyou = useTranslate('THANKYOUMSG', 'Thank You');

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
                    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURI(`${textHello}\n\n${textLine2}\n\n${textThankyou}`)}`, '_blank');
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
        <GoogleTagManager gtmId="AW-10944457511" />
        {/* <GoogleTagManager gtmId="GTM-5B7GKLF" /> */}
    </>
);

export default App;

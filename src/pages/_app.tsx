import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import TranslateContextProvider from '../context/TranslateContextProvider';
import ThemesContextProvider from '../context/ThemesContextProvider';
import { FloatButton, Layout } from 'antd';
import Footer from '../components/footer';
import { PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { PHONE_NUMBER } from '@/data/constants';
import '../themes/main.scss';

const { Content } = Layout;

const App = ({ Component, pageProps }: AppProps) => (
    <TranslateContextProvider>
        <ThemesContextProvider>
            <Layout>
                <Navbar />

                <Content className="content-wrapper">
                    <Component {...pageProps} />
                </Content>

                <Footer />
            </Layout>

            <FloatButton
                className="whatsapp-button"
                icon={<WhatsAppOutlined style={{ color: 'white' }} />}
                style={{ color: 'white', width: 65, height: 65 }}
                onClick={() => {
                    window.open(`https://wa.me/${PHONE_NUMBER}`, '_blank');
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
        </ThemesContextProvider>
    </TranslateContextProvider>
);

export default App;

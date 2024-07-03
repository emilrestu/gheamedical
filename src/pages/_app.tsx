import React from 'react';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import TranslateContextProvider from '../context/TranslateContextProvider';
import ThemesContextProvider from '../context/ThemesContextProvider';
import { FloatButton, Layout } from 'antd';
import Footer from '../components/footer';
import '../themes/main.scss';
import { WhatsAppOutlined } from '@ant-design/icons';

const { Content } = Layout;

const App = ({ Component, pageProps }: AppProps) => (
    <TranslateContextProvider>
        <ThemesContextProvider>
            <Layout>
                <Navbar />

                <Content>
                    <Component {...pageProps} />
                </Content>

                <Footer />
            </Layout>

            <FloatButton
                className="whatsapp-button"
                icon={<WhatsAppOutlined style={{color: 'white'}} />}
                style={{ color: 'white', width: 65, height: 65 }}
                onClick={() => {
                    window.open('https://wa.me/+966541142624', '_blank');
                }}
            />
        </ThemesContextProvider>
    </TranslateContextProvider>
);

export default App;

import { Suspense } from 'react';
import Routing from './components/routing';
import Loading from './components/loading/Loading';
import Navbar from './components/navbar';
import TranslateContextProvider from './context/TranslateContextProvider';
import ThemesContextProvider from './context/ThemesContextProvider';
import { Layout } from 'antd';

const { Footer, Content } = Layout;

const App = () => {
    return (
        <TranslateContextProvider>
            <ThemesContextProvider>
                <Layout>
                    <Navbar />

                    <Content>
                        <Suspense fallback={<Loading />}>
                            <Routing />
                        </Suspense>
                    </Content>

                    <Footer></Footer>
                </Layout>
            </ThemesContextProvider>
        </TranslateContextProvider>
    );
};

export default App;

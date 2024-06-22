import { Suspense } from 'react';
import Routing from './components/routing';
import Loading from './components/loading/Loading';
import useRedirect from './hooks/useRedirect';
import Navbar from './components/navbar';

const App = () => {
    useRedirect();

    return (
        <Suspense fallback={<Loading />}>
            <Navbar />
            <main>
                <Routing />
            </main>
            <footer></footer>
        </Suspense>
    );
};

export default App;

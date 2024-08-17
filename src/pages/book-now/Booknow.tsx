import Page from '@/components/page';
import React from 'react';
import MainHeader from './components/MainHeader';
import CareGivers from './components/CareGivers';

const Booknow: React.FC = () => {
    return (
        <Page>
            <MainHeader />
            <CareGivers />
        </Page>
    );
};

export default Booknow;

import Page from '@/components/page';
import React from 'react';
import MainHeader from './components/MainHeader';
import CareGivers from './components/CareGivers';

const Reservations: React.FC = () => {
    return (
        <Page>
            <MainHeader />
            <CareGivers />
        </Page>
    );
};

export default Reservations;

import Page from '@/components/page';
import React from 'react';
import Banner from './components/Banner';
import ServiceDetail from './components/ServiceDetail';

const Services: React.FC = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail />
        </Page>
    );
};

export default Services;

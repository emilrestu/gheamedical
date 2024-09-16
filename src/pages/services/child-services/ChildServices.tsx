import React from 'react';
import Page from '@/components/page';
import ServiceDetail from '../components/ServiceDetail';
import Banner from '../components/Banner';

const ChildServices = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail serviceId="personal-service" />
            <div />
        </Page>
    );
};

export default ChildServices;

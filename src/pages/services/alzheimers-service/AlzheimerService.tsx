import Page from '@/components/page';
import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import Banner from '../components/Banner';

const AlzheimerService = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail serviceId="alzheimers-service" />
            <div />
        </Page>
    );
};

export default AlzheimerService;

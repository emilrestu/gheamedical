import Page from '@/components/page';
import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import Banner from '../components/Banner';

const PersonalService = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail serviceId="personal-service" />
            <div />
        </Page>
    );
};

export default PersonalService;

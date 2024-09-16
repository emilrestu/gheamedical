import React from 'react';
import Page from '@/components/page';
import ServiceDetail from '../components/ServiceDetail';
import Banner from '../components/Banner';

const PersonalServiceAssistance = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail serviceId="personal-service-assistance" />
            <div />
        </Page>
    );
};

export default PersonalServiceAssistance;

import Page from '@/components/page';
import React from 'react';
import ServiceDetail from '../components/ServiceDetail';
import Banner from '../components/Banner';

const ServiceForTheElderly = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail serviceId="service-for-the-elderly" />
            <div />
        </Page>
    );
};

export default ServiceForTheElderly;

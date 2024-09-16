import React from 'react';
import Page from '@/components/page';
import ServiceDetail from '../components/ServiceDetail';
import Banner from '../components/Banner';

const ServiceForAllAges = () => {
    return (
        <Page>
            <Banner />
            <ServiceDetail serviceId="service-for-all-ages" />
            <div />
        </Page>
    );
};

export default ServiceForAllAges;

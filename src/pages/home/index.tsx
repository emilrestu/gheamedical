import React from 'react';
import useTranslate from '@/hooks/useTranslate';
import Page from '@/components/page';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';

const Home: React.FC = () => {
    const textGheaMedicalServicesCompanyHealthCareCenter = useTranslate(
        'GheaMedicalServicesCompanyHealthCareCenter',
        'Ghea Medical Services Company - Health Care Center'
    );

    return (
        <Page pageTitle={textGheaMedicalServicesCompanyHealthCareCenter}>
            <Banner />

            <Testimonial />
        </Page>
    );
};

export default Home;

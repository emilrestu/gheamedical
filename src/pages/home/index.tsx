import React from 'react';
import useTranslate from '@/hooks/useTranslate';
import Page from '@/components/page';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import WelcomeBanner from './components/WelcomeBanner';

const Home: React.FC = () => {
    const textGheaMedicalServicesCompanyHealthCareCenter = useTranslate(
        'GheaMedicalServicesCompanyHealthCareCenter',
        'Ghea Medical Services Company - Health Care Center'
    );

    return (
        <Page pageTitle={textGheaMedicalServicesCompanyHealthCareCenter}>
            <Banner />
            <WelcomeBanner />
            <Testimonial />
        </Page>
    );
};

export default Home;

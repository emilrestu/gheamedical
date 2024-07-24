import React from 'react';
import useTranslate from '@/hooks/useTranslate';
import Page from '@/components/page';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import WelcomeBanner from './components/WelcomeBanner';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';

const Home: React.FC = () => {
    const textGheaMedicalServicesCompanyHealthCareCenter = useTranslate(
        'GheaMedicalServicesCompanyHealthCareCenter',
        'Ghea Medical Services Company - Health Care Center'
    );

    return (
        <Page pageTitle={textGheaMedicalServicesCompanyHealthCareCenter}>
            <Banner />
            <WelcomeBanner />
            <WhyChoose />
            <Services />
            <HowWeWork />
            <Testimonial />
        </Page>
    );
};

export default Home;

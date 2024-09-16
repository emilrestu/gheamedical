import React from 'react';
import Page from '@/components/page';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';
import WelcomeBanner from './components/WelcomeBanner';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import HowWeWork from './components/HowWeWork';
import PopupBanner from './components/PopupBanner';

const Home: React.FC = () => {
    return (
        <Page>
            <Banner />
            <WelcomeBanner />
            <WhyChoose />
            <Services />
            <HowWeWork />
            <Testimonial />
            <PopupBanner />
        </Page>
    );
};

export default Home;

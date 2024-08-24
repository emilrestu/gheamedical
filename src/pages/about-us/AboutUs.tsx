import Page from '@/components/page';
import React from 'react';
import MainHeader from './components/MainHeader';
import Highlight from './components/Highlight';
import OurValues from './components/OurValues';
import Strength from './components/Strength';

const AboutUs: React.FC = () => {
    return (
        <Page>
            <MainHeader />
            <Highlight />
            <OurValues />
            <Strength />
        </Page>
    );
};

export default AboutUs;

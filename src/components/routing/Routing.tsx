import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home';
import AboutUs from '../../pages/about-us';
import Services from '../../pages/services';
import ContactUs from '../../pages/contact-us';

const Routing: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    );
};

export default Routing;

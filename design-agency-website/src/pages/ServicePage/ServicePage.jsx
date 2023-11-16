/* eslint-disable no-unused-vars */
import React from 'react';
import AllService from './AllService';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';

const ServicePage = () => {
    return (
        <div>
            <MainMenuContent/>
            <AllService />
            <Footer />
        </div>
    );
};

export default ServicePage;
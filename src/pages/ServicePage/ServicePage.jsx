/* eslint-disable no-unused-vars */
import React from 'react';
import AllService from './AllService';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import SubscribeSection from '../../components/SubscribeSection';

const ServicePage = () => {
    return (
        <div className='bg-gray-200'>
            <MainMenuContent/>
            <AllService />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default ServicePage;
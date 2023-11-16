/* eslint-disable no-unused-vars */
import React from 'react';
import TestimonialList from './TestimonialList';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import SubscribeSection from '../../components/SubscribeSection';

const TestimonialPage = () => {
    return (
        <div className='bg-gray-200'>
            <MainMenuContent/>
            <TestimonialList />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default TestimonialPage;
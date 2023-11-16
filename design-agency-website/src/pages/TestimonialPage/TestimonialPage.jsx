/* eslint-disable no-unused-vars */
import React from 'react';
import TestimonialList from './TestimonialList';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';

const TestimonialPage = () => {
    return (
        <div>
            <MainMenuContent/>
            <TestimonialList />
            <Footer />
        </div>
    );
};

export default TestimonialPage;
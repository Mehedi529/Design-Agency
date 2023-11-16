/* eslint-disable no-unused-vars */
import React from 'react';
import HeroList from './HeroList';
import WorkList from './WorkList';
import StatList from './StatList';
import FeaturedProject from './FeaturedProject';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import SubscribeSection from '../../components/SubscribeSection';

const HomePage = () => {
    return (
        <div className='bg-gray-200'>
            <MainMenuContent/>
            <HeroList />
            <WorkList />
            <StatList />
            <FeaturedProject />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default HomePage;
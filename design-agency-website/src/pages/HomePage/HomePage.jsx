/* eslint-disable no-unused-vars */
import React from 'react';
import HeroList from './HeroList';
import WorkList from './WorkList';
import StatList from './StatList';
import FeaturedProject from './FeaturedProject';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';

const HomePage = () => {
    return (
        <div>
            <MainMenuContent/>
            <HeroList />
            <WorkList />
            <StatList />
            <FeaturedProject />
            <Footer />
        </div>
    );
};

export default HomePage;
/* eslint-disable no-unused-vars */
import React from 'react';
import HeroList from './HeroList';
import WorkList from './WorkList';
import StatList from './StatList';
import FeaturedProject from './FeaturedProject';

const HomePage = () => {
    return (
        <div>
            <HeroList />
            <WorkList />
            <StatList />
            <FeaturedProject />
        </div>
    );
};

export default HomePage;
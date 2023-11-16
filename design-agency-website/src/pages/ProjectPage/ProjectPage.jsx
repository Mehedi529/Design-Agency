/* eslint-disable no-unused-vars */
import React from 'react';
import AllProject from './AllProject';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import SubscribeSection from '../../components/SubscribeSection';


const ProjectPage = () => {
    return (
        <div className='bg-gray-200'>
            <MainMenuContent/>
            <AllProject />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default ProjectPage;
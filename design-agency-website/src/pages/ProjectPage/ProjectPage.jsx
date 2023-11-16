/* eslint-disable no-unused-vars */
import React from 'react';
import AllProject from './AllProject';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';


const ProjectPage = () => {
    return (
        <div>
            <MainMenuContent/>
            <AllProject />
            <Footer />
        </div>
    );
};

export default ProjectPage;
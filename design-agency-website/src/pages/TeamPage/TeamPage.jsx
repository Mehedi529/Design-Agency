/* eslint-disable no-unused-vars */
import React from 'react';
import TeamList from './TeamList';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';

const TeamPage = () => {
    return (
        <div>
            <MainMenuContent/>
            <TeamList />
            <Footer />
        </div>
    );
};

export default TeamPage;
/* eslint-disable no-unused-vars */
import React from 'react';
import TeamList from './TeamList';
import MainMenuContent from '../../components/MainMenuContent';
import Footer from '../../components/Footer';
import SubscribeSection from '../../components/SubscribeSection';

const TeamPage = () => {
    return (
        <div className='bg-gray-200'>
            <MainMenuContent/>
            <TeamList />
            <SubscribeSection />
            <Footer />
        </div>
    );
};

export default TeamPage;
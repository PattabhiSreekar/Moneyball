import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import Teams from './Teams';
import Matches from './Matches';

const Home = () => {
  const [currentView, setCurrentView] = useState('teams');

  const handleTeamsClick = () => {
    setCurrentView('teams');
  };

  const handleMatchesClick = () => {
    setCurrentView('matches');
  };

    return (
      <div>
      <Toolbar onTeamsClick={handleTeamsClick} onMatchesClick={handleMatchesClick} />
      {currentView === 'teams' && <Teams />}
      {currentView === 'matches' && <Matches />}
    </div>
    );
};

export default Home;
import React, { useState } from 'react';
import Toolbar from '../components/Toolbar';
import Teams from './Teams';
import Matches from './Matches';
import Player from './Players';

const Home = () => {
  const [currentView, setCurrentView] = useState('teams');

  const handleTeamsClick = () => {
    setCurrentView('teams');
  };

  const handleMatchesClick = () => {
    setCurrentView('matches');
  };

  const handlePlayerClick = () => {
    setCurrentView('players');
  };

    return (
      <div>
      <Toolbar onTeamsClick={handleTeamsClick} onMatchesClick={handleMatchesClick} />
      {currentView === 'teams' && <Teams />}
      {currentView === 'matches' && <Matches />}
      {currentView == 'players' && <Player/>}
    </div>
    );
};

export default Home;
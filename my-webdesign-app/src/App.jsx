import React, { useState } from 'react';
import Challenges from './components/Challenges';
import Leaderboard from './components/Leaderboard';
import Resources from './components/Resources';
import Community from './components/Community';
import './App.css';

function App() {
  const [users, setUsers] = useState([
    { name: 'You', points: 0 },
    { name: 'Jovan', points: 120 },
    { name: 'Putra', points: 100 },
    { name: 'Abby', points: 80 },
  ]);

  const handleCompleteChallenge = (earnedPoints) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.name === 'You' ? { ...user, points: user.points + earnedPoints } : user
      )
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Sustainability Challenge</h1>
      </header>
      <Challenges onCompleteChallenge={handleCompleteChallenge} />
      <Leaderboard users={users} />
      <Resources />
      <Community />
    </div>
  );
}

export default App;
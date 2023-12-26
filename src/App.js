import React  from 'react';
import myGif from "./myGif.gif"
import './App.css';
import CountdownTimer from './CountdownTimer';

function App() {

  const targetDate = "2023-12-31T23:59:59";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zarlox Invaders</h1>
        <img src={myGif} alt="Zarlot Invader" />
        <CountdownTimer targetDate={targetDate} />
        {/* Add your countdown component here */}
        <div className="buttons">
          <a href="https://twitter.com/ZarloxInvaders" target="_blank" rel="noopener noreferrer" className="btn">Twitter</a>
          <a href="https://discord.com/yourdiscordlink" target="_blank" rel="noopener noreferrer" className="btn">Discord [COMING SOON]</a>
        </div>
      </header>
    </div>
  );
}

export default App;

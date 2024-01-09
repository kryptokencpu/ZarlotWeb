import React  from 'react';
import myGif from "./myGif.gif";
import SOL from "./solana.jpg";
import SEI from "./sei.png";
import BTC from "./btc.png";
import AVAX from "./avax.png";
import './App.css';


function App() {

  const steps = [
    { title: 'SOL', description: '1.12.24', src: SOL},
    { title: 'SEI', description: 'TBD', src: SEI},
    { title: 'BRC20', description: 'TBD', src: BTC},
    { title: 'AVAX', description: 'TBD', src: AVAX},
    // ... Add more steps as needed, each with its own image property
  ];

  const progressBar = (
    <div className="progress-bar">
      {steps.map((step, index) => (
     <div key={index} className="progress-step">
    <div className="step-title">{step.title}</div>
    <img className="step-circle" src={step.src} alt={step.title} />
    <div className="step-description">{step.description}</div>
  </div>
))}

    </div>
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zarlox Invaders</h1>
        <h2>Phase One: Solana Mint</h2>
        <h3>500 NFTs</h3>
        <h3>0.25 SOL Mint</h3>
        <img src={myGif} alt="Zarlot Invader" className="myImage"/>
        {/* Progress Bar */}
        {progressBar}
        {/* Add your countdown component here */}
        <div className="buttons">
          <a href="https://twitter.com/ZarloxInvaders" target="_blank" rel="noopener noreferrer" className="btn">Twitter</a>
          <a href="https://twitter.com/ZarloxInvaders" target="_blank" rel="noopener noreferrer" className="btn">WL (Coming Soon)</a>
        </div>
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react'
import './App.css';
import StartPage from "./Pages/StartPage";
import GamePage from './Pages/GamePage';

function App() {
  const [currentPage, setCurrentPage] = useState('start-page');
  const [playerName, setPlayerName] = useState('');

  const getCurrentPage = (page) => {
    switch (page) {
      case 'start-page':
        return <StartPage setCurrentPage={setCurrentPage} setPlayerName={setPlayerName} playerName={playerName}/>
      case 'game-page':
        return <GamePage setCurrentPage={setCurrentPage} playerName={playerName} />
      default:
        return <p> empty page </p>
    }
  }

  return (
    <main style={{backgroundImage: 'url(/BG3.jpeg)'}}>
      {getCurrentPage(currentPage) }
    </main>
  )
}

export default App

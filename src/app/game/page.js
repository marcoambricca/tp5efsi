'use client'

import { useState, useEffect } from "react"
import fetchFlags from '../api/fetchFlags.js'
import FlagCard from '../components/flag-card.jsx';

export default function Game() {
  const [flags, setFlags] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [points, setPoints] = useState(0)

  const rdmFlag = () => {
    if (flags.length > 0){
      const random = Math.floor(Math.random() * flags.length);
      setCurrentFlag(flags[random]);
    }
  }

  useEffect(() => {
    fetchFlags(setFlags);
  }, []);

  useEffect(() => {
    if (flags.length > 0){
      rdmFlag();
    }
  }, [flags]);

  const checkAnswer = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements['guess-input'].value;
    if (inputValue.toLowerCase() === currentFlag.name.toLowerCase()) {
      setPoints(points + 10);
    }
    else if (inputValue != currentFlag.name || inputValue === ''){
      if (points > 0){
        setPoints(points - 1);
      }
    }
    rdmFlag();
  };

  return (
    <div className="game">
      <span className="scoreboard">{points}</span>
      <FlagCard obj={currentFlag} />
      <form onSubmit={checkAnswer}>
        <input id="guess-input" name="guess-input" />
        <button type="submit">Adivinar</button>
      </form>
    </div>
  );
}
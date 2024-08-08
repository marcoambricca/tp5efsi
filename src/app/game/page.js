'use client'

import { useState, useEffect } from "react"
import fetchFlags from '../api/fetchFlags.js'
import FlagCard from '../components/flag-card.jsx';

export default function Game() {
  const [flags, setFlags] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});
  const [points, setPoints] = useState(0)
  const [counter, setCounter] = useState(15);

  //Gets random flag from flags array
  const rdmFlag = () => {
    if (flags.length > 0){
      const random = Math.floor(Math.random() * flags.length);
      setCurrentFlag(flags[random]);
      setCounter(15);
    }
  }

  // Timer
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0){
      rdmFlag();
    }
    return () => clearInterval(timer);
  }, [counter]);

  //Loads flags into state array
  useEffect(() => {
    fetchFlags(setFlags);
  }, []);

  //Gets first random flag when the flags state array loads
  useEffect(() => {
    if (flags.length > 0){
      rdmFlag();
    }
  }, [flags]);

  //Checks user input against currentFlag state variable
  const checkAnswer = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements['guess-input'];
    if (inputValue.value.toLowerCase() === currentFlag.name.toLowerCase()) {
      setPoints(points + 10 + counter);
    }
    else if (inputValue.value != currentFlag.name || inputValue.value === ''){
      if (points > 0){
        setPoints(points - 1);
      }
    }
    inputValue.value = '';
    rdmFlag();
  };

  return (
    <div className="game">
      <div className="scoreboard">{points}</div>
      <div className="timer">Time remaining: {counter}</div>
      <FlagCard obj={currentFlag} />
      <form onSubmit={checkAnswer}>
        <input id="guess-input" name="guess-input" />
        <button type="submit">Adivinar</button>
      </form>
    </div>
  );
}
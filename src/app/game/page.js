'use client'

import { useState, useEffect } from "react"
import fetchFlags from '../api/fetchFlags.js'
import FlagCard from '../components/flag-card.jsx';

export default function Game() {
  const [flags, setFlags] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});

  const rdmFlag = () => {
    if (flags.length > 0){
      const random = Math.floor(Math.random() * flags.length);
      setCurrentFlag(flags[random]);
    }
  }

  useEffect(() => {
    fetchFlags(setFlags);
    rdmFlag();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === currentFlag.name){
      rdmFlag();
    }
  }

  return (
    <div className="game">
      <button onClick={rdmFlag}>Random</button>
      <FlagCard obj={currentFlag}/>
      <form onSubmit={handleSubmit}>
        <input id="guess-input"/>
        <button type="submit">Adivinar</button>
      </form>
    </div>
  );
}
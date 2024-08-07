'use client'

import { useState, useEffect } from "react"
import fetchFlags from '../api/fetchFlags.js'
import FlagCard from '../components/flag-card.jsx';

export default function Game() {
  const [flags, setFlags] = useState([]);
  const [currentFlag, setCurrentFlag] = useState({});

  const rdmFlag = () => {
    const random = Math.floor(Math.random() * flags.length);
    setCurrentFlag(flags[random]);
  }

  useEffect(() => {
    fetchFlags(setFlags);
    rdmFlag();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    if (e.target.value === currentFlag.name){
      rdmFlag();
      console.log('correcto');
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
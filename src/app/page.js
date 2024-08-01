'use client'

import { useState, useEffect } from "react"
import fetchFlags from "./api/fetchFlags.js";
import FlagCard from "./components/flag-card.jsx";

export default function Home() {
  const [flags, setFlags] = useState([]);
  const [rdm, setRdm] = useState(0);

  const rdmNumber = () => {
    const random = Math.floor(Math.random() * flags.length);
    setRdm(random);
    console.log(rdm);
  }

  useEffect(() => {
    fetchFlags(setFlags);
  }, []);

  return (
    <div>
      <button onClick={rdmNumber}>Random</button>
      <FlagCard obj={flags[rdm]}/>
    </div>
  );
}
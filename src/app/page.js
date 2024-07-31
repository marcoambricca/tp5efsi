'use client'

import { useState, useEffect } from "react"

export default function Home() {
  const [flags, setFlags] = useState([]);

  const fetchFlags = async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries/flag/images');
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchFlags(setFlags);
    console.log(flags);
  }, []);

  console.log(flags);

  return(
    <div className="game">
      
    </div>
  )
}
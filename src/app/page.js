'use client'

import Link from "next/link";
import './styles/home.css';

export default function Home() {
  return (
    <div className='start'>
      <Link href='/game' className='link'>Play</Link>
      <Link href='/leaderboard' className='link'>Leaderboard</Link>
    </div>
  );
}
'use client'

import Link from "next/link";

export default function Home() {
  return (
    <div className="start">
      <Link href='/game'>Jugar</Link>
    </div>
  );
}
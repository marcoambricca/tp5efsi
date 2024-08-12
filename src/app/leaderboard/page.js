'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import '../styles/leaderboard.css';

export default function Leaderboard() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const length = localStorage.length;
        const playersArray = [];
        
        for (let i = 1; i <= length; i++) {
            const playerData = localStorage.getItem(i);
            
            try {
                if (playerData) {
                    const player = JSON.parse(playerData);
                    const playerName = Object.keys(player)[0];
                    const playerPoints = player[playerName];
                    playersArray.push({ name: playerName, points: playerPoints });
                }
            } catch (e) {
                console.error(`Error parsing data for key ${i}:`, e);
            }
        }
        
        setPlayers(playersArray);
    }, []);

    return (
        <div className='container'>
            <Link href='/' className='back-link'>Home</Link>
            <div className='header'>Leaderboard</div>
            <table className='leaderboard'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{player.name}</td>
                            <td>{player.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

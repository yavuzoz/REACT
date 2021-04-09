import React from 'react'
import "./Result.css"

export default function Result({ skor, back }) {
    return <div className="result">
        <div className="punkt">Dein Punkt:{skor}</div>
        <button onClick={back}>Zurück</button>
    </div>
}
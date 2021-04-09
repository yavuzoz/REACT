import React from 'react'
import Question from "./Question"
import AnswerList from "./AnswerList"
import "./Quiz.css"

export default function Quiz({ questionList, step, skor, nextQuestion, checkAnswer, totalQuestion }) {

    return (
        <div className="quiz">
            <div className="table">
                <p className="step">Frage <br />{totalQuestion}/{step}</p>
                <p className="skor"> {skor}</p>
            </div>
            <div><Question questions={questionList} /></div>
            <div><AnswerList questions={questionList} checkAnswer={checkAnswer} /></div>
            <button onClick={nextQuestion}>Nächste</button>
        </div>
    )
}
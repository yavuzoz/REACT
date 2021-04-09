import React from 'react'
import "./AnswersList.css"

export default function AnswerList({ questions, checkAnswer }) {
    let answers = [];
    questions.answer.map(answ => answers.push(answ))
    answers.push(questions.correctAnswer)
    const schuffle = () => answers.sort(() => Math.random() - 0.5)
    return (
        <div className="answers">
            {schuffle().map(answer => {
                return (
                    <div name="answer" className={questions.correctAnswer} onClick={checkAnswer}>{answer}</div>)
            })}
        </div>
    )
}
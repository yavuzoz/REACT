import React from 'react'
import { useState } from "react"
import QuestionList from "../data/QuestionList.json"
import Quiz from "./Quiz"
import Result from "./Result"
import "./Question.css"


export default function QuizApp() {
    const NUMMERSQUIZ = 5;
    const [questions] = useState(QuestionList)
    const [step, setStep] = useState(1)
    const [skor, setSkor] = useState(0)

    const nextQuestion = () => setStep(step + 1)
    const backButton = () => setStep(1)

    const random = () => {
        return Math.floor(Math.random() * questions.length)
    }

    const checkAnswer = (e) => {
        if (e.target.className === e.target.innerHTML) {
            setSkor(skor + 10)
            setStep(step + 1)
        } else {
            setSkor(skor + 0)
            setStep(step + 1)
        }
    }
    if (step <= NUMMERSQUIZ) {
        return (<div>
            <Quiz questionList={questions[`${random()}`]}
                skor={skor} step={step}
                nextQuestion={nextQuestion}
                checkAnswer={checkAnswer}
                totalQuestion={NUMMERSQUIZ}
            />
        </div>)
    } else {
        return (
            <div>
                <Result skor={skor} back={backButton} />
            </div>

        )
    }
}
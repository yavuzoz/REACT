import React from 'react'

export default function Questions({ questions }) {

    return (
        <div className="question">
            {questions.question}
        </div>
    )
}
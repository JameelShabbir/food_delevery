import React, { useState, useEffect } from 'react'
import Question from './Question'
import axios from 'axios'
import Answers from './Answers'


const Quiz = ({ onFinish, onResult }) => {
    const [questions, setQuestions] = useState(null);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);
    useEffect(() => {
        const getApi = () => {
            axios
                .get("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
                .then((res) => setQuestions(res.data.results))
                .catch((err) => console.log(err))
        };
        if (!questions) {
            getApi();
        }
        console.log(questions)
    }, [questions, count, score])

    if (!questions) return <h3 className='text-success text-muted'>Loading...</h3>
    const answers = [...questions[count].incorrect_answers, questions[count].correct_answer]
    const result = answers.sort(() => Math.random() - 0.5);

    const checkAnswer = (answer) => {
        if (answer === questions[count].correct_answer) {
            setScore(score + 10)
        }
        if (count < questions.length - 1) {
            setCount(count + 1);
        } else {
            onFinish(true);
            onResult(score)
        }
    }
    return (
        <>
            <div className="bg-light ">
                <h2 className='text-warning bg-success'>Start Quiz</h2>
                <Question question={questions[count].question} />
                <div className="card-text">
                    <div className='btn-group btn-group-vertical btn-group-toggle w-100' data-toggle='buttons'>
                        {/* {result.sort(() => Math.random() - 0.5)} */}
                        {result.map((answer, index) => (
                            <Answers
                                key={index}
                                answer={answer}
                                onAnswer={(answer) => checkAnswer(answer)} />)
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz
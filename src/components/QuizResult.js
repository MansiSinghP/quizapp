import React from 'react'
import Quiz from './Quiz'
function QuizResult(props) {
  return (
    <>
    <div className='show-score'>
     Your Score: {props.score}<br/>
     Total Score: {props.totalScore}

    </div>
    <button id='next-button' onClick={props.tryAgain}>Try again</button>
    </>
  )
}

export default QuizResult


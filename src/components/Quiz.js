import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import { Next } from 'react-bootstrap/esm/PageItem'
import QuizResult from './QuizResult';

function Quiz() {
   
    
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[clickedOptn,setClickedOptn]=useState(0);
    const[showRes,setShowRes]=useState(false);
    function nextq(){
        setClickedOptn(0);
        updateScore();
        if(currentQuestion < QuizData.length-1){
        setCurrentQuestion(currentQuestion+1);}
        else{
            setShowRes(true);
        }
    }
    function updateScore(){
        if(QuizData[currentQuestion].answer===clickedOptn){
            setScore(score+1);
        }
    }
    function tryAgain(){
        setScore(0);
        setShowRes(false);
        setClickedOptn(0);
        setCurrentQuestion(0);
    }
  return (
    <div>
      <p className="heading-txt">Quiz-App</p>
     <div className="container">
        {showRes ? <QuizResult score={score} totalScore={QuizData.length} tryAgain={tryAgain}/> :(
            <>
        <div className="question">
            <span id='question-number'>{currentQuestion+1}.</span>
            <span className='question-txt'>{QuizData[currentQuestion].question}</span>
        </div>
        <div className="option-container">
            {QuizData[currentQuestion].options.map((option,i)=>{
                return(
                   
                    <button className={`option-btn ${clickedOptn===i+1 ? 'checked' : null}`}
                    key={i} onClick={()=>{setClickedOptn(i+1)}}>
                             {option}
                    </button>
                )
            })}
        </div>
        <input type="button" value="Next" id="next-button" onClick={nextq}/>
     </>
     ) }
        </div>
        
    </div>
  )
}

export default Quiz

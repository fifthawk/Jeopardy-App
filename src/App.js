import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';

const App = ()  => {
  const [questions, setQuestions] = useState([])
  const [num, setNum] = useState(0)
  const [score, setScore] = useState(0)
  const [score2, setScore2] = useState(0)
  const [score3, setScore3] = useState(0)
  const [score4, setScore4] = useState(0)

  const url = 'http://jservice.io/api/random?count=1';

  useEffect(()=> {
    axios.get(url)
    .then(res => {
      setQuestions(res.data)
    }).catch(e => prompt(e))
  }, [num])


  const addScore = () => {
      setScore(prevScore => prevScore + Number(addPoints))
  }
  const addScore2 = () => {
      setScore2(prevScore2 => prevScore2 + Number(addPoints))
  }
  const addScore3 = () => {
    setScore3(prevScore3 => prevScore3 + Number(addPoints))
  }
  const addScore4 = () => {
    setScore4(prevScore4 => prevScore4 + Number(addPoints))
  }

  const newQuestions = () => {
      setNum(prevNum => prevNum + 1)
  }
  
  const resetScores = () => {
	  setScore(prevScore => prevScore - prevScore);
	  setScore2(prevScore2 => prevScore2 - prevScore2);
	  setScore3(prevScore3 => prevScore3 - prevScore3);
	  setScore4(prevScore4 => prevScore4 - prevScore4);
  }
  
  const addPoints = (questions.map(q => q.value));

  return (
    <>
      <div><h1 className='header'>Jeopardy!</h1></div>
      <div className = 'scoreHeader'>

      <div>
      <p className = 'scores'>{score}</p>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
      <button type ='button' value='button' onClick ={addScore}>Player 1</button>
      </div>
		

      <div>
      <p className = 'scores'>{score2}</p>
      <button type ='button' value='button' onClick ={addScore2}>Player 2</button>
      </div>

      <div>
      <p className = 'scores'>{score3}</p>
      <button type ='button' value='button' onClick ={addScore3}>Player 3</button>
      </div>

      <div>
      <p className = 'scores'>{score4}</p>
      <button type ='button' value='button' onClick ={addScore4}>Player 4</button>
      </div>

      </div>
      <div className ='newQs'>
      <button type ='button' value='button' onClick ={newQuestions}>New Questions!</button>
      <button type = 'button' value ='button' onClick ={resetScores}>Reset Scores</button>
      </div>
      <div className = 'container'>
      {questions.map(questions => {
        return (
          <div>
            <p className='title'>{questions.category.title.toLowerCase().split(' ')
            .map((s) => s.charAt(0)
            .toUpperCase() + s.substring(1))
            .join(' ')}
            </p>
            <p> {questions.question}.</p>
            <p>Question: </p>
            <p className = 'answer'>Who/what is {questions.answer}?</p>
            <p>{questions.value ? `$${questions.value}` : 'Double Jeopardy!'}</p>
            <hr />
          </div>
        )
      })}
    </div>
  </>
  );
}

export default App;

import React from 'react'

export const FinalResults = ({questions, score, restarGame,acount}) => {




  
  return (
    <div>

        {
          acount - 1 >=  2 && alert('lo conseguiste') 
        }

        {
          acount - 1 <= 1 && alert('debes mejorar') 
        }

        <div className="final-results">
        <h1>{ acount - 1 }</h1>
          <h1>Final Results</h1>
          <h2> 
          {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={ ()=> restarGame() } >Restar game</button>
      </div>
    </div>
  )
}

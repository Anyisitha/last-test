import React, { useState } from 'react'
import './element.css'

export const CardQuestion = ({currentQuestion, questions, optionClicked,setShowFinalResult,setCurrentQuestion,setScore}) => {



  // const [count, setcount] = useState(0)

  
  // const  optionClicked = (isCorrect) => {
  //   console.log(isCorrect)
  //     if (isCorrect) {
  //         setScore( + 1)
  //        setcount(count + 1)
        
        
         
  //     }


  //     if ( currentQuestion + 1 < questions.length ) {
  //        setCurrentQuestion( currentQuestion + 1 )

       

  //     }else {
       
  //          setShowFinalResult(true)
           
            
  //     } 
  // }

 

  return (
    < >
         <div className="question-card">
         <div className="content-question-current">
           
            <h2>PREGUNTA { currentQuestion + 1 } DE { questions.length } </h2>
         </div>
         <div className="content-quiz-title" >
            <h3 className='question-text' > { questions[currentQuestion].text } </h3>
         </div>
       <ul className='ul-quiz' >
          {
           questions[currentQuestion].options.map((option)=> {
             return (
               <li onClick={ ()=> optionClicked(option.isCorrect)  }  key={option.id} >{option.text}</li>
             )
           })
          }
       </ul>
     </div>
    </>
  )
}

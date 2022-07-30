
import { useState } from 'react';
import './App.css';
import { CardQuestion } from './elements/CardQuestion';
import { FinalResults } from './elements/FinalResults';

function AppTest({count}) {

  const [showFinalResult, setShowFinalResult] = useState(false)
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
     const [acount, setAcount] = useState(0)


  const questions = [
    {
      text: "¿Realizas ejercicio frecuentemente? (mínimo 150 min de actividad física a la semana)",
      options: [
        { id: 2, text: "No", isCorrect: false },
        { id: 3, text: "Si", isCorrect: true },
      ],
    },
    {
      text: "¿Te falta el aire cuando haces actividades cotidianas como subir escaleras o incluso al peinarte o cepillarte los dientes?",
      options: [
        { id: 0, text: "Si", isCorrect: true },
        { id: 3, text: "No", isCorrect: false },
      ],
    },
    {
      text: "¿ Te sientes cansado aun cuando no estás haciendo actividad física? ",
      options: [
        { id: 0, text: "Si", isCorrect: true },
        { id: 1, text: "No", isCorrect: false },
      ],
    },
    {
      text: "¿Presentas tos seca?",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
       
      ],
    },
    {
      text: "¿ Tu peso corporal aumenta de manera anormal en cuestión de días o semanas aun sin haber hecho cambios en tus hábitos alimenticios o de ejercicio?",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "¿ Tus pies, tobillos o piernas se inflaman frecuentemente?",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "¿Percibes que los latidos de tu corazón son más rápidos de lo normal? ",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: "¿ Tus padres, hermanos o abuelos presentan alguna de estas enfermedades: falla cardíaca, infarto, hipertensión, enfermedad renal o diabetes? ",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: " ¿Eres o has sido consumidor activo de tabaco? ",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
    {
      text: " ¿Sientes que te falta el aire al agacharte o amarrarte los zapatos? ",
      options: [
        { id: 0, text: "Si", isCorrect: false },
        { id: 1, text: "No", isCorrect: true },
      ],
    },
  ];

 

  const  optionClicked = (isCorrect) => {
    console.log(isCorrect)
      if (isCorrect) {
          setScore( + 1)
          setAcount(acount + 1)
          console.log(acount)
        
         
      }

   // validacion ultima question
      if ( currentQuestion + 1 < questions.length ) {
         setCurrentQuestion( currentQuestion + 1 )

       

      }else {
       
           setShowFinalResult(true)
           
            
      } 
  }


  const restarGame = () => {
    setScore(0)
    setCurrentQuestion(0)
    setShowFinalResult(false)
  }

  

  return (
    <div className="App">
   
     
     { showFinalResult 
     ?  <FinalResults
      questions={questions}
       score={ score } 
       restarGame={restarGame} 
       acount={acount}
    
      
       />

     :  <CardQuestion 
     
     currentQuestion={currentQuestion}
      questions={questions}
     
      setShowFinalResult={setShowFinalResult}
      setCurrentQuestion={setCurrentQuestion}
      setScore={setScore}
      optionClicked={ optionClicked}
     
     />
      
    
     }
 <div className={ `${ currentQuestion === 0 && 'personaje' || currentQuestion === 1 && 'personaje2' || currentQuestion === 2 && 'personaje3'  || currentQuestion === 3 && 'personaje4'  || currentQuestion === 4 && 'personaje5'  || currentQuestion === 5 && 'personaje6'  || currentQuestion === 6 && 'personaje7'  || currentQuestion === 7 && 'personaje8'  || currentQuestion === 8 && 'personaje9'  || currentQuestion === 9 && 'personaje10' }` }></div>
    </div>
  );
}

export default AppTest;


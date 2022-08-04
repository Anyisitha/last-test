import React, { useEffect,useState } from 'react'
import { CondicionOne } from './CondicionOne'
import { CondicionalTwo } from './CondicionalTwo'
import { Loading } from './Loading'

export const FinalResults = ({questions, score, restarGame,acount}) => {
const [validar, setValidar] = useState(false)

  useEffect(() => {
   
    setTimeout(() => {
      
    console.log('cargando')

    setValidar(true)
      
    },9000 );

  }, [])

  console.log(acount)
  
  
  return (

    <div>
     {
        <div className={validar === true ? 'hide' : null } ><Loading/></div>
     }

        {
          acount  >=  2 && <CondicionOne  restarGame={ restarGame} />
        }

        {
          acount  <= 1 && <CondicionalTwo restarGame={ restarGame} />
        }

      
{/* final-results */}
{/* acount - 1 <= 1 ? 'hide' : 'hide' */}
        <div className={  validar === true ? 'hide' : 'hide' }>
        <h1>{ acount - 1 }</h1>
          {/* <h1>Final Results</h1> */}
          <h2> 
          {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={ ()=> restarGame() } >Restar game</button>
      </div>
    </div>
  )
}

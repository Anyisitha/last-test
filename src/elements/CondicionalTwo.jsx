import React, { useState } from 'react'
import { Final } from './Final'

export const CondicionalTwo = ({ restarGame}) => {

  

  const [getFinal, setGetFinal] = useState(false)


  return (
  <>
  
     {
      getFinal === true ? <Final restarGame={ restarGame} /> : null
    }
  
    <div className={ getFinal === true ? 'hide': 'App_condicion-two animate__animated animate__fadeIn' } >
     <div className="table_final2">
       <div 
       className="two_next"
       onClick={ ()=> setGetFinal(true) }
       >

       </div>
    </div>
    </div>
    </>
  )
}

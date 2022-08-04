import React, { useState } from 'react'
import { Final } from './Final'


export const CondicionOne = ({ restarGame}) => {

const [getFinal, setGetFinal] = useState(false)



  return (
    <>

    {
      getFinal === true ? <Final  restarGame={ restarGame}  /> : null
    }
        <div className={ getFinal === true ? 'hide': 'App_condicion-one animate__animated animate__fadeIn'  }>
        <div className="table_final1">
          <div 
          onClick={ ()=> setGetFinal(true) }
          className="one_next"
          ></div>
        </div>
    </div>
    </>
  )
}

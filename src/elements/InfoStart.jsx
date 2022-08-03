import React, { useState } from 'react'
import AppTest from '../AppTest'
import { InfoCover } from './InfoCover'


export const InfoStart = () => {

const [startQuiz, setStartQuiz] = useState(false)
const [back, setBack] = useState(false)
  return (
   <div>
    {
      startQuiz === true && <AppTest/>
    }
      {
      back === true && <InfoCover /> 
    }
       <div className={ ` ${startQuiz === false ? 'AppInfo' : 'hide'  } ` } >
        <div className="table2">
        <div className="text_cover_start"></div>
        </div>
        <div className="conten_desicion">
            <div className="yes"></div>
            <div className="not"></div>
        </div>
        <div className="text_start_bajo"></div>
        <div className="content_start">
            <div onClick={ ()=> setBack(true) } className="yes_start"></div>
            <div onClick={ ()=> setStartQuiz(true)  } className="not_start"></div>
        </div>
    </div>
    </div>
  )
}

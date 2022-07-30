import React, { useState } from 'react'
import { InfoCover } from './InfoCover'


export const PortadaApp = () => {

  const [showInfo, setShowInfo] = useState(false)

  const handleInfo = () => {
    setShowInfo(true)
    console.log('info show')
  }

 

  return (
   <div>
    {
      showInfo === true && <InfoCover/>
    }
         <div className={`AppPortada ${ showInfo === true && 'hide' } ` } >
            <div className="text_cover"></div>
        <div className="characters">
            <div className="hart"></div>
            <div onClick={ handleInfo  } className="start_cover"></div>
            <div className="character_cover"></div>
        </div>
    </div>
   </div>
  )
}

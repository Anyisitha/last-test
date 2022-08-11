import React, { useState } from 'react'
import { InfoStart } from './InfoStart'



export const InfoCover = () => {
    

const [showSatrt, setShowSatrt] = useState(false)


  return (
  <div>

  {
    showSatrt === true && <InfoStart/>
  }
        <div className={ `${ showSatrt === false ? 'AppInfo2 animate__animated animate__fadeIn ' : 'hide'  }` }>
        <div className="table">
            <div className="text_cover_info"></div>
            <div className="text_cover_info2"></div>
        </div>
        <div className="next_content">
                <div className="info_next_btn"></div>
                <div onClick={()=> setShowSatrt(true)  }  className="boton_next"></div>
            </div>
            <div className="characters_info">
                <div className="hart_info"></div>    
                <div className="character_info"></div>
        </div>
    </div>
  </div>
  )
}

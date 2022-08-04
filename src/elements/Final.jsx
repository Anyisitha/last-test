import React from 'react'
import { Link } from 'react-router-dom'

export const Final = ({ restarGame}) => {

 
   
  return (
   <div className="end animate__animated animate__fadeIn">
        <div className="final-table">
          <a href='https://instagram.com/sospechar_nofalla?igshid=YmMyMTA2M2Y=' target="_blank" style={{ cursor: 'pointer',  position: "absolute", bottom: "23%", marginLeft: "27%", height: "37%", width: "7%" }}></a>
          <a href='https://www.facebook.com/sospecharnofalla/' target="_blank" style={{ cursor: 'pointer',  position: "absolute", bottom: "23%", marginLeft: "37%", height: "37%", width: "7%" }}></a>
          <a href='https://web-sospechar-para-todos.sospecharnofalla.com/contenido-para-todos' target="_blank" style={{ cursor: 'pointer',  position: "absolute", bottom: "23%", marginLeft: "46%", height: "37%", width: "7%" }}></a>
          <div className="content-end">
             {/* <div className='repetir' onClick={()=> restarGame()}></div> */}
             <a className='repetir' href="./"></a>
             <a href="https://web-sospechar-para-todos.sospecharnofalla.com/contenido-para-todos/diagnostico#section-clasificacion" className="close" ></a>
          </div>  
        </div>
   </div>
  )
}

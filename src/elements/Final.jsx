import React from 'react'
import { Link } from 'react-router-dom'

export const Final = ({ restarGame}) => {

 
   
  return (
   <div className="end animate__animated animate__fadeIn">
        <div className="final-table">
          <div className="content-end">
             <div className='repetir' onClick={()=> restarGame()}></div>
             <a href="https://web-sospechar-para-todos.sospecharnofalla.com/contenido-para-todos/diagnostico#section-clasificacion" className="close" ></a>
          </div>  
        </div>
   </div>
  )
}

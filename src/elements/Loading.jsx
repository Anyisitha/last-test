import React from 'react'

export const Loading = () => {
  return (
    <div className="loading" >
      <div className="table">
        <div className="loading-logo"></div>

        <div id="progressbar">
           <span id="loading"></span>
           <div id="load">Cargando Resultados...</div>
       </div>
      </div>
    </div>
  )
}

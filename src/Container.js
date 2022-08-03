import React, { useState } from 'react'
import { CondicionalTwo } from './elements/CondicionalTwo'
import { CondicionOne } from './elements/CondicionOne'
import { Final } from './elements/Final'
import { InfoCover } from './elements/InfoCover'
import { InfoStart } from './elements/InfoStart'
import { Loading } from './elements/Loading'
import { PortadaApp } from './elements/PortadaApp'



export const Container = () => {



  return (
    <div className="animate__animated animate__fadeIn" >
        <PortadaApp/>

        {/* <InfoCover/> */}
        {/* <InfoStart/> */}
        {/* <CondicionOne/> */}
         {/* <CondicionalTwo/> */}
         {/* <Loading />  */}
        {/* <Final/> */}
    </div>
  )
}

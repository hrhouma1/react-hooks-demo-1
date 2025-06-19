import React, { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';


const DemoUseEffect2 = () => {
    const [projet,setProjet]=useState("");



useEffect(()=>{
    console.log('use effect hook');
    document.title="Je m'amuse avec useEffect";
    return()=>document.title="J'arrete avec useEffect";
},[projet])


  return (
    <div> 
       <h1>HELLO useEffect</h1>
       Ajouter un projet : <input type="text" value={projet} onChange={(e)=>{setProjet(e.target.value)}}></input>
        
    </div>
  )
}

export default DemoUseEffect2;
import React, { useEffect, useRef } from 'react';
import { Container } from 'semantic-ui-react';
import { useState } from 'react';


const DemouseRef = () => {
    const [projet,setProjet]=useState("");
    const inputE1= useRef();


useEffect(()=>{
    console.log(inputE1.current.value);
    inputE1.current.focus() 
})


  return (
    <div> 
       <h1>HELLO useREF</h1>
       Ajouter un projet : <input type="text" value={projet} ref={inputE1} onChange={(e)=>{setProjet(e.target.value)}}></input>
        
    </div>
  )
}

export default DemouseRef;
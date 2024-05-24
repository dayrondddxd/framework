
import './App.css';
import Boton from './componentes/boton.js'
import Pantalla from './componentes/pantalla';

import Botonclear from './componentes/Botonclear.js';

import { useState } from 'react';
import{ evaluate } from 'mathjs';
function App() {

const[input, setinput]= useState('')


const agregarInput=val=>{
  

  setinput(input+val);
};



const calcularResultado=()=>{
  if(input){
    setinput(evaluate(input));
  }else{
    alert("ingrese valores")
  }
  
};




  return (
    <div className="App">
    

      <div className='contenedor-calculadora'>

      
      <Pantalla input={input}/>

      <div className='fila'>
        <Boton manejarClic={agregarInput}> 1</Boton>
        <Boton manejarClic={agregarInput}> 2</Boton>
        <Boton manejarClic={agregarInput}> 3</Boton>
        <Boton manejarClic={agregarInput}> +</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}> 4</Boton>
      <Boton manejarClic={agregarInput}> 5</Boton>
      <Boton manejarClic={agregarInput}> 6</Boton>
      <Boton manejarClic={agregarInput}> -</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={agregarInput}> 7</Boton>
      <Boton manejarClic={agregarInput}> 8</Boton>
      <Boton manejarClic={agregarInput}> 9</Boton>
      <Boton manejarClic={agregarInput}> *</Boton>
      </div>
      <div className='fila'>
      <Boton manejarClic={calcularResultado}> =</Boton>
      <Boton manejarClic={agregarInput}> 0</Boton>
      <Boton manejarClic={agregarInput}> .</Boton>
      <Boton manejarClic={agregarInput}> /</Boton> 
      </div>
      <div className='fila'></div>


      <Botonclear manejarClear={() => setinput('')}>Clear</Botonclear>

      </div>
    </div>
  );
} 

export default App;

import React, {useState} from 'react';

export const MiPrimerEstado = () => {

  /*let nombre = "Danny Salazar";
  
  const cambiarNombre = e => {
        nombre = "Juan MORATA";
  };
  */

const [nombre, setNombre] = useState ("Danny Salazar");

const cambiarNombre = (e,nombreFijo) => {
setNombre(nombreFijo);
console.log(e.target)
}

  return (
    <div>
        <h3>
            Componente: MiPrimerEstado
        </h3>
        <strong className='label'>{nombre}</strong>
        &nbsp;
        <button onClick={ e => cambiarNombre (e,"Jesucristo")}>cambiar nombre por Jesucristo</button>
        &nbsp;
        <input type='text' onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>
        
        </div>
  )
}

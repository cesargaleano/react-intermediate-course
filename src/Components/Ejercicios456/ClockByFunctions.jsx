import React, {useState} from 'react';
import { useEffect } from 'react';

const ClockByFuntions = ()=>{
    const [fecha, setFecha] = useState(new Date());
    const [nombre, setNombre] = useState('Martín');
    const [apellidos, setApellidos] = useState('San José');
    const [edad, setEdad] = useState(0);
    

    const tick = ()=>{
      setEdad(edad+1);
      setFecha(new Date());

    };

    useEffect(()=>{

        const timerID = setInterval(()=> tick(),1000);

        return ()=> clearInterval(timerID);
    })

    return(
        <div>
        <h2>
        Hora Actual:
        {fecha?.toLocaleTimeString()}
        </h2>
        <h3>{nombre} {apellidos}</h3>
        <h1>Edad: {edad}</h1>
        </div> 
    );

} 


 export default ClockByFuntions;

import React from 'react';
import {  useState } from 'react/cjs/react.development';

export const Buscador = ()=>{

    const [pelicula,setPelicula] = useState([])

   
    const handleChange = ({target}) =>{
        setPelicula({
            
            pelicula:target.value
        })
    }
     console.log(pelicula);
    
    return(
        <input type='text' name='pelicula'  onChange={handleChange}>
        </input>
    )
}
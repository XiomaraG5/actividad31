import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { endpoint } from '../helpers/Url';

export const Buscador = ()=>{

    const [pelicula,setPelicula] = useState([])

   
    const handleChange = ({target}) =>{
        setPelicula({
            [target.name]:target.value
        })
    }
     console.log(pelicula);
    
    return(
        <input type='text' name='pelicula' value={pelicula} onChange={handleChange}>
        </input>
    )
}
import React, { useEffect, useState } from 'react';
import { Buscador } from '../components/Buscador';
import { GetData } from '../components/GetData';
import { endpoint } from '../helpers/Url';


export const Peliculas = ()=>{
    const [pelicula, setPelicula] =useState([])
    useEffect(()=>{
        GetData(endpoint,setPelicula)
    },[])
        console.log(pelicula);
    return(
        <div className='principal'>
            <Buscador />
            {pelicula.map(pe =>(
            <div className='contenedor' key={pe.id}>
                <div className='contenedorImg'>
                    <img className='img' src={pe.image} alt={pe.name} />
                    </div>
                <p>{pe.name}</p>
            </div>
            ))}
        </div>
    )
}
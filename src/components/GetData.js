import React from 'react';
import { Peliculas } from '../containers/Peliculas';


export const GetData = async (url,setPelicula) =>{
   
  const resp = await fetch(url)
            const data = await resp.json();
        setPelicula(data.results)

    
}
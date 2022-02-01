
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../components/useForm';
import { GetData } from '../components/GetData';
import querystring from 'query-string';
import { endpoint } from '../helpers/Url';
import { getPersonaje } from '../components/Personajes';


export const Peliculas = ()=>{
    const [pelicula, setPelicula] =useState([])
    useEffect(()=>{
        GetData(endpoint,setPelicula)
    },[])

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.search);
    console.log(navigate);
    console.log(querystring.parse(location.search));
    const {q = '' } = querystring.parse(location.search)
    console.log(q);
    const [values, handleInputChange, resetForm] = useForm({
            searchText: q
        })
        const {searchText} = values
    
        const personajeFiltro = getPersonaje(searchText,pelicula)

        console.log(personajeFiltro);

//     const location = useLocation();
//     const {q = ''} = querystring.parse(location.search);

//     const navigate = useNavigate();
//     const [values, handleInputChange] = useForm({
//         searchText: q
//     })

//     const { searchText } = values;
//     const filterPersonaje = Personake(searchText)
//    const handleSearch = (e) => {
//         e.preventDefault();
//         navigate(`?q=${searchText}`)
//     }
    
     const handleSubmit = (e)=>{
         e.preventDefault()
         console.log(searchText);
         navigate(`?q=${searchText}`)
     }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input type='text' name='searchText' placeholder='busca un personaje' value={searchText} onChange={handleInputChange}>
                </input>
            </form>
            <div className='principal'>
                {pelicula.map(pe =>(
                <div className='contenedor' key={pe.id}>
                    <div className='contenedorImg'>
                        <img className='img' src={pe.image} alt={pe.name} />
                        </div>
                    <p>{pe.name}</p>
                </div>
                ))}
            </div>
        </div>
    )
}
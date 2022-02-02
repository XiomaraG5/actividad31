
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../components/useForm';
import { GetData } from '../components/GetData';
import querystring from 'query-string';
import { endpoint } from '../helpers/Url';


export const Peliculas = ()=>{
    const [pelicula, setPelicula] =useState([])
    useEffect(()=>{
        GetData(endpoint,setPelicula)
    },[])

    const navigate = useNavigate()
    const location = useLocation()

    const {q = '' } = querystring.parse(location.search)

    const [values, handleInputChange] = useForm({
            searchText: q
        })
        const {searchText} = values

     const handleSubmit = (e)=>{
         e.preventDefault()
         console.log(searchText);
         navigate(`?q=${searchText}`)
     }
     console.log(pelicula);
     const personajeFiltro = pelicula.filter(per=> per.name.toLocaleLowerCase().includes(searchText))
        console.log(personajeFiltro);
    const [show,setShow]=useState(false)
    const Mostrar = ()=>{
        setShow(true)
    }
    const NoMostrar = ()=>{
        setShow(false)
    }
    return(
        <div>
           <form onSubmit={handleSubmit}>
            <input type='text' name='searchText' placeholder='busca un personaje' value={searchText}
             onChange={handleInputChange} onFocus={Mostrar} onBlur={NoMostrar}>
                </input>
            </form>
            {show && <div className='principal'>
                {personajeFiltro.map(pe =>(
                <div className='contenedor bucador' key={pe.id}>
                    <div className='contenedorImg'>
                        <img className='img' src={pe.image} alt={pe.name} />
                        </div>
                    <p>{pe.name}</p>
                </div>
                ))}
            </div>}
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
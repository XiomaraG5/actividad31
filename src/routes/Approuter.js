import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Peliculas } from '../containers/Peliculas';



const AppRouter = ()=>{
    return(
    <BrowserRouter >
        <Routes> 
            <Route path="/" element={<Peliculas />} />
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter;
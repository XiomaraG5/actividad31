

// export const FilterPersonaje = (query)=> {
//   return pelicula.filter(function(el) {
//       return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

import { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

   

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    const resetForm = ()=>{
        setValues(initialState)
    }
    return [ values, handleInputChange, resetForm ];

}


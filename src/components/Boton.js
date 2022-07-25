import React from 'react';



export const Boton = ( { cat, establecerCategoria } ) => {


    const showElementsCategory = () => {

        establecerCategoria( cat.name );

    }


    return (

        <button onClick={ showElementsCategory }> { cat.name } </button>

    )

    
}
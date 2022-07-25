import React, { useState } from 'react';

// Data
import categorias from "../helpers/categories.json";
import { Boton } from './Boton';
import { Lista } from './Lista';



export const Categorias = () => {


    const [ categoria, setCategoria ] = useState('');


    if ( categoria === '' ) {
        console.log('Nada para mostrar');
    } else {
        console.log("Categoria --> ", categoria);
    }


    const establecerCategoria = ( name ) => {

        setCategoria(name);

    }

    
    return (

        <>

            {
                categorias.categories.map( ( cat ) => (
        
                    <Boton establecerCategoria={ establecerCategoria } key={ cat.id } cat={ cat } />
        
                ))

            }

            <Lista categoria={ categoria }/>

        </>

    );

}

import React from 'react';
import { Tabla } from './Tabla';



export const ElementoLista = ( { el } ) => {


    const showAll = () => {
        console.log( el );
    }


    return (

        <>
        
            <li onClick={ showAll }>
                <p>{ el.name }</p>
                <span>{ el.category }</span>
            </li>

            <Tabla el={ el } />

        </>
    
    );

}
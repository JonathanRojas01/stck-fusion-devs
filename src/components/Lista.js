// React
import React from 'react';

// Data
import db from "../helpers/db.json";

// Components
import { ElementoLista } from './ElementoLista';



export const Lista = ({ categoria }) => {


    const tecnologias = db.technology;


    // Filtrar arreglo según parametros de busqueda y almacenar los resultados en otro arreglo
    const resultados = tecnologias.filter( (el) => el.category === categoria);

    
    return (

        <>

            {/* <ul>
                {
                    tecnologias.map( (el) => (
                        <ElementoLista key={el.id} el={el}/>
                    ))
                }
            </ul>

            <hr /> */}

            <ul>
                {
                    (resultados.length > 0)
                    ? 
                    resultados.map( (el) => ( <ElementoLista key={el.id} el={el}/> ))
                    :
                    "No hay nada para mostrar"                    
                }
            </ul>

        </>
    
    );

}
import React from 'react';



export const Tabla = ( { el } ) => {


    return (

        <>
        
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Category</th>
                        <th>Web</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ el.id }</td>
                        <td>{ el.name }</td>
                        <td>{ el.type }</td>
                        <td>{ el.category }</td>
                        <td><a href={ el.web } target="blank">{ el.web }</a></td>
                    </tr>
                </tbody>
            </table>

        </>
    
    );

}
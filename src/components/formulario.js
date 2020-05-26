import React, { useState } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Error from './error';

function Formulario(props) {
    
    // state para calcular los gastos
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);

    const [error, setError] = useState(false)

    const agregarGasto = e =>{
        e.preventDefault();

        // validar
        if(nombre.trim() ==='' || precio < 1 || isNaN(precio) ){
           setError(true)
           return;
        }
        setError(false);

        // construir gasto
        const gasto = {
            nombre,
            precio,
            id:shortid.generate()
        }
       

        // pasar el gasto al componente principal
        props.setGasto(gasto);
 
        // una vez que se genere el gasto pasa a true
        props.setCrearGasto(true);

        // resetear el form
        setNombre('');
        setPrecio(0);


        

    }

    return (

        <form className="contenedor-form" onSubmit={agregarGasto}>
            <h2>Agrega tus Gastos Aquí</h2>
            {
                error && <Error aviso="Error! Revisar los Campos Ingresados"/> 
            }
            <div>
                <label>Nombre Gasto</label>
                <input  
                   type="text"
                   placeholder="ej: Transporte"
                   value={nombre}
                   onChange={e => setNombre(e.target.value)}
                />

                <label>Precio</label>
                <input
                   type="number" 
                   placeholder="ej: 300" 
                   value={precio}  
                   onChange={e => setPrecio(e.target.value)}
                />

                <input type="submit" value="Agregar Gasto" />   
            </div>
        </form>
    )
}
Formulario.propTypes = {
    setGasto:PropTypes.func.isRequired,
    setCrearGasto:PropTypes.func.isRequired
}

export default Formulario

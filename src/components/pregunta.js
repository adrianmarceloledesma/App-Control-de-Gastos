import React, { useState } from 'react'
import Error from './error'
import PropTypes from 'prop-types'

function Pregunta(props) {
    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setCantidad(parseInt(e.target.value))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        // validar
        if(cantidad === '' || cantidad <= 0 || isNaN(cantidad)  ){
            setError(true)
            return;
        }
        //todo esto si pasa la validacion
                             // limpiar el mensaje de error
        setError(false)
                            // los 2 setState para guardar el presupuesto en el state de app.js
        props.setPresupuesto(cantidad);
        props.setPreRestante(cantidad);
                            // si pasa la validacion significa que ingreso bien la plata, entonces le asignamos false
                            // para que en App.js aplique el ternario como false y se oculte este component
        props.setMostrarPregunta(false);
    }

    return (
        <div className="contenedor-pregunta">
            <h2>Coloca tu Presupuesto</h2>
            {
                error && <Error aviso="Error! Complete Bien los Campos"/>
            }


            <form onSubmit={handleSubmit}>
                <input
                   type="number"
                   placeholder="Colocalo Aqui"
                   onChange={handleChange}
                
                />
                <input 
                   type="submit" 
                />
            </form>
         
        </div>
    )
}
Pregunta.propTypes = {
    setPresupuesto:PropTypes.func.isRequired,
    setPreRestante:PropTypes.func.isRequired,
    setMostrarPregunta:PropTypes.func.isRequired
}

export default Pregunta

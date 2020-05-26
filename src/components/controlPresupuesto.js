import React from 'react';
import PropTypes from 'prop-types'
import {revisarPresupuesto} from '../helpers'

function ControlPresupuesto(props) {

    return (
        <div className="contenedor-controlpresupuesto">
           <p>Presupuesto : $ {props.presupuesto}</p>  

           {/* el archivo helpers trae la funcion revisarPresupuesto que viene con condicionales.y la clase que 
           corresponda se agrega  al className de la "p" "preRestante" */}
           <p className={revisarPresupuesto(props.presupuesto, props.preRestante)}>Restante : $ {props.preRestante}</p>
        </div>
    )
}
ControlPresupuesto.propTypes = {
    presupuesto:PropTypes.number.isRequired,
    preRestante:PropTypes.number.isRequired
}
export default ControlPresupuesto

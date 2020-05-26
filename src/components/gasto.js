import React from 'react'
import PropTypes from 'prop-types'

function Gasto(props) {
    return (
        <ul className="contenedor-gasto">
            <li>{props.gasto.nombre}</li>
            <li>$ {props.gasto.precio}</li>
        </ul>
    )
}
Gasto.propTypes={
    gasto:PropTypes.object.isRequired
}
export default Gasto

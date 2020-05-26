import React from 'react'
import Gasto from './gasto';
import PropTypes from 'prop-types';

function MostrarGasto(props) {
    return (
        <div className="contenedor-mostrargasto">
            <h2>Listado</h2>
            {
                props.gastos.map(gasto =>
                    <Gasto
                       gasto={gasto}
                       key={gasto.id}
                    />
                )
            }
        </div>
    )
}
MostrarGasto.propTypes ={
    gastos:PropTypes.array.isRequired
}

export default MostrarGasto

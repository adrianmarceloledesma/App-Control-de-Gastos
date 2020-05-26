import React from 'react'
import PropTypes from 'prop-types'

function Error(props) {
    return (
        
            <p className="error">{props.aviso}</p>
      
    )
}
Error.propType = {
    aviso:PropTypes.string.isRequired
}
export default Error

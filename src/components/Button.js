import React from 'react'
import PropTypes from 'prop-types'


const Button = ({ text, color, clickEvent  }) => {

    // const clickEvent = () => { 
    //     //alert('This is an example of an onclick Event!!!!');
    //     //console.log();
        
    // }

    return <button onClick={clickEvent} style={{ backgroundColor: color }} className='btn' >{text}</button>
}


Button.defaultProps = {
    color: '#777'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}


export default Button

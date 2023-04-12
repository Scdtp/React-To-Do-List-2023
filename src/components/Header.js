import React from 'react'
import Button from './Button.js'
import PropTypes from 'prop-types'

const Header = ({ onAdd, showAdd}) => {
  //  const clickEvent = () => { 
  // alert('This is an example of an onclick Event!!!!');
  //      console.log('Alert test on console');    
  //    }
  return (
    <header className='header'>
        <h1 style={{textAlign: 'left'}}>RBSL TO-DO-APP</h1>
         <Button text={showAdd ? 'Close' : 'Add'} color={showAdd ? 'red' : 'green'} clickEvent={onAdd}/>
     
    </header>
  )
}

Header.defaultProps = {
  title:"REACT TO DO APP"
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const h2Styles = {
  textAlign: 'center',
  backgroundColor: 'red',
  color: 'green'
}

export default Header
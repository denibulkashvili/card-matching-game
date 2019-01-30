import React from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn shadow rounded" >{props.buttonLabel}</button>
  )
}

export default Button;
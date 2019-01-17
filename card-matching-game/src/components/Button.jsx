import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick} className="button is-white is-large" >{props.buttonLabel}</button>
    </div>
  )
}

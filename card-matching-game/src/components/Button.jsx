import React from 'react'

export default function Button(props) {
  return (
    <button onClick={props.handleClick} className="btn shadow rounded" >{props.buttonLabel}</button>
  )
}

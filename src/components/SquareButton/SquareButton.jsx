import React from 'react';
import { Teste } from './styles'

function SquareButton(props) {
  return (
    <Teste>
        <img className='buttonIcon' src={props.icon} ></img>
        <p>{props.message}</p>
        
    </Teste>
  )
}

export default SquareButton
import React from 'react'
import { DefaultButton } from './style'
import imgDownload from '../../assets/img/download-icon.svg'



function Button(props) {
  return (
    <DefaultButton>
        {props.title}
        <img src={props.icon}></img>
    </DefaultButton>
  )
}

export default Button
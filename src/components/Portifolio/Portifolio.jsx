import React from 'react'
import SquareButton from '../SquareButton/SquareButton'
import { Container, ContainerFluid } from './styles'

import imgLamp from '../../assets/img/icon-lamp.svg'
import Slider from '../Slider/Slider'

function Portifolio() {
  return (
    <Container>
        <ContainerFluid>
          <div className='card'>
              <SquareButton
              message=''
              icon={imgLamp}
              />
          </div>

          <h2>Portifólio</h2>
          <div className="linha-1"></div>
          <div className="linha-2"></div>
          <p className='resume'>
            <span className='destaque'>Olá, eu sou Eduardo Marota. </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur.
          </p>
        </ContainerFluid>

        <Slider/>
        
    </Container>
  )
}

export default Portifolio
import React from 'react';
import { Container } from './styles';

import imgInfo from '../../assets/img/icon.svg'

export default function AboutMe() {
  return (
    <>
      <Container>
        <div className="card"><img className='infoIcon' src={imgInfo} ></img></div>
        <h2>Sobre Mim</h2>
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
        <div className='details-about'>
          <div className='personal-details'>
            <h3>Detalhes Pessoais</h3>

            <div>
              <tr>
                <td className='title'>Idade</td>
                <td className='personal-details-value'>37 Anos</td>
              </tr>
              <tr>
                <td className='title'>Telefone</td>
                <td className='personal-details-value'> 31-988974804</td>
              </tr>
              <tr>
                <td className='title'>e-mail</td>
                <td className='personal-details-value'>edumarotta@gmail.com</td>
              </tr>
              <tr>
                <td className='title'>Site</td>
                <td className='personal-details-value'>www.algumsite.com.br</td>
              </tr>            <tr>
                <td className='title'>Status</td>
                <td className='personal-details-value'>Disponivel</td>
              </tr>
            </div>

          </div>

          <div >
            <h3>Interesses Pessoais</h3>
              <div className='buttons-interest'>
                <tr className='button-interest'>
                  <td></td>
                </tr>
                <tr className='button-interest'>
                  <td></td>
                </tr>
                <tr className='button-interest'>
                  <td></td>
                </tr>
                <tr className='button-interest'>
                  <td></td>
                </tr>
              </div>

              <div className='buttons-interest'>
                <tr className='button-interest'>
                  <td></td>
                </tr>
                <tr className='button-interest'>
                  <td></td>
                </tr>
                <tr className='button-interest'>
                  <td></td>
                </tr>
                <tr className='button-interest'>
                  <td></td>
                </tr>
              </div>
          </div>


        </div>

        <button></button>
      </Container>

    </>
  )
}

import React from 'react';
import { Container } from './styles';

import imgInfo from '../../assets/img/icon.svg'
import imgGames from '../../assets/img/games-icon.svg'
import imgMusic from '../../assets/img/music-icon.svg'
import imgBoxe from '../../assets/img/boxe-icon.svg'
import imgTravel from '../../assets/img/travel-icon.svg'
import imgReact from '../../assets/img/react-icon.svg'
import imgCSS from '../../assets/img/css-icon.svg'
import imgJS from '../../assets/img/js-icon.svg'
import imgSQL from '../../assets/img/sql-icon.svg'
import imgDownload from '../../assets/img/download-icon.svg'


import Button from '../Button/Button';
import SquareButton from '../SquareButton/SquareButton';


export default function AboutMe(props) {
  return (
    <>
      <Container>
        
        <div className='card'>
          <SquareButton
          message=''
          icon={imgInfo}/>
        </div>
      
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
              </tr>            
              <div className='teste'>
                <span className='title'>Status</span>
                <span className='personal-details-status'>Disponivel</span>
              </div>
            </div>

          </div>

          <div >
            <h3>Interesses Pessoais</h3>
              <div className='buttons-interest'>
                <SquareButton message='Games' icon={imgGames}/>
                <div className='margem'> <SquareButton message='Boxe' icon={imgBoxe}/></div>
                <div className='margem'><SquareButton message='Music' icon={imgMusic}/></div>
                <div className='margem'><SquareButton message='Travel' icon={imgTravel}/></div>
             </div>

              <h3 className='title-skills'>Skills</h3>
              <div className='buttons-interest'>
           

                <SquareButton message='React' icon={imgReact}/>
                <SquareButton message='JS' icon={imgJS}/>
                <SquareButton message='css' icon={imgCSS}/>
                <SquareButton message='SQL' icon={imgSQL}/>
              
              </div>
          </div>


        </div>

      <Button title="teste" icon={imgDownload}
      />

      </Container>

    </>
  )
}

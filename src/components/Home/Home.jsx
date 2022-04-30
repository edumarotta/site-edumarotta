import React from 'react'
import { Container } from './styles'
import imgMe from '../../assets/img/edumarotta.jpg'
import imgFacebook from '../../assets/img/facebook.svg'
import imgInstagram from '../../assets/img/instagram.svg'
import imgLinkedin from '../../assets/img/linkedin.svg'
import imgGithub from '../../assets/img/github.svg'


export default function Home() {
  return (
    <Container>
      <div className='content'>
        <img className='me' src={imgMe} ></img>
        <div className='card'>
          <div className='name'>
            Edu Marotta
          </div>
          <div className='office'>
            Desenvolvedor Front-End
          </div>
          <td>
            <tr><img src={imgFacebook} alt="" /></tr>
            <tr><img src={imgInstagram} alt="" /></tr>
            <tr><img src={imgLinkedin} alt="" /></tr>
            <tr><img src={imgGithub} alt="" /></tr>

          </td>
        </div>
      </div>
      
    </Container>
  )
}

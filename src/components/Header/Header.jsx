import React from 'react'
import { Container, Menu } from "./styles.js"

export default function Header() {
  return (
    <Container>
      <Menu>
        <div className='logo'>ems</div>
        <div>
          <td className='menu'>
            <tr><a href='#'>Home</a></tr>
            <tr><a href='#'>Sobre</a></tr>
            <tr><a href='#'>Portifólio</a></tr>
            <tr><a href='#'>Contato</a></tr>
          </td>
        </div>
      </Menu>

    </Container>

  )
}

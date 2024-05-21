import React from 'react';
import logo from '../assets/logo.png';
import Boton from './Boton';
import '../App.css';

function Header() {

  return (
    <header>
      <nav className='nav'>
        <img src={logo} alt='PokeApi'/>
        <ul className='nav-list'>
          <li className='nav-item'><button className='btn btn-header' id='ver-todos'>Ver todos</button> </li>
          <Boton title='normal' text='Normal' />
          <Boton title='fire' text='Fire' />
          <Boton title='water' text='Water' />
          <Boton title='grass' text='Grass' />
          <Boton title='electric' text='Electric' />
          <Boton title='ice' text='Ice' />
          <Boton title='fighting' text='Fighting' />
          <Boton title='poison' text='Poison' />
          <Boton title='ground' text='Ground' />
          <Boton title='flying' text='Flying' />
          <Boton title='psychic' text='Psychic' />
          <Boton title='bug' text='Bug' />
          <Boton title='rock' text='Rock' />
          <Boton title='ghost' text='Ghost' />
          <Boton title='dark' text='Dark' />
          <Boton title='dragon' text='Dragon' />
          <Boton title='steel' text='Steel' />
          <Boton title='fairy' text='Fairy' />
        </ul>
      </nav>
    </header>
  )
};

export default Header;
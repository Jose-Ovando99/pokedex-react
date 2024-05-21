import React from 'react';
import '../App.css';

function Boton({ title, text }) {
  return (
    <li className='nav-item'><button className={`btn btn-header ${title}`} id={title}>{text}</button></li>
  );
};

export default Boton;
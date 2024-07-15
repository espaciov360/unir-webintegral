import React from 'react';
import { Link } from 'react-router-dom';
import logoNetflix from '../logo-neflix.png';

const BarraNavegacion = ({ usuario }) => {

  return (
    <nav className="barra-navegacion">
      <div className="barra-navegacion__logo">
        <Link to="/">
          <img src={logoNetflix} alt="logo" />
        </Link>
      </div>
      
        <Link to="/usuario" className='usuario'>
          <img src={usuario.avatar} alt="avatar" />
          <span>{usuario.nombre}</span>
        </Link>
      
    </nav>
  );
};

export default BarraNavegacion;
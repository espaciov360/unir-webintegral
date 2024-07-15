import React from 'react';
import { Link } from 'react-router-dom';

const Pelicula = ({ pelicula }) => {
  return (
    <div className="pelicula">
      <Link to={`/pelicula/${pelicula.id}`}>
        <img className='pelicula__imagen' src={pelicula.imagen} alt={pelicula.nombre} />
        <h4 className='pelicula__titulo'>{pelicula.nombre}</h4>
      </Link>
    </div>
  );
};

export default Pelicula;

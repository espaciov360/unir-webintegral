import React from 'react';
import Pelicula from './Pelicula';

const ListaPeliculas = ({ peliculas }) => {
  return (
    <div className="lista-peliculas">
      {peliculas.map((pelicula) => (
        <Pelicula key={pelicula.id} pelicula={pelicula} />
      ))}
    </div>
  );
};

export default ListaPeliculas;

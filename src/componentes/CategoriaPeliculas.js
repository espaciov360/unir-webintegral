import React from 'react';
import ListaPeliculas from './ListaPeliculas';

const CategoriaPeliculas = ({ titulo, peliculas }) => {
  return (
    <div className="categoria-peliculas">
      <h1 className='categoria-peliculas__titulo'>{titulo}</h1>
      <ListaPeliculas peliculas={peliculas} />
    </div>
  );
};

export default CategoriaPeliculas;

import React from 'react';
import CategoriaPeliculas from '../componentes/CategoriaPeliculas';
import { usePeliculas } from '../hooks/usePeliculas';

const Inicio = () => {
  const peliculas = usePeliculas();

  const categorias = {
    Accion: peliculas.filter((pelicula) => pelicula.categoria === 'Accion'),
    Drama: peliculas.filter((pelicula) => pelicula.categoria === 'Drama'),
    Comedia: peliculas.filter((pelicula) => pelicula.categoria === 'Comedia'),
  };

  return (
    <div className="inicio">
      {Object.keys(categorias).map((categoria) => (
        <CategoriaPeliculas key={categoria} titulo={categoria} peliculas={categorias[categoria]} />
      ))}
    </div>
  );
};

export default Inicio;

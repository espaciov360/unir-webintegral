import React from 'react';
import { useParams } from 'react-router-dom';
import { usePeliculas } from '../hooks/usePeliculas';

const DetallesPelicula = () => {
  const { id } = useParams();
  const peliculas = usePeliculas();
  const pelicula = peliculas.find((pelicula) => pelicula.id === id);

  if (!pelicula) {
    return <p>Pelicula no encontrada</p>;
  }

  return (
    <div className="detalles-pelicula">
      <div className='row'>
        <div className='col-sm-6 detalles-pelicula__info'>          
          <img src={pelicula.imagen} alt={pelicula.nombre} />          
        </div>        
        <div className='col-sm-6'>
          <h1>{pelicula.nombre}</h1>
          <p>{pelicula.sinopsis}</p>          
          <p>Duracion: {pelicula.duracion} minutos</p>      
          <p>Director: {pelicula.director}</p>
          <p>Categoría: {pelicula.categoria}</p>
          <p>Año: {pelicula.anio}</p>
          <div className='detalles-pelicula__botones'>
            <a class="btn btn-secondary" href={`https://www.youtube.com/watch?v=${pelicula.trailer}`} target="_blank" rel="noopener noreferrer">
              Ver trailer
            </a>
            <a class="btn btn-warning" href={`https://www.youtube.com/watch?v=${pelicula.trailer}`} target="_blank" rel="noopener noreferrer">
              Alquilar por $49.90
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetallesPelicula;

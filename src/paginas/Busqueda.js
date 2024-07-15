import React from 'react';
import { useLocation } from 'react-router';
import ListaPeliculas from '../componentes/ListaPeliculas';
import { usePeliculas } from '../hooks/usePeliculas';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Busqueda = () => {
  const query = useQuery();
  const filtro = query.get('filtro') || '';
  const peliculas = usePeliculas();

  const resultados = peliculas.filter(
    (pelicula) =>
      pelicula.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      pelicula.sinopsis.toLowerCase().includes(filtro.toLowerCase()) ||
      pelicula.categoria.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="busqueda">
      <h2 className='busqueda__titulo'>Resultados de búsqueda para: {filtro}</h2>
      <ListaPeliculas peliculas={resultados} />
    </div>
  );
};

export default Busqueda;

import { useState, useEffect } from 'react';
import datos from '../datos.json';

export const usePeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    setPeliculas(datos.peliculas);
  }, []);

  return peliculas;
};

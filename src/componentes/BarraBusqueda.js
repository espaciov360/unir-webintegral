import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BarraBusqueda = () => {
  const [query, setQuery] = useState('');  
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/busqueda?filtro=${query}`);
  };

  return (
    <div className="barra-busqueda">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar película..."
        className='barra-busqueda__input'
      />
      <button className='btn btn-danger' onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default BarraBusqueda;

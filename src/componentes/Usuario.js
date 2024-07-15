import React from 'react';

const Usuario = ({ usuario }) => {
  return (
    <div className="usuario">      
      <h2>{usuario.nombre}</h2>
      <img src={usuario.avatar} alt="Avatar del Usuario" />
    </div>
  );
};

export default Usuario;

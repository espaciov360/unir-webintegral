import React from 'react';
import Usuario from '../componentes/Usuario';
import avatar from '../avatar.png';

const usuarioMock = {
  avatar: avatar,
  nombre: 'Gibran Aguilar',
};

const PaginaUsuario = () => {
  return (
    <div className="pagina-usuario">
      <Usuario usuario={usuarioMock} />
      <p>Suscripcion: Plan básico 2 equipos</p>
      <p>Fecha de corte: 10/08/2024</p>
      <p>Usuarios desde: 2022</p>
    </div>
  );
};

export default PaginaUsuario;

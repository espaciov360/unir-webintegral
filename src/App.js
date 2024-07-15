import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import BarraNavegacion from './componentes/BarraNavegacion';
import BarraBusqueda from './componentes/BarraBusqueda';
import Inicio from './paginas/Inicio';
import Busqueda from './paginas/Busqueda';
import PaginaPelicula from './paginas/Pelicula';
import PaginaUsuario from './paginas/Usuario';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import avatar from './avatar.png';

const usuarioMock = {
  avatar: avatar,
  nombre: 'Gibran Aguilar',
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <BarraNavegacion usuario={usuarioMock} />
        <BarraBusqueda />
        <div className='contenido'>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/busqueda" element={<Busqueda />} />
            <Route path="/pelicula/:id" element={<PaginaPelicula />} />
            <Route path="/usuario" element={<PaginaUsuario />} />
          </Routes>        
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import Formulario from './components/Formulario';
import ListaDeTarefas from './components/ListaDeTarefas';
import './App.css'



const SobreMim: React.FC = () => {
  return (
    <div className="sobre">
      <h2>Ygor Freire</h2>
      <p>Oi, sou ygor e faço CCOMP</p>
      <Formulario/>
      <ListaDeTarefas/>
    </div>
  );
}

export default SobreMim;

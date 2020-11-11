import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpeg'

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end Web']);

  // useState retorna um array com 2 posições
  //
  // 1. Variável com seu valor inicial
  // 2. Função para atualizar o valor

  function handleAddProject() {
    //projects.push(`Novo projeto${Date.now()}`);

    setProjects([...projects, `Novo projeto${Date.now()}`]);

  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} alt=""/>

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
import React, { useState } from 'react';

const ListaDeTarefas: React.FC = () => {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleAdicionarTarefa = () => {
    if (inputValue.trim() !== '') {
      const novasTarefas = [...tarefas, inputValue];
      setTarefas(novasTarefas);
      setInputValue('');
      console.log('Tarefas atualizadas:', novasTarefas);
    }
  };

  const handleExcluirTarefa = (index: number) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== index);
    setTarefas(tarefasAtualizadas);
    console.log('Tarefas atualizadas:', tarefasAtualizadas);
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdicionarTarefa}>Adicionar Tarefa</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => handleExcluirTarefa(index)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
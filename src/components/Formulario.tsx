import React, { useState } from 'react';

const Formulario: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Nome: ${nome}, Email: ${email}`);

  };

  return (
    <div>
      <h2>Formulário</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <div>
        <h3>Dados inseridos:</h3>
        <p>Nome: {nome}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
}

export default Formulario;
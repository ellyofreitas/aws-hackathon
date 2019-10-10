import React, { useState } from 'react';

import { Container } from './styles';

import api from '../services/api';

export default function NewArchive({ history }) {
  const [name, setName] = useState('');
  const user = localStorage.getItem('user_id');

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post(
      '/rooms',
      { name },
      {
        headers: {
          user
        }
      }
    );

    history.push('/main');
  }
  return (
    <Container>
      <h1>Nova sala</h1>
      <div className="input-box">
        <form onSubmit={handleSubmit}>
          <input
            className="input-text"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className="button-input-a" type="submit">
            Criar
          </button>
        </form>
      </div>
    </Container>
  );
}

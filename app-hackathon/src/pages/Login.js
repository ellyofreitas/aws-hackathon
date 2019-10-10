import React, { useState } from 'react';

import { Container } from './styles';

import api from '../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post('/users', { email });
    localStorage.setItem('user_id', response.data._id);
    localStorage.setItem('user_email', email);
    history.push('/main');
  }

  return (
    <Container>
      <h1>Login</h1>
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Seu melhor e-mail"
            className="input-text"
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </form>
      </div>
    </Container>
  );
}

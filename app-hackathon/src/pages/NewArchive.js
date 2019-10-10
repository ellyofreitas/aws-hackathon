import React, { useState, useMemo } from 'react';

import { Container } from './styles';

import api from '../services/api';

export default function NewArchive({ history }) {
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  // const [vocabulary, setName] = useState('');
  const room = localStorage.getItem('room_id');
  const user = localStorage.getItem('user_id');

  const preview = useMemo(() => {
    return file ? URL.createObjectURL(file) : null;
  }, [file]);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('room', room);
    data.append('file', file);

    await api.post('/audios', data, {
      headers: {
        user
      }
    });

    history.push('/main');
  }
  return (
    <>
      <Container>
        <h1>Novo arquivo</h1>
        <div className="select-archive">
          <div className="player-container">
            <audio className="player" src={preview} controls></audio>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="input-text"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div className="submit-line">
              <input type="file" onChange={e => setFile(e.target.files[0])} />
            </div>
              <button className="button-submit" type="submit">
                Enviar
              </button>
          </form>
        </div>
      </Container>
    </>
  );
}

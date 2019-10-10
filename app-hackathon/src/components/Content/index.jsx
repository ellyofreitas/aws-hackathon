import React, { useState, useEffect, useMemo } from 'react';
import api from '../../services/api';

import socketio from 'socket.io-client';

import { Container } from './styles';

import AudioArea from '../AudioArea';
import Sidebar from '../Sidebar';

export default function Content() {
  const [rooms, setRooms] = useState([]);
  const [roomActive, setRoomActive] = useState({});

  const socket = useMemo(() => socketio('http://54.83.123.51:3000/', {}), []);

  useEffect(() => {
    socket.on('done', data => {
      window.location.reload();
    })
  }, [socket]);

  useEffect(() => {
    async function loadRooms() {
      const user_id = localStorage.getItem('user_id');
      const response = await api.get('/rooms', {
        headers: {
          user_id
        }
      });
      console.log(response.data);
      setRooms(response.data);
    }

    loadRooms();
  }, []);
  return (
    <Container>
      <div className="content">
        <Sidebar
          data={rooms}
          setRoomActive={setRoomActive}
          roomActive={roomActive}
        />
        <AudioArea data={roomActive} />
      </div>
    </Container>
  );
}

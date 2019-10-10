import React from 'react';

import { Container } from './styles';

import Button from '../Button';

export default function Sidebar({ data, setRoomActive, roomActive }) {
  return (
    <Container>
      <nav className="sidebar">
        <ul className="side-nav">
          {data.map((room, i) => (
            <li
              key={room._id}
              className={`side-nav__item${
                roomActive._id === room._id ? '-active' : ''
              }`}
            >
              <a
                href={`#${room.name}`}
                className="side-nav--link"
                onClick={() => {
                  setRoomActive(room);
                  localStorage.setItem('room_id', room._id);
                  console.log(room);
                }}
              >
                {room.name}
              </a>
            </li>
          ))}

          {/* <li className="side-nav__item">
            <a href="#" className="side-nav--link">
              room 02
            </a>
          </li>

          <li className="side-nav__item">
            <a href="#" className="side-nav--link">
              room 03
            </a>
          </li> */}
        </ul>
        <div className="bottom-options">
          <Button />
        </div>
      </nav>
    </Container>
  );
}

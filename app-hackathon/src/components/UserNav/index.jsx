import React, { useMemo } from 'react';
import { Container } from './styles';

import persona from '../assets/persona-1.jpg';

export default function UserNav() {
  const nome = useMemo(() => {
    const email = localStorage.getItem('user_email');
    return email.split('@')[0] || 'Sem login';
  }, []);
  return (
    <Container>
      <nav className="user-nav">
        <div className="user-nav__user">
          <img className="user-nav__user--photo" src={persona} alt="icon" />
          <span className="user-nav__user--name">Olá, {nome}</span>
          <svg className="user-nav__user--expand-icon">
            <use xlinkHref="icons.svg#sort-down"></use>
          </svg>
        </div>
      </nav>
    </Container>
  );
}

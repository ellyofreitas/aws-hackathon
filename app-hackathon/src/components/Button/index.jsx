import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Button() {
  return (
    <Container>
      <Link to="/newroom" className="btn">
        Criar sala
        <svg className="svg-icon--add">
          <use xlinkHref="icons.svg#add"></use>
        </svg>
      </Link>
    </Container>
  );
}

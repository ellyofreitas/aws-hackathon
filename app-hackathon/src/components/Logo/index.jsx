import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "./styles"

export default function Logo(){
    return (
      <Container>
        <Link to="/">
          <svg className="svg-logo">
            <use xlinkHref="icons.svg#cashew"></use>
          </svg>
        </Link>
        <svg
          style={{
            width: 0,
            height: 0,
            position: 'absolute'
          }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient id="main-gradient" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-primary-dark)" />
          </linearGradient>
        </svg>
      </Container>
    );
}
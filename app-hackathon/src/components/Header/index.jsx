import React from 'react';

import { Container } from './styles';
import SearchBar from '../SearchNav';
import UserNav from '../UserNav';
import Logo from '../Logo';

export default function Header() {
  return (
    <Container>
      <header className="header">
        <Logo />
        <SearchBar />
        <UserNav />
      </header>
    </Container>
  );
}

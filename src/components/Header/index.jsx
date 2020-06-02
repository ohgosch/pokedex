import React from 'react';

import logo from 'assets/img/logo.png';

import { Container, Logo, LogoLink } from './styles';

export const Header = () => (
  <Container>
    <LogoLink href="/">
      <Logo src={logo} />
    </LogoLink>
  </Container>
);

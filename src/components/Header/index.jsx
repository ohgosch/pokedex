import React from 'react';

import { ROUTES } from 'logic/constants';

import logo from 'assets/img/logo.png';

import { Container, Logo, LogoLink, Title } from './styles';

export const Header = () => (
  <Container>
    <LogoLink to={ROUTES.MAIN}>
      <Title>Pokedéx</Title>
      <Logo src={logo} />
    </LogoLink>
  </Container>
);

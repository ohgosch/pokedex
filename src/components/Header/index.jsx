import React from 'react';

import { ROUTES } from 'logic/constants';

import logo from 'assets/img/logo.png';

import { Container, Logo, LogoLink } from './styles';

export const Header = () => (
  <Container>
    <LogoLink to={ROUTES.MAIN}>
      <Logo src={logo} />
    </LogoLink>
  </Container>
);

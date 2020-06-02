import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, TitleLink } from './styles';

export const PokemonItem = ({ title, link }) => (
  <Container>
    <Title>
      <TitleLink as="a" href={link}>
        {title}
      </TitleLink>
    </Title>
  </Container>
);

PokemonItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, Title, TitleLink } from './styles';

export const PokemonItem = ({ title, link }) => (
  <Container>
    <Title>
      <TitleLink as={Link} to={link}>
        {title}
      </TitleLink>
    </Title>
  </Container>
);

PokemonItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

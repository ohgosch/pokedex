import React from 'react';

import { PokemonItem } from 'components/PokemonItem';
import { Container, PokemonList } from './styles';

export const Main = () => (
  <Container>
    <PokemonList>
      <PokemonItem title="Pokémon" link="/" />
    </PokemonList>
  </Container>
);

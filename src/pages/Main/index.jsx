import React, { useEffect, useState } from 'react';

import { PokemonItem } from 'components/PokemonItem';

import { getPokemonList } from 'logic/requests/pokemon';
import { urlToId } from 'logic/urlToId';
import { ROUTES } from 'logic/constants';

import { Container, PokemonList } from './styles';

export const Main = () => {
  const [pokemons, setPokemons] = useState([]);

  function replaceUrlToId(list) {
    return list.map(({ url, ...rest }) => ({ id: urlToId(url), ...rest }));
  }

  useEffect(() => {
    async function fetch() {
      const { data } = await getPokemonList();
      setPokemons(replaceUrlToId(data.results));
    }

    fetch();
  }, []);

  return (
    <Container>
      <PokemonList>
        {pokemons.map(({ name, id }) => (
          <PokemonItem
            key={id}
            title={name}
            link={ROUTES.POKEMON_DETAIL.replace(':id', id)}
          />
        ))}
      </PokemonList>
    </Container>
  );
};

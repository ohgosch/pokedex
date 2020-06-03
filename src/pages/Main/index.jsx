import React, { useEffect, useState } from 'react';

import { PokemonItem } from 'components/PokemonItem';
import { Loader } from 'components/Loader';

import { getPokemonList } from 'logic/requests/pokemon';
import { urlToId } from 'logic/urlToId';
import { ROUTES } from 'logic/constants';

import { Container, PokemonList, LoaderWrapper } from './styles';

export const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function replaceUrlToId(list) {
    return list.map(({ url, ...rest }) => ({ id: urlToId(url), ...rest }));
  }

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const { data } = await getPokemonList();
      setPokemons(replaceUrlToId(data.results));
      setIsLoading(false);
    }

    fetch();
  }, []);

  return (
    <Container>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && (
        <PokemonList>
          {pokemons.map(({ name, id }) => (
            <PokemonItem
              key={id}
              title={name}
              link={ROUTES.POKEMON_DETAIL.replace(':id', id)}
            />
          ))}
        </PokemonList>
      )}
    </Container>
  );
};

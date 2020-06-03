import React, { useEffect, useState } from 'react';

import { PokemonItem } from 'components/PokemonItem';
import { Loader } from 'components/Loader';

import { getPokemonList } from 'logic/requests/pokemon';
import { urlToId } from 'logic/urlToId';
import { ROUTES } from 'logic/constants';

import { Container, PokemonList, LoaderWrapper, LoadMore } from './styles';

const itemPerPage = 105;
let total;

export const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  function replaceUrlToId(list) {
    return list.map(({ url, ...rest }) => ({ id: urlToId(url), ...rest }));
  }

  function nextPage() {
    setOffset(offset + itemPerPage);
  }

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const { data } = await getPokemonList({ limit: itemPerPage, offset });
      total = data.count;
      setPokemons([...pokemons, ...replaceUrlToId(data.results)]);
      setIsLoading(false);
    }

    fetch();
  }, [offset]);

  return (
    <Container>
      {pokemons.length > 0 && (
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
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {pokemons.length > 0 && (
        <LoadMore
          as="button"
          onClick={nextPage}
          disabled={isLoading || offset + itemPerPage >= total}
        >
          Load more
        </LoadMore>
      )}
    </Container>
  );
};

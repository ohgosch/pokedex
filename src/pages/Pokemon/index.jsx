import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Loader } from 'components/Loader';
import { getPokemonDetail } from 'logic/requests/pokemon';

import {
  Container,
  Content,
  Header,
  Title,
  ImageWrapper,
  Image,
  Details,
  Detail,
  DetailTitle,
  DetailContent,
  LoaderWrapper,
} from './styles';

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState({});
  const [ready, setReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetch() {
      setIsLoading(true);
      const {
        data: { sprites, stats, abilities, height, weight, types, name },
      } = await getPokemonDetail(id);
      const values = {
        name,
        image: {
          front: sprites.front_default,
          back: sprites.back_default,
        },
        stats: stats.map((item) => item.stat.name),
        abilities: abilities.map((item) => item.ability.name),
        height: height * 10,
        weight: weight * 0.1,
        types: types.map((item) => item.type.name),
      };

      setPokemon(values);
      setReady(true);
      setIsLoading(false);
    }

    fetch();
  }, [id]);

  return (
    <Container as="main">
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {ready && !isLoading && (
        <Content>
          <Header>
            <Title>{pokemon.name}</Title>
            {!!pokemon.image.front && (
              <ImageWrapper>
                <Image src={pokemon.image.front} />
                <Image src={pokemon.image.back} />
              </ImageWrapper>
            )}
          </Header>
          <Details>
            <Detail>
              <DetailTitle>Height</DetailTitle>
              <DetailContent>{`${pokemon.height.toFixed()} cm`}</DetailContent>
            </Detail>
            <Detail>
              <DetailTitle>Weight</DetailTitle>
              <DetailContent>{`${pokemon.weight.toFixed()} kg`}</DetailContent>
            </Detail>
            <Detail>
              <DetailTitle>Stats</DetailTitle>
              <DetailContent>{pokemon.stats.join(', ')}</DetailContent>
            </Detail>
            <Detail>
              <DetailTitle>Abilities</DetailTitle>
              <DetailContent>{pokemon.abilities.join(', ')}</DetailContent>
            </Detail>
            <Detail>
              <DetailTitle>Types</DetailTitle>
              <DetailContent>{pokemon.types.join(', ')}</DetailContent>
            </Detail>
          </Details>
        </Content>
      )}
    </Container>
  );
};

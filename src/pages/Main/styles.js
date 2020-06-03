import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';
import { Button } from 'visual/styles/Button';
import { COLORS } from 'visual/constants';

export const Container = styled.main`
  
`;

export const PokemonList = styled(Wrapper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 45px;
`;

export const LoaderWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: center;
`;

export const LoadMore = styled(Button)`
  margin: 45px auto;
  display: table;
  box-shadow: 0px 0px 8px ${COLORS.greyDarkAlpha};
  font-weight: bold;
`;

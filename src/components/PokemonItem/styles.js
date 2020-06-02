import styled from 'styled-components';

import { Box } from 'visual/styles/Box';
import { COLORS } from 'visual/constants';

import { pxToRem } from 'logic/pxToRem';

export const Container = styled.article`
  margin: 10px;
  display: inline-block;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(16)};
  text-transform: capitalize;
`;

export const TitleLink = styled(Box)`
  text-decoration: none;
  color: ${COLORS.secondary};
  display: block;
`;

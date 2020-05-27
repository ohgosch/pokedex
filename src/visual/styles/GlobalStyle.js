import { createGlobalStyle } from 'styled-components';

import { Roboto, Staatliches } from 'visual/fonts';
import { COLORS } from 'visual/constants';

export const GlobalStyle = createGlobalStyle`
  ${Roboto}
  ${Staatliches}

  body, html {
    min-height: 100vh;
    background-color: ${COLORS.greyWhite};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', serif;
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

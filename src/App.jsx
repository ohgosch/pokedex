import React from 'react';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Header } from 'components/Header';
import { Main } from 'pages/Main';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Main />
  </>
);

export default App;

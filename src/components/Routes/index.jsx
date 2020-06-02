import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Main } from 'pages/Main';
import { Pokemon } from 'pages/Pokemon';
import { ROUTES } from 'logic/constants';

export const Routes = () => (
  <Switch>
    <Route path={ROUTES.MAIN} exact>
      <Main />
    </Route>
    <Route path={ROUTES.POKEMON_DETAIL} exact>
      <Pokemon />
    </Route>
  </Switch>
);

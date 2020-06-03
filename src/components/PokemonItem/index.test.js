import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Route, Link } from 'react-router-dom';

import { ROUTES } from 'logic/constants';
import { PokemonItem } from '.';

const props = {
  title: 'The title',
  link: ROUTES.POKEMON_DETAIL.replace(':id', 25),
};

describe('[Component] PokemonItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={[ROUTES.MAIN]}>
        <Route path={ROUTES.MAIN}>
          <PokemonItem {...props} />
        </Route>
      </MemoryRouter>
    );
  });

  it('Should have a h2 tag', () => {
    expect(wrapper.find('h2')).toHaveLength(1);
  });

  it('Should have a Link', () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });

  it('Should have a Link with correct to prop', () => {
    expect(wrapper.find(Link).props().to).toEqual(props.link);
  });
});

import { urlToId } from './urlToId';

describe('[Logic] urlToId', () => {
  it('Should returns 25', () => {
    expect(urlToId('https://theapi.com/api/v2/pokemon/25/')).toEqual(25);
  });

  it('Should returns 190', () => {
    expect(urlToId('https://theapi.com/api/v2/pokemon/190/')).toEqual(190);
  });

  it('Should returns 1005', () => {
    expect(urlToId('https://theapi.com/api/v2/pokemon/1005/')).toEqual(1005);
  });

  it('Should returns 1', () => {
    expect(urlToId('https://theapi.com/api/v2/pokemon/1/')).toEqual(1);
  });

  it('Should returns 13', () => {
    expect(urlToId('http://theapi.com/api/v2/pokemon/13/')).toEqual(13);
  });
});

import API from "logic/api";

/**
 * Get Pokemon List
 * 
 * @param {limit, offset} settings 
 */
export const getPokemonList = async ({ limit, offset }) => await API().get('/pokemon', {
  params: {
    limit,
    offset
  },
});

export const getPokemonDetail = async (id) => await API().get(`/pokemon/${id}`);

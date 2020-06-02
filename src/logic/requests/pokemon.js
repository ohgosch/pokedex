import API from "logic/api";

export const getPokemonList = async () => await API().get('/pokemon');

export const getPokemonDetail = async (id) => await API().get(`/pokemon/${id}`);

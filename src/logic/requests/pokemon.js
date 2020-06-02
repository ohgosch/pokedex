import API from "logic/api";

export const getPokemonList = async () => await API().get('/pokemon');

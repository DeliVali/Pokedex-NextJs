import { PokedexInterface } from "../Interfaces/PokedexInterface";

// Fetching pokemon data
export async function fetchAllPokemons(page: number): Promise<PokedexInterface> {
  const limit = 20; // Number of pokemons per page
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}
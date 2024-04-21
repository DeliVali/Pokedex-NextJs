"use client";
import NavBar from "../components/NavBar/navbar";
import dynamic from "next/dynamic";
import Spinner from "../components/Spinner/spinner";
import { PokedexInterface } from "../utils/Interfaces/PokedexInterface";
import PokemonCard from "../components/PokemonCard/pokemon-card";
import { useEffect, useState } from "react";

//Lazy loading when fetching pokemon card
const PokedexMenu = dynamic(
  () => import("../components/PokedexMenu/pokedex-menu"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

// Fetching pokemon data
async function fetchAllPokemons(page: number): Promise<PokedexInterface> {
  const limit = 20; // Number of pokemons per page
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
}

export default function Home() {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState<PokedexInterface | null>(null);

  useEffect(() => {
    fetchAllPokemons(page)
      .then((pokemons) => setPokemons(pokemons))
      .catch((error) => console.error(error));
  }, [page]);


  //Generate pokemon cards
  const pokemonCards = (
    <div className="flex flex-wrap p-4 justify-between">
      {pokemons?.results?.map(
        (pokemon: { name: string; url: string }, index) => (
          <PokemonCard key={index} name={pokemon?.name} url={pokemon?.url} />
        )
      )}
    </div>
  );

  //Generate pagination buttons
  const paginationButtons = (
    <div className="flex justify-center items-center">
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2 w-40 text-center"
        onClick={() => {
          if (pokemons && page <= 1) return; // Don't allow page to exceed the total number of pages
          setPage(page - 1);
        }}
      >
        Previous
      </button>
      <span className="text-white">
        {page}/{Math.ceil((pokemons?.count || 1302) / 20)}
      </span>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-40 text-center ml-2"
        onClick={() => {
          if (pokemons && page >= Math.ceil((pokemons?.count || 1302) / 20))
            return; // Don't allow page to exceed the total number of pages
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );

  //Generate search bar

  return (
    <main>
      <NavBar />
      <PokedexMenu
        pokemonCards={pokemonCards}
        paginationButtons={paginationButtons}
      ></PokedexMenu>
    </main>
  );
}

"use client";
import NavBar from "../components/NavBar/navbar";
import dynamic from "next/dynamic";
import Spinner from "../components/Spinner/spinner";
import { PokedexInterface } from "../utils/Interfaces/PokedexInterface";
import PokemonCard from "../components/PokemonCard/pokemon-card";
import { Suspense, use, useEffect, useState } from "react";
import PokedexMenu from "../components/PokedexMenu/pokedex-menu";
import useSWR from "swr";
import { fetchAllPokemons } from "../utils/functions/fetchPokemons";
import fetchAllTypes from "../utils/functions/fetchAllTypes";
import PokemonsWithType from "../utils/functions/fetchAllPokemonsWithType";
import { pokemonType } from "../utils/enum/pokemonType.enum";

//Lazy loading when fetching pokemon card
const LazyLoader = dynamic(
  () => import("../components/LazyLoader/lazy-loader"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);

export default function Home() {
  const [page, setPage] = useState(1);
  const [pokemons, setPokemons] = useState<
    { name: string; url: string }[] | null
  >(null);
  const [pokemonTypes, setPokemonType] = useState<string[] | null>(null);
  const [pageEnd, setPageEnd] = useState(0);
  const [filteredSearch, setFilteredSearch] = useState<string | undefined>(
    undefined
  );

  //Fetch all pokemons
  useEffect(() => {
    if (filteredSearch !== undefined && filteredSearch !== "unknown") {
      PokemonsWithType(filteredSearch!).then(
        (pokemons: { name: string; url: string }[]) => {
          setPokemons(pokemons);
          setPage(1);
          setPageEnd(1);
        }
      );
    } else {
      fetchAllPokemons(page)
        .then((pokemons) => {
          setPokemons(pokemons?.results);
          setPageEnd(Math.ceil((pokemons?.count || 1302) / 20));
        })
        .catch((error) => console.error(error));
    }
  }, [page, filteredSearch]);

  //Generate pokemon cards

  const pokemonCards = (
    <LazyLoader>
      <Suspense>
        <div className="flex flex-wrap p-4 justify-between">
          {pokemons?.map((pokemon: { name: string; url: string }, index) => (
            <PokemonCard key={index} name={pokemon?.name} url={pokemon?.url} />
          ))}
        </div>
      </Suspense>
    </LazyLoader>
  );

  //Generate pagination buttons
  const paginationButtons = (
    <div className="flex flex-col sm:flex-row justify-center items-center">
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2 w-40 text-center mb-2 sm:mb-0 sm:mr-0 sm:w-auto"
        onClick={() => {
          if (pokemons && page <= 1) return; // Don't allow page to exceed pages available
          setPage(page - 1);
        }}
      >
        Previous
      </button>
      <span className="text-white mb-2 sm:mb-0 sm:mx-4">
        {page}/{pageEnd}
      </span>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-40 text-center ml-2 sm:ml-0 sm:w-auto"
        onClick={() => {
          if (pokemons && page >= pageEnd) return; // Don't allow page to exceed the total number of pages
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );

  //Generate search bar
  const searchbar = (
    <select
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-2 sm:ml-0"
      onChange={(e) => setFilteredSearch(e.target.value)}
    >
      {Object.keys(pokemonType)?.map((type, index) => {
        return (
          <option key={index} value={type}>
            {String(type).toUpperCase()}
          </option>
        );
      })}
    </select>
  );
  return (
    <main>
      <NavBar />
      <PokedexMenu
        pokemonCards={pokemonCards}
        paginationButtons={paginationButtons}
        searchbar={searchbar}
      ></PokedexMenu>
    </main>
  );
}

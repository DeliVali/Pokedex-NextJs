import React, { useEffect, useState } from "react";

function PokemonInfoBox({ pokemonId }: { pokemonId: string }) {
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.log("Error fetching Pokemon data:", error);
      });
  }, [pokemonId]);

  return (
    <div className="relative top-36">
      <h1 className="text-center">{pokemonData?.name}</h1>
      <div className="m-7">
        <h2 className="flex items-baseline">
          Ataque:
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{
                width:
                  pokemonData?.stats?.[1]?.base_stat >= 100
                    ? "100%"
                    : `${pokemonData?.stats?.[1]?.base_stat}%`,
              }}
            ></div>
          </div>
          <span className="ml-2">{pokemonData?.stats?.[1]?.base_stat}</span>
        </h2>
        <h2 className="flex items-baseline">
          Defensa:
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-red-500 h-2.5 rounded-full"
              style={{
                width:
                  pokemonData?.stats?.[2]?.base_stat >= 100
                    ? "100%"
                    : `${pokemonData?.stats?.[2]?.base_stat}%`,
              }}
            ></div>
          </div>
          <span className="ml-2">{pokemonData?.stats?.[2]?.base_stat}</span>{" "}
        </h2>
        <h2 className="font-bold">Movimientos:</h2>
        <ul>
          {pokemonData?.moves?.slice(0, 4).map((move: any, index: number) => (
            <li key={move.move.name}>
              {index + 1}.- {move.move.name}
            </li>
          ))}
        </ul>
        <h2 className="font-bold">Habilidades:</h2>
        <ul>
          {pokemonData?.abilities?.map((ability: any, index: number) => (
            <li key={ability.ability.name}>
              {index + 1}.- {ability.ability.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonInfoBox;

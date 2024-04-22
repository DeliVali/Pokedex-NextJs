"use client";
import "./PokemonCard.css";
import Image from "next/image";
import { pokemonTypeColors } from "@/app/utils/enum/pokemonType.enum";
import { useEffect, useState } from "react";
import { url } from "inspector";

function PokemonCard(pokemon: { name: string; url: string }) {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [type, setType] = useState<string>("");
  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setType(data.types[0].type.name);
        console.log(data.types[0].type.name);
      });
  }, [pokemon.url]);

  return (
    <div
      className="rounded overflow-hidden shadow-lg pokemonCard mx-3 my-3 max-h-lvh non"
      style={{
        backgroundColor:
          pokemonTypeColors[type as keyof typeof pokemonTypeColors],
      }}
    >
      <div className="flex justify-center">
        <Image
          width={150}
          height={150}
          className="p-5"
          alt={"Sprite of " + pokemon?.name}
          src={pokemonData?.sprites?.front_default || "/MissingNO.png"}
        />
      </div>
      <h1 className="text-center ">{pokemon?.name}</h1>
    </div>
  );
}

export default PokemonCard;

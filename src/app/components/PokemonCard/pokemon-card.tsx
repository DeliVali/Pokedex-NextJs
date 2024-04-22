"use client";
import "./PokemonCard.css";
import Image from "next/image";
import { pokemonTypeColors } from "@/app/utils/enum/pokemonType.enum";
import { useEffect, useState } from "react";
import { url } from "inspector";
import Link from "next/link";

function PokemonCard(pokemon: { name: string; url: string }) {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonId, setPokemonId] = useState<number>(0);
  const [type, setType] = useState<string>("");
  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
        setType(data.types[0].type.name);
        setPokemonId(data.id);
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
      <Link
        href={{ pathname: "/PokemonInfo", query: { pokemonId: pokemonId } }}
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
      </Link>
    </div>
  );
}

export default PokemonCard;

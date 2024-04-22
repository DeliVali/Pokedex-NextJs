"use client";
import { Suspense, useState } from "react";
import Image from "next/image";
import "./PokemonInfoCard.css";
import PokemonInfoBox from "../PokemonInfo/pokemon-info";

function PokemonInfoCard({ pokemonId }: { pokemonId: string }) {
  const [background, setBackground] = useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
  );

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg pokemonInfoCard max-h-lvh non">
        <Image
          src={background}
          alt="A image depicting a pokemon sprite"
          width={200}
          height={200}
          className="pokemonSprite"
          objectFit="contain"
        />

        <PokemonInfoBox pokemonId={pokemonId} />
      </div>
    </>
  );
}

export default PokemonInfoCard;

"use client";
import { useState } from "react";
import Image from "next/image";
import "./PokemonInfoCard.css";
import PokemonInfoBox from "../PokemonInfo/pokemon-info";
import { PokemonInterface } from "@/app/utils/Interfaces/PokemonInterface";

function PokemonInfoCard(pokemonInfo: PokemonInterface) {
  const [background, setBackground] = useState(
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png"
  );

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg pokemonCard max-h-lvh non">
        <Image
          src={background}
          alt="A image depicting a pokemon sprite"
          width={200}
          height={200}
          className="pokemonSprite"
          objectFit="contain"
        />
        <PokemonInfoBox />
      </div>
    </>
  );
}

export default PokemonInfoCard;

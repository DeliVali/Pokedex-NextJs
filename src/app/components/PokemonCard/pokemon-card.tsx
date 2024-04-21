import { PokedexInterface } from "@/app/utils/Interfaces/PokedexInterface";
import "./PokemonCard.css";
import Image from "next/image";
import { pokemonType } from "@/app/utils/enum/pokemonType.enum";
async function PokemonCard(pokemon: { name: string; url: string }) {
  const pokemonData = await fetch(pokemon.url).then((res) => res.json());
  const type: string = pokemonData?.types[0].type.name;
  return (
    <div
      className="rounded overflow-hidden shadow-lg pokemonCard mx-3 my-3 max-h-lvh non"
      style={{ backgroundColor: pokemonType[type as keyof typeof pokemonType] }}
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

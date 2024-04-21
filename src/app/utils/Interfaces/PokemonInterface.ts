import { MoveSetInterface } from "./MoveSetInterface";


export interface PokemonInterface {
    pokemonId?: number;
    pokemonName?: string;
    pokemonSpriteUrl?: string;
    pokemonAttack?: number;
    pokemonDefense?: number;
    pokemonMoveset?: MoveSetInterface[];
    pokemonAbilities?: string[];

}
export default function PokemonsWithType(type: string) {
    return fetch(`https://pokeapi.co/api/v2/type/${type}`)
        .then((res) => res.json())
        .then((data) => {
            return data.pokemon.map((pokemon: { pokemon: { name: string; url: string; }; }) => {
                return {
                    name: pokemon.pokemon.name,
                    url: pokemon.pokemon.url
                };
            });
        });
}
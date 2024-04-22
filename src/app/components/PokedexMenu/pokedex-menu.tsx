import "./pokedex-menu.css";

function PokedexMenu({
  pokemonCards,
  paginationButtons,
  searchbar,
}: {
  pokemonCards: React.ReactNode;
  paginationButtons: React.ReactNode;
  searchbar: React.ReactNode;
}) {
  return (
    <>
      <div className="rounded shadow-lg mx-3 pokedex-menu my-2 w-full">
        <div className="bg-red-700 rounded-md top-bottom-pokedex-Columns flex align-middle items-center">
          <div className="flex items-center">
            <div className="circle">
              <div className="circle-with-spotlight"></div>
            </div>
            <span className="text-center align-middle text-white text-lg ml-4">
              POKEDEX
            </span>
          </div>
          <div className="flex justify-evenly w-full">{paginationButtons}</div>
          <div className="flex justify-evenly w-full">{searchbar}</div>
        </div>

        <div>{pokemonCards}</div>
        <div className="bg-red-700 rounded left-right-pokedex-Columns relative top-3/4 "></div>
      </div>
    </>
  );
}
export default PokedexMenu;

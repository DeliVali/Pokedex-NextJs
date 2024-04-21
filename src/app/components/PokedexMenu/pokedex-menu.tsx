import "./pokedex-menu.css";
function PokedexMenu({
  pokemonCards,
  paginationButtons,
}: {
  pokemonCards: React.ReactNode;
  paginationButtons: React.ReactNode;
}) {
  return (
    <>
      <div className="rounded shadow-lg mx-3 pokedex-menu my-2">
        <div className="bg-red-700 rounded-md top-bottom-pokedex-Columns flex align-middle items-center">
          <div className="flex items-center">
            <div className="circle">
              <div className="circle-with-spotlight"></div>
            </div>
            <span className="text-center align-middle text-white text-lg ml-4">
              POKEDEX
            </span>
          </div>
          <div className="flex justify-evenly w-full">
            {paginationButtons}
            {/* <select className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ml-2">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select> */}
          </div>
        </div>

        <div>{pokemonCards}</div>
        <div className="bg-red-700 rounded left-right-pokedex-Columns relative top-3/4 "></div>
      </div>
    </>
  );
}
export default PokedexMenu;

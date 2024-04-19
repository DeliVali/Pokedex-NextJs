"use client"; // 👈 use it here
import { useState } from "react";

function PokemonCard() {
  const [background, setBackground] = useState(
    "https://static.wikia.nocookie.net/pokemon-ultra-fire-sun/images/9/99/Cyndaquil.png/revision/latest?cb=20191018202642"
  );
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg pokemonCard h-full">
        <div
          style={{
            background: `url(${background})`,
          }}
        ></div>
      </div>
    </>
  );
}

export default PokemonCard;

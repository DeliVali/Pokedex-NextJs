"use client";
import dynamic from "next/dynamic";
import NavBar from "../../components/NavBar/navbar";
import Spinner from "@/app/components/Spinner/spinner";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PokemonInfo() {
  const searchParams = useSearchParams();
  const [pokemonId, setPokemonId] = useState<string>("1");
  useEffect(() => {
    setPokemonId(searchParams.get("pokemonId") || "1");
  }, []);

  const PokemonCard = dynamic(
    () => import("../../components/PokemonInfoCard/pokemon-info-card"),
    {
      ssr: false,
      loading: () => <Spinner />,
    }
  );
  return (
    <main>
      <NavBar />
      <div className=" flex justify-center">
        <PokemonCard pokemonId={pokemonId}></PokemonCard>
      </div>
    </main>
  );
}

import dynamic from "next/dynamic";
import NavBar from "../../components/NavBar/navbar";
import Spinner from "@/app/components/Spinner/spinner";

export default function About() {
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
    </main>
  );
}

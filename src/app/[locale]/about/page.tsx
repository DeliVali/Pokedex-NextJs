import NavBar from "../../components/NavBar/navbar";

export default function About() {
  return (
    <main>
      <NavBar />
      <p className="p-4">
        Este proyecto fue creado como una prueba tecnica, utilizando solo REACT
        y NextJS, los componentes fueron hechos a manos y no se utilizo ningun
        tipo de libreria UI, se utilizo la API POKEAPI para el consumo de los
        datos.
      </p>
      <span className=" w-full text-end block">
        Creado por Jeffrey Romero Del Val.
      </span>
    </main>
  );
}

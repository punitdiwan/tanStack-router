import { Link, createFileRoute } from "@tanstack/react-router";
import { getPokemons } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemons,
  loader: getPokemons,
});

function Pokemons() {
  const pokemons = Route.useLoaderData();


  return (
    <>
      <h2>Pokemons</h2>
      <ul className="list-disc list-inside">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link
              to=""
              className="text-blue-500"

            >
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul >
    </>
  );
}

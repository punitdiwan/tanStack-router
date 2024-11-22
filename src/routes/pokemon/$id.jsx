

import { createFileRoute, redirect } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/$id")({
  component: Pokemon,
  loader: async ({ params }) => {
    if (isNaN(Number(params.id))) {
      alert("Invalid Pokemon ID");
      throw redirect({ to: "/pokemon" });
    }

    return await getPokemon(params.id);
  },
  // staleTime: 3600 * 1000
});

function Pokemon() {
  const { id } = Route.useParams();
  const pokemon = Route.useLoaderData();
  console.log(pokemon);
  return (
    <div className="max-w-[300px]">


      {pokemon.name}

      <div className="flex h-[110px] items-center">
        <div className="size-20">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

        </div>

      </div>
    </div >
  );
}
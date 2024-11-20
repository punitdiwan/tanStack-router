

export async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
}


export async function getPokemons() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await response.json();
  console.log(data);


  return data.results.map((r) => ({
    id: r.url.split("/").slice(-2, -1)[0],
    name: r.name,
  }));
}

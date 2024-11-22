

export async function getUser(id) {
  const response = await fetch(`https://650c2b6047af3fd22f673388.mockapi.io/api/v1/users/${id}`);
  return await response.json();
}


export async function getUsers() {
  const response = await fetch(`https://650c2b6047af3fd22f673388.mockapi.io/api/v1/users`);
  const data = await response.json();
  console.log(data);
  return data.map((r) => ({
    id: r.id,
    name: r.name,
  }));
}

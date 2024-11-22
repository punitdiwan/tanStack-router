import { Link, createFileRoute } from '@tanstack/react-router'
import { getUsers } from '../../api/users'

export const Route = createFileRoute('/users/')({
  component: Users,
  loader: getUsers,
  staleTime: Infinity,
  // staleTime: 0,
  // staleTime: 3600 * 1000,
})

function Users() {
  const users = Route.useLoaderData()
  console.log(users);

  return (
    <>
      <h2>Users ({users.length})</h2>
      <ol className="list-disc list-inside">
        {users instanceof Array ? users.map((user) => (
          <li key={user.id}>
            <Link
              to={'/users/$id'}
              className="text-blue-500"
              params={{
                id: user.id,
              }}
            >
              {user.name}
            </Link>
          </li>
        )) : null}
      </ol>
    </>
  )
}

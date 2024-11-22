import { createFileRoute, redirect } from '@tanstack/react-router'
import { getUser } from '../../api/users'

export const Route = createFileRoute('/users/$id')({
  component: User,
  loader: async ({ params }) => {
    if (isNaN(Number(params.id))) {
      alert('Invalid User ID')
      throw redirect({ to: '/users' })
    }
    return await getUser(params.id)
  },
  staleTime: 3600 * 1000,
})

function User() {
  const { id } = Route.useParams()
  const user = Route.useLoaderData()
  console.log(user)
  return (
    <div className="max-w-[300px]">
      {user.name}

      <div className="flex h-[110px] items-center">
        <div className="size-50">
          <p>User ID : {user.id}</p>
          <p>User Name : {user.name}</p>
        </div>
      </div>
    </div>
  )
}

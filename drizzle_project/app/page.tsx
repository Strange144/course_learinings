import { getUsers, createUser, deleteUser } from "@/actions/index.js"

export default async function Home() {
  const users = await getUsers()

  return (
    <div className="mx-auto max-w-2xl p-6 space-y-8">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Add User</h2>
        <form action={createUser} className="space-y-3">
          <input
            name="name"
            placeholder="Name"
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            name="age"
            type="number"
            placeholder="Age"
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
          >
            Create User
          </button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Users ({users.length})</h2>
        {users.length === 0 ? (
          <p className="text-gray-500 text-sm">No users yet.</p>
        ) : (
          <ul className="space-y-3">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center justify-between border rounded p-4"
              >
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <p className="text-sm text-gray-400">Age: {user.age}</p>
                </div>
                <form action={deleteUser}>
                  <input type="hidden" name="id" value={user.id} />
                  <button
                    type="submit"
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

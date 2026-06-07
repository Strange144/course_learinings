import { createPost, getPosts } from "@/actions/index.js"

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="mx-auto max-w-xl p-6 space-y-6">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Add Post</h2>
        <form action={createPost} className="space-y-2">
          <input
            name="title"
            placeholder="Enter your title"
            className="w-full border rounded px-3 py-2"
          />
          <input
            name="description"
            placeholder="Enter your description"
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create Post
          </button>
        </form>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Posts</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No posts yet.</p>
        ) : (
          <ul className="space-y-3">
            {posts.map((post) => (
              <li key={post.id} className="border rounded p-4">
                <h3 className="font-medium">{post.title}</h3>
                {post.description && (
                  <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                )}
                <p className="text-gray-400 text-xs mt-2">
                  {new Date(post.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

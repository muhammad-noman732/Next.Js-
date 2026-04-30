// Three completely independent data needs → fire all at once
import { getAllUsers, getPosts, getAlbumsByUser } from "@/lib/api";

export default async function DashboardPage() {
  // WRONG way (don't do this) — sequential, slow:
  // const users = await getAllUsers()
  // const posts = await getPosts()
  // const albums = await getAlbumsByUser(1)

  // RIGHT way — all three requests start at the exact same millisecond
  // Promise.all waits for ALL to resolve, then continues
  // Total time = slowest single request, not sum of all
  const [users, posts, albums] = await Promise.all([
    getAllUsers(),
    getPosts(),
    getAlbumsByUser(1), // albums for user 1 as an example
  ]);

  const totalPosts = posts.length;
  const totalUsers = users.length;
  const totalAlbums = albums.length;
  console.log(totalAlbums);

  return (
    <div>
      <h1>dashboard </h1>
      {/* Summary cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <StatCard label="Total Posts" value={totalPosts} />
        <StatCard label="Total Users" value={totalUsers} />
        <StatCard label="User 1 Albums" value={totalAlbums} />
      </div>

      {/* Recent posts */}
      <h2>Recent Posts</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.slice(0, 5).map((post) => (
          <li
            key={post.id}
            style={{ padding: "8px 0", borderBottom: "1px solid #eee" }}
          >
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>

      {/* Users list */}
      <h2>Users</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ padding: "4px 0" }}>
            {user.name} — <span style={{ color: "gray" }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// A small SC sub-component — no 'use client' needed, no props drilling issue
function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ border: "1px solid #eee", borderRadius: 8, padding: 16 }}>
      <p style={{ margin: 0, color: "gray", fontSize: 13 }}>{label}</p>
      <p style={{ margin: "4px 0 0", fontSize: 28, fontWeight: 500 }}>
        {value}
      </p>
    </div>
  );
}

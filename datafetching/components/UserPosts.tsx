import { getPostsByUser } from "@/lib/api";
import { getCachedUser } from "@/lib/cache";

// type Props ={
//     userId : number
// }

async function UserPosts({ userId }: { userId: number }) {
  const [posts, user] = await Promise.all([
    await getPostsByUser(userId),
    await getCachedUser(userId),
    // BUT because getCachedUser is wrapped in React.cache,
    // this makes ZERO additional network requests
    // React returns the memoized result from the page's earlier cal
  ]);

  console.log("psots", posts);
  return (
    <div>
      <h2>
        Posts by {user.name} ({posts.length})
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              padding: "12px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <strong>{post.title}</strong>
            <p style={{ margin: "4px 0 0", color: "gray", fontSize: 14 }}>
              {post.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;

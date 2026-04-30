import { getCommentsByPost, getPost, getUser } from "@/lib/api";

type Props = {
  params: Promise<{ id: string }>;
};

// to generate this at the build time instead of on page refresh and cache
export async function generateStaticParams() {
  return Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const postId = Number(id);
  console.log("post page with id on the server  ", postId);

  // These three fetches are SEQUENTIAL — user blocks author first
  // Could be parallel if we didn't need to show them in order
  const post = await getPost(postId);
  const author = await getUser(post.userId);
  const comments = await getCommentsByPost(postId);

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ color: "gray" }}>
        By {author.name} ({author.email})
      </p>
      <p>{post.description}</p>

      <h2>Comments ({comments.length})</h2>
      {comments.map((comment) => (
        <div
          key={comment.id}
          style={{
            borderLeft: "3px solid #eee",
            paddingLeft: 12,
            marginBottom: 12,
          }}
        >
          <strong>{comment.name}</strong>
          <p style={{ margin: "4px 0", fontSize: 14 }}>{comment.body}</p>
        </div>
      ))}
    </article>
  );
}

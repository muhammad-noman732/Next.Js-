"use client";
// This is a Client Component that RECEIVES a promise as a prop
// It uses React's use() hook to unwrap it
// While the promise is pending, React suspends this component
// The Suspense fallback in the parent shows until use() resolves
import { use } from "react";
import type { Post } from "@/lib/types";

type Props = {
  postsPromise: Promise<Post[]>;
};

export default function BlogPostsClient({ postsPromise }: Props) {
  // use() is like await — but for React components
  // It suspends the component (triggers Suspense fallback in parent)
  // until the promise resolves, then re-renders with the data
  const posts = use(postsPromise);

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.slice(0, 10).map((post) => (
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
  );
}

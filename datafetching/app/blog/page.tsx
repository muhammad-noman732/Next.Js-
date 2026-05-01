import { Suspense } from "react";
import { getPosts } from "@/lib/api";
import BlogPostsClient from "@/components/BlogPostsClient";

export default function BlogPage() {
  // KEY DIFFERENCE: no 'await' here
  // getPosts() starts executing immediately — the Promise is "in flight"
  // We pass the Promise itself as a prop, not the resolved data

  // Why not just await here?
  // If we await, the whole page blocks until posts are ready
  // By passing the Promise, the page renders immediately
  // BlogPostsClient suspends inside the Suspense boundary
  // The rest of the page (header, description) shows instantly
  const postsPromise = getPosts();

  return (
    <div>
      {/* This renders immediately — no waiting */}
      <h1>Blog</h1>
      <p style={{ color: "gray", marginBottom: 24 }}>
        The posts stream in progressively using React use() API
      </p>

      {/* Suspense boundary — fallback shows while postsPromise is pending */}
      <Suspense
        fallback={
          <div>
            <p style={{ color: "gray" }}>Loading posts...</p>
          </div>
        }
      >
        {/* BlogPostsClient receives the promise — not the data */}
        {/* It calls use(postsPromise) inside which causes the suspend */}
        <BlogPostsClient postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}

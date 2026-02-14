"use client";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

function ClientDataFetching() {
  const [posts, setPosts] = useState<PostData[]>([]);

  interface PostData {
    id: number;
    userId: number;
    title: string;
    body: string;
    name: string;
  }
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data: PostData[] = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);
  return (
    <>
      <Header />
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.userId}</p>
            <h1>{post.title}</h1>
          </div>
        ))}
        <div>this tag will be generated in the server</div>
      </div>
    </>
  );
}

export default ClientDataFetching;

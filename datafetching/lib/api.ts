import { User, Post, Album, Comment } from "./types";

const BASE = "https://jsonplaceholder.typicode.com";

// get Posts

export async function getPosts(): Promise<Post[]> {
  const startedAt = Date.now();
  console.log(`[API][getPosts] start ${startedAt}`);

  const res = await fetch(`${BASE}/posts`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch the posts");
  }

  const data = await res.json();
  const endedAt = Date.now();
  console.log(
    `[API][getPosts] end ${endedAt} (duration ${endedAt - startedAt}ms)`,
  );
  return data;
}

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`${BASE}/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
  return res.json();
}

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`${BASE}/users/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the user ");
  }

  const data = res.json();
  return data;
}

export async function getAllUsers(): Promise<User[]> {
  const startedAt = Date.now();
  console.log(`[API][getAllUsers] start ${startedAt}`);

  const res = await fetch(`${BASE}/users`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the users");
  }

  const data = await res.json();
  const endedAt = Date.now();
  console.log(
    `[API][getAllUsers] end ${endedAt} (duration ${endedAt - startedAt}ms)`,
  );
  return data;
}

export async function getPostsByUser(userId: number): Promise<Post[]> {
  const res = await fetch(`${BASE}/user/${userId}/posts`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the user post");
  }

  const data = res.json();
  return data;
}

export async function getAlbumsByUser(userId: number): Promise<Album[]> {
  const startedAt = Date.now();
  console.log(`[API][getAlbumsByUser] start ${startedAt} userId=${userId}`);

  const res = await fetch(`${BASE}/users/${userId}/albums`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch the user albums");
  }

  const data = await res.json();
  const endedAt = Date.now();
  console.log(
    `[API][getAlbumsByUser] end ${endedAt} (duration ${endedAt - startedAt}ms) userId=${userId}`,
  );
  return data;
}

export async function getCommentsByPost(postId: number): Promise<Comment[]> {
  const res = await fetch(`${BASE}/posts/${postId}/comments`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

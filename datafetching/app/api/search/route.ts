import { NextRequest, NextResponse } from "next/server";
// app/api/search/route.ts
// This IS a server-side Route Handler — creates an HTTP endpoint
// Browser JS cannot call the DB directly — it calls this endpoint
// You NEED this for client components that fetch data

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q")?.toLowerCase();
  const normalizedQuery = query ?? "";

  // In a real app: query your DB here
  // For practice: fetch from jsonplaceholder and filter
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 300 }, // cache the base list for 5min
  });
  const posts = await res.json();

  const filtered = posts.filter((post: { body: string; title: string }) => {
    if (!normalizedQuery) return true;

    return (
      post.title.toLowerCase().includes(normalizedQuery) ||
      post.body.toLowerCase().includes(normalizedQuery)
    );
  });

  return NextResponse.json(filtered.slice(0, 10));
}

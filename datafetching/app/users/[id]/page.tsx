import { Suspense } from "react";
import { getCachedUser } from "@/lib/cache"; // React.cache version
import UserPosts from "@/components/UserPosts";

type Props = { params: Promise<{ id: string }> };

export default async function UserPage({ params }: Props) {
  const { id } = await params;
  const userId = Number(id);

  // This MUST happen first — UserPosts needs the userId
  // And we want to show user info immediately while posts load
  const user = await getCachedUser(userId);
  // getCachedUser is wrapped in React.cache
  // If UserPosts ALSO calls getCachedUser(userId), it gets the same result
  // with ZERO additional network requests — this is request memoization

  return (
    <div>
      {/* This renders immediately — no Suspense needed here */}
      <h1>{user.name}</h1>
      <p style={{ color: "gray" }}>
        {user.email} · {user.company.name} · {user.website}
      </p>

      {/* UserPosts needs userId (from user above) — sequential dependency */}
      {/* But we don't block the whole page waiting for posts */}
      {/* Suspense lets us stream posts in when they're ready */}
      <Suspense
        fallback={
          <div>
            <h2>Posts</h2>
            <p style={{ color: "gray" }}>Loading posts...</p>
          </div>
        }
      >
        {/* This component has its own async fetch inside */}
        {/* It will suspend the Suspense boundary while it fetches */}
        <UserPosts userId={userId} />
      </Suspense>
    </div>
  );
}

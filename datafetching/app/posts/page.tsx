import { getPosts } from "@/lib/api";
import { HoverPrefetchLink } from "@/components/HoverPrefetchLink";

export default async function PostPage() {
  const posts = await getPosts();
  console.log("posts page is called ");

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Posts</h1>
        <p className="text-sm text-gray-500 mb-8">
          Cached for 60s — {new Date().toISOString()}
        </p>
        {/* Posts List */}
        <ul className="space-y-6">
          {posts.slice(0, 20).map((post) => (
            <li
              key={post.id}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              <HoverPrefetchLink href={`/posts/${post.id}`} className="">
                <h2 className="text-lg font-semibold text-blue-600 hover:underline mb-2">
                  {post.title}
                </h2>
              </HoverPrefetchLink>

              <p className="text-gray-600 leading-relaxed">
                {post.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

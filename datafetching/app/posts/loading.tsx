export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {" "}
      <div className="max-w-4xl mx-auto">
        <p className="text-gray-500 mb-8 animate-pulse">Loading posts...</p>

        {/* Skeleton cards */}
        <div className="space-y-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="animate-pulse space-y-4">
                {/* Title skeleton */}
                <div className="h-5 bg-gray-200 rounded w-2/3"></div>

                {/* Content skeleton */}
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

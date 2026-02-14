export default function Loading() {
  return (
    <div className="space-y-4 p-4">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="p-4 bg-white rounded-lg shadow-md animate-pulse flex flex-col gap-2"
        >
          <div className="h-5 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}

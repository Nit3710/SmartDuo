export default function Loading() {
  return (
    <div className="animate-pulse p-4">
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      <p className="mt-4 text-gray-500">Loading analytics data</p>
    </div>
  );
}
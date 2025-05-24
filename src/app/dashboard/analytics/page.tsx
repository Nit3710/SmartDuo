import { getAnalyticsData } from "@/app/api/analytics";

export default async function AnalyticsPage() {
    const data = await getAnalyticsData();
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-700">{item.body}</p>
                        <span className="text-xs text-gray-400">User ID: {item.userId}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}



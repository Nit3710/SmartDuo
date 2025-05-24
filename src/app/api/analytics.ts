import { AnalyticsData } from "../types/analytic";

export async function getAnalyticsData(): Promise<AnalyticsData[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log("response data>>>", res);
    if (!res.ok) {
        throw new Error("there might be a error to fetch data");
    }
    return res.json();
}
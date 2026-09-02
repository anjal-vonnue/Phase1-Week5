export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}
export class ApiClient {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("error while fetching data");
    }

    return response.json() as Promise<T>;
  }
}

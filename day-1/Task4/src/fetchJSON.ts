export async function fetchJson(url: string): Promise<unknown> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("errow while fetching posts");
  }
  const result = await response.json();
  return result;
}

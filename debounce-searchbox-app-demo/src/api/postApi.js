const BASE_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPostes(query = "") {
  try {
    const resp = await fetch(`${BASE_URL}/posts`);

    const data = await resp.json();

    if (!Array.isArray(data)) return [];
    if (query) {
      return data.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    return data;
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

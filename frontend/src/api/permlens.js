const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("API URL is not configured");
}

export async function fetchLabel(slug) {
  const res = await fetch(`${API_URL}/api/app/${slug}/label`);

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("Invalid API response");
  }

  if (!res.ok) {
    throw new Error(data?.error || `Request failed (${res.status})`);
  }

  return data;
}
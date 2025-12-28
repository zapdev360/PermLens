const API_URL = import.meta.env.VITE_API_URL;

export async function fetchAppLabel(slug) {
  if (!API_URL) {
    throw new Error("API URL not configured");
  }

  const res = await fetch(`${API_URL}/api/app/${slug}/label`);

  if (!res.ok) {
    throw new Error(`API request failed (${res.status})`);
  }

  return res.json();
}
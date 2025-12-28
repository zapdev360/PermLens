const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error("API URL is not configured");
}

export async function fetchLabel(slug) {
  const res = await fetch(`${API_URL}/api/app/${slug}/label`);

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || `Request failed (${res.status})`);
  }

  return res.json();
}
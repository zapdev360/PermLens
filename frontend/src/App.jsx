import { useState } from "react";
import { fetchLabel } from "./api/permlens";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import LabelView from "./components/LabelView";
import ErrorState from "./components/ErrorState";

function App() {
  const [label, setLabel] = useState(null);
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState(null);

  async function handleSearch(slug) {
    const clean = slug.trim();
    setSlug(clean);

    if (!clean) {
      setLabel(null);
      setMeta(null);
      setError("Enter a GitHub App slug to inspect.");
      return;
    }

    setError(null);
    setLabel(null);
    setMeta(null);
    setLoading(true);

    const start = Date.now();

    try {
      const data = await fetchLabel(clean);

      setLabel(data.label || null);
      setMeta({
        resolved: data.resolved,
        fallback: data.fallback,
        rateLimits: data.rate_limits,
        api: data.api,
        cache: data.cache,
        app: data.app,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      const elapsed = Date.now() - start;
      if (elapsed < 800) {
        await new Promise((r) => setTimeout(r, 800 - elapsed));
      }
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <AppHeader />

        <AppSearch onSubmit={handleSearch} loading={loading} />

        {loading && (
          <div className="mt-4 text-sm text-blue-300">
            Loading privacy label…
          </div>
        )}

        {error && <ErrorState message={error} />}

        {meta?.fallback && !meta?.rateLimits?.authenticated && (
          <div className="mt-4 rounded bg-yellow-500/10 px-4 py-2 text-xs text-yellow-300">
            App could not be resolved! Showing permissions for the PermLens GitHub App instead.
          </div>
        )}

        {meta?.rateLimits?.unauthenticated &&
         meta?.rateLimits?.authenticated && (
          <div className="mt-4 rounded bg-red-500/10 px-4 py-2 text-xs text-red-300">
            GitHub API rate limit exceeded! Please try again later.
          </div>
        )}

        {label && <LabelView label={label} meta={meta} slug={slug} />}
      </div>
    </main>
  );
}

export default App;
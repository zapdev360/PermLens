import { useEffect, useState } from "react";
import { fetchLabel } from "./api/permlens";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import LabelView from "./components/LabelView";
import ErrorState from "./components/ErrorState";

function App() {
  const [label, setLabel] = useState(null);
  const [error, setError] = useState(null);
  const [resolved, setResolved] = useState(true);
  const [loading, setLoading] = useState(false);

  async function handleSearch(slug) {
    const clean = slug.trim();

    if (!clean) {
      setLabel(null);
      setResolved(true);
      setError("Enter a GitHub App slug to inspect.");
      return;
    }

    try {
      setError(null);
      setLoading(true);

      const start = Date.now();
      const data = await fetchLabel(slug);

      const elapsed = Date.now() - start;
      if (elapsed < 1000) {
        await new Promise((r) => setTimeout(r, 1000 - elapsed));
      }

      setResolved(data.resolved);
      setLabel(data.label);
    } catch (err) {
      setLabel(null);
      setResolved(true);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <AppHeader />

        <AppSearch onSubmit={handleSearch} loading={loading}/>

        {loading && (
          <div className="mt-4 text-sm text-gray-400">
            Loading privacy label…
          </div>
        )}

        {error && <ErrorState message={error} />}

        {!resolved && !error && (
          <div className="mt-4 rounded bg-yellow-500/10 px-4 py-2 text-xs text-yellow-300">
            App could not be resolved! Showing permissions for the PermLens GitHub App instead.
          </div>
        )}

        {label && <LabelView label={label} />}
      </div>
    </main>
  );
}

export default App;
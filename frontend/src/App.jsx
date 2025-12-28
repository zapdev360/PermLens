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

      const data = await fetchLabel(slug);

      setResolved(data.resolved);
      setLabel(data.label);
    } catch (err) {
      setLabel(null);
      setResolved(true);
      setError(err.message);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <AppHeader />

        <AppSearch onSubmit={handleSearch} />

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
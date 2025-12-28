import { useEffect, useState } from "react";
import { fetchAppLabel } from "./api";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAppLabel("permlens")
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <h1 className="text-4xl font-semibold mb-6">PermLens</h1>

        {error && (
          <p className="text-red-400">Error: {error}</p>
        )}

        {data && (
          <pre className="mt-6 bg-slate-900 p-4 rounded text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}

        {!data && !error && (
          <p className="text-slate-400">Loading privacy label…</p>
        )}
      </div>
    </main>
  );
}

export default App;
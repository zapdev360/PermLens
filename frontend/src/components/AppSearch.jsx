import { useState } from "react";

function AppSearch({ onSubmit, loading }) {
  const [value, setValue] = useState("");

  const sampleApps = ["gitguardian", "octobox"];

  return (
    <div className="mt-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(value);
        }}
        className="flex flex-col gap-2 sm:flex-row"
      >
        <input
          type="text"
          placeholder="Enter a GitHub App slug"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full flex-1 rounded bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500 disabled:opacity-50 sm:w-auto"
        >
          {loading ? "Inspecting…" : "Inspect"}
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-400">
        <span>Try:</span>

        {sampleApps.map((app) => (
          <button
            key={app}
            type="button"
            onClick={() => setValue(app)}
            className="rounded bg-white/10 px-2 py-1 hover:bg-white/20 transition"
          >
            {app}
          </button>
        ))}
      </div>

      <p className="mt-2 text-xs text-gray-500">
        Unresolved slugs automatically fall back to the PermLens GitHub App.
      </p>
    </div>
  );
}

export default AppSearch;
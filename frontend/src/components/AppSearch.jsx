import { useState } from "react";

function AppSearch({ onSubmit }) {
  const [value, setValue] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(value.trim());
      }}
      className="mt-6 flex gap-2"
    >
      <input
        type="text"
        placeholder="GitHub App slug (e.g. gitguardian)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 rounded bg-white/10 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring"
      />
      <button
        type="submit"
        className="rounded bg-indigo-600 px-4 py-2 text-sm font-medium hover:bg-indigo-500"
      >
        Inspect
      </button>
    </form>
  );
}

export default AppSearch;
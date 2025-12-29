function LabelView({ label }) {
  const styles =
    {
      low: "text-emerald-400 bg-emerald-500/10",
      moderate: "text-amber-400 bg-amber-500/10",
      high: "text-rose-400 bg-rose-500/10",
    }[label.overall_sensitivity] || "text-gray-300";

  return (
    <section className="mt-6 rounded-xl bg-white/5 p-6">
      <header className="mb-6">
        <h2 className="text-xl font-semibold">Privacy Label</h2>
        <div
          className={`mt-2 inline-flex items-center rounded px-3 py-1 text-sm font-medium ${styles}`}
        >
          Overall sensitivity: {label.overall_sensitivity}
        </div>
      </header>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Data categories
        </h3>
        <ul className="space-y-3">
          {label.data_categories.map((cat) => (
            <li key={cat.key} className="rounded bg-black/30 p-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">{cat.label}</span>
                <span className="text-xs text-gray-400">
                  {cat.sensitivity}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-300">
                {cat.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Declared permissions
        </h3>
        <ul className="grid grid-cols-2 gap-2 text-xs">
          {label.permissions.map((p) => (
            <li
              key={p.name}
              className="rounded bg-black/30 px-2 py-1 text-gray-200"
            >
              {p.name}: {p.access}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LabelView;
function LabelView({ label }) {
  return (
    <div className="mt-6 rounded-lg bg-white/5 p-6 text-left text-sm text-gray-100">
      <h2 className="text-lg font-semibold mb-4">Privacy Label</h2>

      <div className="mb-4">
        <span className="font-medium">Overall sensitivity:</span>{" "}
        <span className="capitalize">{label.overall_sensitivity}</span>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Data categories</h3>
        <ul className="space-y-2">
          {label.data_categories.map((cat) => (
            <li key={cat.key}>
              <div className="font-semibold">{cat.label}</div>
              <div className="text-gray-300 text-xs">
                {cat.description} (Sensitivity: {cat.sensitivity})
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-medium mb-2">Permissions</h3>
        <ul className="grid grid-cols-2 gap-2 text-xs">
          {label.permissions.map((p) => (
            <li
              key={p.name}
              className="rounded bg-black/30 px-2 py-1"
            >
              {p.name}: {p.access}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LabelView;
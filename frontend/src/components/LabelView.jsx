const API_URL = import.meta.env.VITE_API_URL;

function LabelView({ label, meta, slug }) {
  const styles =
    {
      low: "text-emerald-400 bg-emerald-500/10",
      moderate: "text-amber-400 bg-amber-500/10",
      high: "text-rose-400 bg-rose-500/10",
    }[label.overall_sensitivity] || "text-gray-300";

  let cacheMinutesAgo = null;

  if (meta?.cache?.hit && meta.cache.cached_at) {
    const cachedAt = new Date(meta.cache.cached_at);
    const diffMs = Date.now() - cachedAt.getTime();
    cacheMinutesAgo = Math.max(1, Math.floor(diffMs / 60000));
  }

  return (
    <section className="relative mt-6 rounded-xl bg-white/5 p-4 sm:p-6">
      {slug && (
        <div className="mb-4 flex flex-col items-start gap-3 sm:absolute sm:right-4 sm:top-6 sm:mb-0 sm:items-end [@media(max-height:700px)]:absolute [@media(max-height:700px)]:right-4 [@media(max-height:700px)]:top-6 [@media(max-height:700px)]:mb-0 [@media(max-height:700px)]:items-end">
          <div className="flex items-start gap-2">
            {meta?.cache?.hit && (
              <div className="group relative">
                <div className="cursor-pointer rounded-full bg-white/10 px-2 py-1 text-xs text-gray-300">
                  ⓘ
                </div>

                <div className="pointer-events-none absolute right-0 top-8 w-56 rounded bg-black/90 px-3 py-2 text-xs text-gray-200 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  Showing a cached privacy label.
                  <br />
                  Cached {cacheMinutesAgo} minute{cacheMinutesAgo !== 1 && "s"}{" "} ago.
                </div>
              </div>
            )}

            <a
              href={`${API_URL}/api/app/${slug}/label`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-white/10 px-2 py-1 text-xs text-gray-300 hover:bg-white/20"
              title="View raw JSON response"
            >
              View JSON
            </a>
          </div>

          {meta?.app?.id && (
            <span className="rounded bg-black/30 px-2 py-1 text-xs text-gray-400">
              App ID: {meta.app.id}
            </span>
          )}
        </div>
      )}

      <header className="mb-6">
        <h2 className="text-lg font-semibold sm:text-xl">Privacy Label</h2>
        <div
          className={`mt-2 inline-flex max-w-full flex-wrap items-center rounded px-3 py-1 text-sm font-medium break-words ${styles}`}
        >
          Overall sensitivity: {label.overall_sensitivity}
        </div>
      </header>

      <div className="mb-6">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-400">
          Data categories
        </h3>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 [@media(max-height:700px)]:grid-cols-2">
          {label.data_categories.map((cat) => (
            <li key={cat.key} className="rounded bg-black/30 p-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-medium min-w-0">{cat.label}</span>
                <span className="text-xs text-gray-400 shrink-0">
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
        <ul className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2 [@media(max-height:700px)]:grid-cols-2">
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

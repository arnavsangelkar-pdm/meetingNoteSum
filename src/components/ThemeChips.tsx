export default function ThemeChips({
  themes
}: {
  themes: Array<{ key: string; label: string; count: number }>;
}) {
  if (themes.length === 0) {
    return <p className="text-sm text-gray-600">No strong recurring themes detected.</p>;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {themes.map(t => (
        <span
          key={t.key}
          className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-sm"
        >
          {t.label} <span className="text-xs text-gray-500">×{t.count}</span>
        </span>
      ))}
    </div>
  );
}


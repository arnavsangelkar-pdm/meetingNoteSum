import { CallNote } from './types';
import { THEME_LABELS } from '../data/themes';

export function computeThemes(calls: CallNote[]) {
  const counts = new Map<string, number>();
  for (const c of calls) {
    for (const t of c.topics) {
      counts.set(t, (counts.get(t) ?? 0) + 1);
    }
  }
  const themed = [...counts.entries()].map(([key, count]) => ({
    key,
    label: THEME_LABELS[key] ?? key,
    count
  }));
  themed.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
  return themed;
}


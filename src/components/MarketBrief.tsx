import React from 'react';
import { Headline } from '../lib/types';
import { formatDate } from '../lib/string';

export default function MarketBrief({ headlines }: { headlines: Headline[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3">
      {headlines.slice(0, 3).map(h => (
        <li key={h.id} className="rounded-xl border p-3">
          <div className="font-medium">{h.title}</div>
          <div className="text-xs text-gray-600">{h.source} • {formatDate(h.date)}</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {h.tags.map(t => (
              <span key={t} className="text-xs border rounded-full px-2 py-1 text-gray-700">
                {t}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}


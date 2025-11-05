import React from 'react';
import { CallNote } from '../lib/types';
import { formatDate } from '../lib/string';

const badgeClass: Record<CallNote['sentiment'], string> = {
  calm: 'bg-gray-100 text-gray-700',
  concerned: 'bg-amber-100 text-amber-800',
  optimistic: 'bg-green-100 text-green-800',
  panicked: 'bg-red-100 text-red-700'
};

export default function CallSummaryList({ calls }: { calls: CallNote[] }) {
  return (
    <ul className="space-y-3">
      {calls.map(c => (
        <li key={c.id} className="rounded-xl border p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-600">{formatDate(c.date)}</span>
            <span className={`text-xs px-2 py-1 rounded-full ${badgeClass[c.sentiment]}`}>
              {c.sentiment}
            </span>
          </div>
          <p className="mt-2 text-sm">{c.summary}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {c.topics.map(t => (
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


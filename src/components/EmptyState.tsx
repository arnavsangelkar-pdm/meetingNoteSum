import React from 'react';

export default function EmptyState() {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <div className="text-4xl">🗒️</div>
      <p className="mt-2 text-sm text-gray-600">No recent calls available for this client.</p>
    </div>
  );
}


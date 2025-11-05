import { Client } from '../lib/types';

export default function ClientSelector({
  clients,
  value,
  onChange
}: {
  clients: Client[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
      <label className="text-sm text-gray-700">Select Client</label>
      <select
        className="rounded-lg border px-3 py-2 bg-white"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {clients.map(c => (
          <option key={c.id} value={c.id}>
            {c.name} • {c.segment}
          </option>
        ))}
      </select>
    </div>
  );
}


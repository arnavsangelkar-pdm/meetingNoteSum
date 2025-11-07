import React from 'react';
import Section from '../Section';
import { Client } from '../../lib/types';
import { ClientProfile, Affiliation, ImportantDate, RecurringEvent, Milestone, Interest, HouseholdMember } from '../../lib/profileTypes';
import { useProfiles } from '../../lib/profileStore';

export default function ClientProfileView({
  client
}: {
  client: Client | undefined;
}) {
  const { getByClientId, upsert } = useProfiles();

  const [profile, setProfile] = React.useState<ClientProfile | undefined>(
    () => (client ? getByClientId(client.id) : undefined)
  );

  React.useEffect(() => {
    if (client) {
      const existing = getByClientId(client.id);
      if (existing) {
        setProfile(existing);
      } else {
        // Create a blank profile if none exists yet
        const blank: ClientProfile = {
          clientId: client.id,
          location: { city: '', state: '', country: '', timezone: '' },
          affiliations: [],
          importantDates: [],
          recurringEvents: [],
          milestones: [],
          interests: [],
          communication: { channels: [], cadence: 'quarterly' },
          household: [],
          advisorNotes: ''
        };
        setProfile(blank);
        upsert(blank);
      }
    } else {
      setProfile(undefined);
    }
  }, [client, getByClientId, upsert]);

  if (!client) {
    return <div className="rounded-2xl border bg-white p-6 text-center text-sm text-gray-600">Select a client to view profile.</div>;
  }

  if (!profile) {
    return null; // Loading or initializing
  }

  function commit(next: ClientProfile) {
    setProfile(next);
    upsert(next);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Section title="Location">
        <LocationEditor value={profile.location} onChange={loc => commit({ ...profile, location: loc })} />
      </Section>

      <Section title="Communication Preferences" subtitle="How and when the client prefers to connect">
        <CommunicationEditor value={profile.communication} onChange={c => commit({ ...profile, communication: c })} />
      </Section>

      <Section title="Affiliations" subtitle="Orgs, nonprofits, boards">
        <AffiliationEditor value={profile.affiliations} onChange={v => commit({ ...profile, affiliations: v })} />
      </Section>

      <Section title="Important Dates" subtitle="Birthdays, anniversaries, tax reminders">
        <ImportantDatesEditor value={profile.importantDates} onChange={v => commit({ ...profile, importantDates: v })} />
      </Section>

      <Section title="Recurring Events" subtitle="Annual trips, seasonal traditions">
        <RecurringEditor value={profile.recurringEvents} onChange={v => commit({ ...profile, recurringEvents: v })} />
      </Section>

      <Section title="Upcoming Milestones">
        <MilestoneEditor value={profile.milestones} onChange={v => commit({ ...profile, milestones: v })} />
      </Section>

      <Section title="Interests & Gifts" subtitle="Sports teams, wine, hobbies, gift ideas">
        <InterestEditor value={profile.interests} onChange={v => commit({ ...profile, interests: v })} />
      </Section>

      <Section title="Household">
        <HouseholdEditor value={profile.household} onChange={v => commit({ ...profile, household: v })} />
      </Section>

      <Section title="Advisor Notes" subtitle="Freeform, private to advisor">
        <NotesEditor value={profile.advisorNotes ?? ''} onChange={v => commit({ ...profile, advisorNotes: v })} />
        <p className="mt-3 text-xs text-gray-500">Privacy disclaimer: Demo only. All data is fictitious and stored locally in your browser.</p>
      </Section>
    </div>
  );
}

/** ——— Editors ——— */

function Field({ label, children, help }: { label: string; children: React.ReactNode; help?: string }) {
  return (
    <label className="block text-sm">
      <span className="label-sm">{label}</span>
      <div className="mt-1">{children}</div>
      {help && <p className="mt-1 text-xs text-gray-500">{help}</p>}
    </label>
  );
}

function Toolbar({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>;
}

function GhostButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`btn-ghost ${props.className ?? ''}`} />;
}
function OutlineButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`btn-outline ${props.className ?? ''}`} />;
}
function PrimaryButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props} className={`btn-primary ${props.className ?? ''}`} />;
}

function ItemCard({
  title,
  onRemove,
  children
}: {
  title: string;
  onRemove?: () => void;
  children: React.ReactNode;
}) {
  return (
    <li className="subcard p-4 md:p-5">
      <div className="item-header">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        {onRemove && (
          <GhostButton onClick={onRemove} title="Remove">
            Remove
          </GhostButton>
        )}
      </div>
      <div className="mt-3">{children}</div>
    </li>
  );
}

function LocationEditor({ value, onChange }: { value: any; onChange: (v: any) => void }) {
  return (
    <div className="grid-12">
      <div className="col-span-12 md:col-span-6">
        <Field label="City">
          <input className="input" value={value.city} onChange={e => onChange({ ...value, city: e.target.value })} />
        </Field>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Field label="State / Region">
          <input className="input" value={value.state ?? ''} onChange={e => onChange({ ...value, state: e.target.value })} />
        </Field>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Field label="Country">
          <input className="input" value={value.country ?? ''} onChange={e => onChange({ ...value, country: e.target.value })} />
        </Field>
      </div>
      <div className="col-span-12 md:col-span-6">
        <Field label="Timezone (IANA)">
          <input className="input" placeholder="America/New_York" value={value.timezone ?? ''} onChange={e => onChange({ ...value, timezone: e.target.value })} />
        </Field>
      </div>
    </div>
  );
}

function CommunicationEditor({ value, onChange }: { value: any; onChange: (v: any) => void }) {
  const options = ['email','phone','text','in-person','video'] as const;
  const toggle = (opt: string) => {
    const set = new Set(value.channels);
    set.has(opt) ? set.delete(opt) : set.add(opt);
    onChange({ ...value, channels: [...set] });
  };
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <button key={o} onClick={() => toggle(o)} className={`chip ${value.channels?.includes(o) ? 'bg-gray-900 text-white border-gray-900' : ''}`}>
            {o}
          </button>
        ))}
      </div>
      <div className="grid-12">
        <div className="col-span-12 md:col-span-6">
          <Field label="Cadence">
            <select className="input" value={value.cadence ?? 'quarterly'} onChange={e => onChange({ ...value, cadence: e.target.value })}>
              {['weekly','monthly','quarterly','semiannual','annual','ad-hoc'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </Field>
        </div>
        <div className="col-span-12 md:col-span-6">
          <Field label="Best Hours / Notes">
            <textarea className="input" rows={3} value={value.bestHoursNote ?? ''} onChange={e => onChange({ ...value, bestHoursNote: e.target.value })} />
          </Field>
        </div>
      </div>
    </div>
  );
}

function AffiliationEditor({
  value,
  onChange
}: {
  value: Affiliation[];
  onChange: (v: Affiliation[]) => void;
}) {
  const add = () =>
    onChange([...(value ?? []), { id: crypto.randomUUID(), name: '', role: '', category: 'org' }]);
  const edit = (id: string, patch: Partial<Affiliation>) =>
    onChange(value.map(v => (v.id === id ? { ...v, ...patch } : v)));
  const remove = (id: string) => onChange(value.filter(v => v.id !== id));

  return (
    <>
      <div className="mb-3">
        <OutlineButton onClick={add}>+ Add</OutlineButton>
      </div>
      <ul className="space-y-3">
        {value.map((v, i) => (
          <ItemCard key={v.id} title={`Affiliation ${i + 1}`} onRemove={() => remove(v.id)}>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-5">
                <Field label="Name">
                  <input className="input" value={v.name} onChange={e => edit(v.id, { name: e.target.value })} />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-3">
                <Field label="Role">
                  <input className="input" value={v.role ?? ''} onChange={e => edit(v.id, { role: e.target.value })} />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-4">
                <Field label="Category">
                  <select
                    className="input"
                    value={v.category ?? 'org'}
                    onChange={e => edit(v.id, { category: e.target.value as any })}
                  >
                    <option value="org">Org / Board</option>
                    <option value="nonprofit">Nonprofit</option>
                    <option value="club">Club</option>
                    <option value="foundation">Foundation</option>
                  </select>
                </Field>
              </div>
            </div>
          </ItemCard>
        ))}
      </ul>
    </>
  );
}

function ImportantDatesEditor({
  value,
  onChange
}: {
  value: ImportantDate[];
  onChange: (v: ImportantDate[]) => void;
}) {
  const add = () => onChange([...(value ?? []), { id: crypto.randomUUID(), label: '', date: '' }]);
  const edit = (id: string, patch: Partial<ImportantDate>) =>
    onChange(value.map(v => (v.id === id ? { ...v, ...patch } : v)));
  const remove = (id: string) => onChange(value.filter(v => v.id !== id));

  return (
    <>
      <div className="mb-3">
        <OutlineButton onClick={add}>+ Add</OutlineButton>
      </div>
      <ul className="space-y-3">
        {value.map((v, i) => (
          <ItemCard key={v.id} title={`Important Date ${i + 1}`} onRemove={() => remove(v.id)}>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-5">
                <Field label="Label">
                  <input
                    className="input"
                    placeholder="Birthday"
                    value={v.label}
                    onChange={e => edit(v.id, { label: e.target.value })}
                  />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-4">
                <Field label="Date">
                  <input
                    type="date"
                    className="input"
                    value={v.date}
                    onChange={e => edit(v.id, { date: e.target.value })}
                  />
                </Field>
              </div>
              <div className="col-span-12">
                <Field label="Note">
                  <textarea
                    className="input"
                    rows={3}
                    value={v.note ?? ''}
                    onChange={e => edit(v.id, { note: e.target.value })}
                  />
                </Field>
              </div>
            </div>
          </ItemCard>
        ))}
      </ul>
    </>
  );
}

function RecurringEditor({ value, onChange }: { value: RecurringEvent[]; onChange: (v: RecurringEvent[]) => void }) {
  const add = () => onChange([...(value ?? []), { id: crypto.randomUUID(), title: '' } as RecurringEvent]);
  const edit = (id: string, patch: Partial<RecurringEvent>) => onChange(value.map(v => v.id === id ? { ...v, ...patch } : v));
  const remove = (id: string) => onChange(value.filter(v => v.id !== id));
  return (
    <>
      <div className="mb-3">
        <OutlineButton onClick={add}>+ Add</OutlineButton>
      </div>
      <ul className="space-y-3">
        {value.map((v, i) => (
          <ItemCard key={v.id} title={`Recurring Event ${i + 1}`} onRemove={() => remove(v.id)}>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-6">
                <Field label="Title">
                  <input className="input" placeholder="Annual Aspen ski trip" value={v.title} onChange={e => edit(v.id, { title: e.target.value })} />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-2">
                <Field label="Month">
                  <input className="input" type="number" min={1} max={12} value={v.month ?? ''} onChange={e => edit(v.id, { month: e.target.value ? Number(e.target.value) : undefined })} />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-4">
                <Field label="Season">
                  <select className="input" value={v.season ?? ''} onChange={e => edit(v.id, { season: e.target.value as any })}>
                    <option value=""></option><option>Winter</option><option>Spring</option><option>Summer</option><option>Fall</option>
                  </select>
                </Field>
              </div>
              <div className="col-span-12">
                <Field label="Note">
                  <textarea className="input" rows={2} value={v.note ?? ''} onChange={e => edit(v.id, { note: e.target.value })} />
                </Field>
              </div>
            </div>
          </ItemCard>
        ))}
      </ul>
    </>
  );
}

function MilestoneEditor({ value, onChange }: { value: Milestone[]; onChange: (v: Milestone[]) => void }) {
  const add = () => onChange([...(value ?? []), { id: crypto.randomUUID(), title: '' } as Milestone]);
  const edit = (id: string, patch: Partial<Milestone>) => onChange(value.map(v => v.id === id ? { ...v, ...patch } : v));
  const remove = (id: string) => onChange(value.filter(v => v.id !== id));
  return (
    <>
      <div className="mb-3">
        <OutlineButton onClick={add}>+ Add</OutlineButton>
      </div>
      <ul className="space-y-3">
        {value.map((v, i) => (
          <ItemCard key={v.id} title={`Milestone ${i + 1}`} onRemove={() => remove(v.id)}>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-6">
                <Field label="Title">
                  <input className="input" value={v.title} onChange={e => edit(v.id, { title: e.target.value })} />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-6">
                <Field label="Expected Date">
                  <input type="date" className="input" value={v.expectedDate ?? ''} onChange={e => edit(v.id, { expectedDate: e.target.value || undefined })} />
                </Field>
              </div>
              <div className="col-span-12">
                <Field label="Note">
                  <textarea className="input" rows={2} value={v.note ?? ''} onChange={e => edit(v.id, { note: e.target.value })} />
                </Field>
              </div>
            </div>
          </ItemCard>
        ))}
      </ul>
    </>
  );
}

function InterestEditor({ value, onChange }: { value: Interest[]; onChange: (v: Interest[]) => void }) {
  const add = () => onChange([...(value ?? []), { id: crypto.randomUUID(), type: 'sports-team', value: '' } as Interest]);
  const edit = (id: string, patch: Partial<Interest>) => onChange(value.map(v => v.id === id ? { ...v, ...patch } : v));
  const remove = (id: string) => onChange(value.filter(v => v.id !== id));
  return (
    <>
      <div className="mb-3">
        <OutlineButton onClick={add}>+ Add</OutlineButton>
      </div>
      <ul className="space-y-3">
        {value.map((v, i) => (
          <ItemCard key={v.id} title={`Interest ${i + 1}`} onRemove={() => remove(v.id)}>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-4">
                <Field label="Type">
                  <select className="input" value={v.type} onChange={e => edit(v.id, { type: e.target.value as Interest['type'] })}>
                    <option value="sports-team">Sports Team</option>
                    <option value="wine">Wine</option>
                    <option value="hobby">Hobby</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="gift">Gift</option>
                  </select>
                </Field>
              </div>
              <div className="col-span-12 md:col-span-8">
                <Field label="Value">
                  <input className="input" placeholder="NY Yankees, Barolo, Golf" value={v.value} onChange={e => edit(v.id, { value: e.target.value })} />
                </Field>
              </div>
              <div className="col-span-12">
                <Field label="Note">
                  <textarea className="input" rows={2} value={v.note ?? ''} onChange={e => edit(v.id, { note: e.target.value })} />
                </Field>
              </div>
            </div>
          </ItemCard>
        ))}
      </ul>
    </>
  );
}

function HouseholdEditor({ value, onChange }: { value: HouseholdMember[]; onChange: (v: HouseholdMember[]) => void }) {
  const add = () => onChange([...(value ?? []), { id: crypto.randomUUID(), name: '', relation: 'other' } as HouseholdMember]);
  const edit = (id: string, patch: Partial<HouseholdMember>) => onChange(value.map(v => v.id === id ? { ...v, ...patch } : v));
  const remove = (id: string) => onChange(value.filter(v => v.id !== id));
  return (
    <>
      <div className="mb-3">
        <OutlineButton onClick={add}>+ Add</OutlineButton>
      </div>
      <ul className="space-y-3">
        {value.map((v, i) => (
          <ItemCard key={v.id} title={`Household Member ${i + 1}`} onRemove={() => remove(v.id)}>
            <div className="grid-12">
              <div className="col-span-12 md:col-span-5">
                <Field label="Name">
                  <input className="input" value={v.name} onChange={e => edit(v.id, { name: e.target.value })} />
                </Field>
              </div>
              <div className="col-span-12 md:col-span-4">
                <Field label="Relation">
                  <select className="input" value={v.relation} onChange={e => edit(v.id, { relation: e.target.value as HouseholdMember['relation'] })}>
                    {['spouse','child','parent','grandchild','sibling','other'].map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
              </div>
              <div className="col-span-12">
                <Field label="Note">
                  <textarea className="input" rows={3} value={v.note ?? ''} onChange={e => edit(v.id, { note: e.target.value })} />
                </Field>
              </div>
            </div>
          </ItemCard>
        ))}
      </ul>
    </>
  );
}

function NotesEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (textareaRef.current) {
      // Auto-resize textarea to fit content
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(250, textareaRef.current.scrollHeight)}px`;
    }
  }, [value]);

  return (
    <div>
      <textarea
        ref={textareaRef}
        className="input min-h-[250px] leading-relaxed resize-y overflow-y-auto"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Enter advisor notes here..."
      />
      <div className="mt-3 text-right">
        <span className="text-sm text-gray-500">Auto-saved</span>
      </div>
    </div>
  );
}


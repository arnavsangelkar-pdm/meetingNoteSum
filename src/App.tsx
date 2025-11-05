import React from 'react';
import { clients } from './data/clients';
import { calls } from './data/calls';
import { headlines } from './data/headlines';
import { Client, CallNote, Headline } from './lib/types';
import { computeThemes } from './lib/computeThemes';
import { buildPrepNotes } from './lib/prepNotes';
import ClientSelector from './components/ClientSelector';
import Section from './components/Section';
import CallSummaryList from './components/CallSummaryList';
import ThemeChips from './components/ThemeChips';
import MarketBrief from './components/MarketBrief';
import PrepNotes from './components/PrepNotes';
import EmptyState from './components/EmptyState';

export default function App() {
  const [clientId, setClientId] = React.useState<string>(clients[0]?.id ?? '');

  const client = React.useMemo<Client | undefined>(
    () => clients.find(c => c.id === clientId),
    [clientId]
  );

  const clientCalls = React.useMemo<CallNote[]>(
    () =>
      calls
        .filter(c => c.clientId === clientId)
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 3),
    [clientId]
  );

  const themes = React.useMemo(
    () => computeThemes(clientCalls),
    [clientCalls]
  );

  const repeatedKeys = themes.filter(t => t.count >= 2).map(t => t.key);

  const relatedHeadlines: Headline[] = React.useMemo(() => {
    const tagged = headlines
      .filter(h => h.tags.some(t => repeatedKeys.includes(t)))
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3);
    if (tagged.length >= 3) return tagged;

    const padding = headlines
      .filter(h => !tagged.includes(h))
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, 3 - tagged.length);

    return [...tagged, ...padding];
  }, [repeatedKeys]);

  const prep = React.useMemo(
    () =>
      buildPrepNotes({
        clientName: client?.name ?? 'Client',
        lastCalls: clientCalls,
        repeatedThemeKeys: repeatedKeys
      }),
    [client, clientCalls, repeatedKeys]
  );

  return (
    <div className="mx-auto max-w-6xl p-4 md:p-8">
      <header className="mb-6 flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-semibold">
          AI Relationship Prep
        </h1>
        <p className="text-sm text-gray-600">
          No external APIs.
        </p>
      </header>

      <div className="mb-6">
        <ClientSelector
          clients={clients}
          value={clientId}
          onChange={setClientId}
        />
      </div>

      {!client || clientCalls.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="Last 3 Calls" subtitle={`${client.name} — latest touchpoints`}>
            <CallSummaryList calls={clientCalls} />
          </Section>

          <Section title="Key Patterns" subtitle="Repeated themes from recent calls">
            <ThemeChips themes={themes.filter(t => t.count >= 2)} />
          </Section>

          <Section title="Market Brief" subtitle="3 headlines aligned to client concerns">
            <MarketBrief headlines={relatedHeadlines} />
          </Section>

          <Section title="Prep Notes" subtitle={`Generated from call patterns`}>
            <PrepNotes text={prep} />
          </Section>
        </div>
      )}
    </div>
  );
}


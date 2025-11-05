export type Client = {
  id: string;
  name: string;
  segment: 'HNW' | 'UHNW' | 'MassAffluent';
  advisor: string;
};

export type CallNote = {
  id: string;
  clientId: string;
  date: string;        // ISO (e.g., "2025-08-14")
  summary: string;     // one-paragraph human note
  topics: string[];    // ['tariffs','foreign-equities','grandson-wedding']
  sentiment: 'calm' | 'concerned' | 'optimistic' | 'panicked';
};

export type Headline = {
  id: string;
  title: string;
  source: string;
  date: string;        // ISO
  tags: string[];      // match to topics
  url?: string;        // DO NOT render as a link—just plain text
};


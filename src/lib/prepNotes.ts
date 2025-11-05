import { THEME_LABELS } from '../data/themes';
import { CallNote } from './types';

export function buildPrepNotes(opts: {
  clientName: string;
  lastCalls: CallNote[];
  repeatedThemeKeys: string[];
}): string {
  const { clientName, lastCalls, repeatedThemeKeys } = opts;

  const personalHook = lastCalls.find(c =>
    c.topics.includes('family-events')
  )
    ? `Open with a personal note (e.g., family milestones) to reinforce rapport. `
    : '';

  const themesSentence =
    repeatedThemeKeys.length > 0
      ? `Key recurring concern${
          repeatedThemeKeys.length > 1 ? 's' : ''
        }: ${repeatedThemeKeys.map(k => THEME_LABELS[k] ?? k).join(', ')}. `
      : 'No strong recurring themes detected. ';

  const sentiment = lastCalls.some(c => c.sentiment === 'panicked')
    ? 'Tone: acknowledge recent anxieties before discussing allocation rationale. '
    : 'Tone: confident and educational. ';

  return `${personalHook}${themesSentence}${sentiment}Close by confirming next steps and inviting follow-ups on allocation alignment.`;
}


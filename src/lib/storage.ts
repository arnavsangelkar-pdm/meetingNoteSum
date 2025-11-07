import { ClientProfile } from './profileTypes';

const KEY = 'clientProfiles.v1';

export function loadProfiles(): ClientProfile[] | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as ClientProfile[]) : null;
  } catch {
    return null;
  }
}

export function saveProfiles(profiles: ClientProfile[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(profiles));
  } catch {
    // ignore
  }
}


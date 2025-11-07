import React from 'react';
import { ClientProfile } from './profileTypes';
import { profilesSeed } from '../data/profiles';
import { loadProfiles, saveProfiles } from './storage';

export function useProfiles() {
  const [profiles, setProfiles] = React.useState<ClientProfile[]>(
    () => loadProfiles() ?? profilesSeed
  );

  React.useEffect(() => { saveProfiles(profiles); }, [profiles]);

  function getByClientId(clientId: string): ClientProfile | undefined {
    return profiles.find(p => p.clientId === clientId);
  }

  function upsert(profile: ClientProfile) {
    setProfiles(prev => {
      const idx = prev.findIndex(p => p.clientId === profile.clientId);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = profile;
        return next;
      }
      return [...prev, profile];
    });
  }

  return { profiles, getByClientId, upsert };
}


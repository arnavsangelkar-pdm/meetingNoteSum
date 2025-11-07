import { ClientProfile } from '../lib/profileTypes';

export const profilesSeed: ClientProfile[] = [
  {
    clientId: 'client-1', // John Smith
    location: { city: 'San Francisco', state: 'CA', country: 'USA', timezone: 'America/Los_Angeles' },
    affiliations: [
      { id: 'a1', name: 'Bay Arts Museum', role: 'Trustee', category: 'org' },
      { id: 'a2', name: 'United Way', role: 'Donor', category: 'nonprofit' }
    ],
    importantDates: [
      { id: 'd1', label: 'Birthday', date: '2025-02-14', note: 'Loves handwritten cards' },
      { id: 'd2', label: 'Anniversary', date: '2025-06-05' }
    ],
    recurringEvents: [
      { id: 're1', title: 'Annual Napa trip', season: 'Fall', note: 'Prefers Cabernet tastings' }
    ],
    milestones: [
      { id: 'm1', title: 'Grandson wedding celebration', expectedDate: '2025-12-20' }
    ],
    interests: [
      { id: 'i1', type: 'sports-team', value: 'San Francisco Giants' },
      { id: 'i2', type: 'wine', value: 'Bordeaux (Left Bank)', note: 'Gift idea: 2016 vintage' },
      { id: 'i3', type: 'gift', value: 'Single-origin dark chocolate' }
    ],
    communication: {
      channels: ['email', 'in-person'],
      cadence: 'quarterly',
      bestHoursNote: '10am–2pm PT, Tue–Thu'
    },
    household: [
      { id: 'h1', name: 'Alicia Smith', relation: 'spouse' },
      { id: 'h2', name: 'Ethan Smith', relation: 'grandchild', note: 'Married 2025' }
    ],
    advisorNotes: 'Warm relationship; appreciates proactive market context without jargon.'
  },
  {
    clientId: 'client-2', // Ava Patel
    location: { city: 'New York', state: 'NY', country: 'USA', timezone: 'America/New_York' },
    affiliations: [
      { id: 'a3', name: 'Metropolitan Opera', role: 'Patron', category: 'org' },
      { id: 'a4', name: 'NYC Education Foundation', role: 'Board Member', category: 'nonprofit' }
    ],
    importantDates: [
      { id: 'd3', label: 'Birthday', date: '2025-08-22' },
      { id: 'd4', label: 'Anniversary', date: '2025-11-10', note: 'Prefers quiet dinner' }
    ],
    recurringEvents: [
      { id: 're2', title: 'Summer Hamptons retreat', season: 'Summer', month: 7 },
      { id: 're3', title: 'Holiday family gathering', month: 12, season: 'Winter' }
    ],
    milestones: [
      { id: 'm2', title: 'Son starting MBA program', expectedDate: '2025-09-01' }
    ],
    interests: [
      { id: 'i4', type: 'sports-team', value: 'New York Knicks' },
      { id: 'i5', type: 'wine', value: 'Burgundy', note: 'Prefers Pinot Noir' },
      { id: 'i6', type: 'restaurant', value: 'Le Bernardin', note: 'Favorite for business dinners' }
    ],
    communication: {
      channels: ['email', 'phone', 'text'],
      cadence: 'monthly',
      bestHoursNote: '9am–5pm ET, weekdays'
    },
    household: [
      { id: 'h3', name: 'Raj Patel', relation: 'spouse' },
      { id: 'h4', name: 'Arjun Patel', relation: 'child', note: 'Starting MBA Fall 2025' }
    ],
    advisorNotes: 'Very engaged with portfolio performance. Prefers detailed quarterly reviews.'
  },
  {
    clientId: 'client-3', // Luis Romero
    location: { city: 'Miami', state: 'FL', country: 'USA', timezone: 'America/New_York' },
    affiliations: [
      { id: 'a5', name: 'Miami Dolphins Foundation', role: 'Volunteer', category: 'nonprofit' }
    ],
    importantDates: [
      { id: 'd5', label: 'Birthday', date: '2025-05-15' }
    ],
    recurringEvents: [
      { id: 're4', title: 'Annual fishing trip', season: 'Spring', month: 4 }
    ],
    milestones: [],
    interests: [
      { id: 'i7', type: 'sports-team', value: 'Miami Dolphins' },
      { id: 'i8', type: 'hobby', value: 'Deep sea fishing' },
      { id: 'i9', type: 'gift', value: 'Fishing gear', note: 'High-quality tackle preferred' }
    ],
    communication: {
      channels: ['phone', 'text'],
      cadence: 'quarterly',
      bestHoursNote: 'Afternoons, flexible schedule'
    },
    household: [
      { id: 'h5', name: 'Maria Romero', relation: 'spouse' }
    ],
    advisorNotes: 'Relaxed communication style. Values simplicity and clear action items.'
  }
];


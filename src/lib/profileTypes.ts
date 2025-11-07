export type ImportantDate = {
  id: string;
  label: string;   // "Birthday", "Anniversary", "Tax deadline", etc.
  date: string;    // ISO "2025-12-25"
  note?: string;   // "Prefers low-key celebration"
};

export type Affiliation = {
  id: string;
  name: string;       // "United Way", "Art Museum Board"
  role?: string;      // "Donor", "Trustee", "Volunteer"
  category?: 'nonprofit' | 'org' | 'club' | 'foundation';
};

export type Interest = {
  id: string;
  type: 'sports-team' | 'wine' | 'hobby' | 'restaurant' | 'gift';
  value: string;      // "Golden State Warriors", "Bordeaux, left bank", "Pickleball"
  note?: string;
};

export type RecurringEvent = {
  id: string;
  title: string;      // "Annual Aspen ski trip"
  month?: number;     // 1-12, optional if only season provided
  season?: 'Winter' | 'Spring' | 'Summer' | 'Fall';
  note?: string;
};

export type Milestone = {
  id: string;
  title: string;      // "Daughter's college graduation"
  expectedDate?: string; // ISO if known
  note?: string;
};

export type Location = {
  city: string;
  state?: string;
  country?: string;
  timezone?: string;  // e.g., "America/New_York"
};

export type CommunicationPrefs = {
  channels: Array<'email' | 'phone' | 'text' | 'in-person' | 'video'>;
  cadence?: 'weekly' | 'monthly' | 'quarterly' | 'semiannual' | 'annual' | 'ad-hoc';
  bestHoursNote?: string;
};

export type HouseholdMember = {
  id: string;
  name: string;
  relation: 'spouse' | 'child' | 'parent' | 'grandchild' | 'sibling' | 'other';
  note?: string;
};

export type ClientProfile = {
  clientId: string;
  location: Location;
  affiliations: Affiliation[];
  importantDates: ImportantDate[];
  recurringEvents: RecurringEvent[];
  milestones: Milestone[];
  interests: Interest[];       // includes sports teams, wine, gifts
  communication: CommunicationPrefs;
  household: HouseholdMember[];
  advisorNotes?: string;       // free text scratchpad
};


import { CallNote } from '../lib/types';

export const calls: CallNote[] = [
  // Client 1 (John Smith) - 7 calls
  {
    id: 'call-1-1',
    clientId: 'client-1',
    date: '2025-08-14',
    summary: 'Client called to discuss grandson\'s wedding next month. Expressed excitement about the event and mentioned setting aside funds for family celebrations. Also casually mentioned interest in maintaining current portfolio allocation.',
    topics: ['family-events'],
    sentiment: 'optimistic'
  },
  {
    id: 'call-1-2',
    clientId: 'client-1',
    date: '2025-08-10',
    summary: 'Panicked call about recent tariff news and its impact on foreign equity holdings. Client is concerned about exposure to emerging markets and wants to understand potential downside risks.',
    topics: ['tariffs', 'foreign-equities', 'emerging-markets'],
    sentiment: 'panicked'
  },
  {
    id: 'call-1-3',
    clientId: 'client-1',
    date: '2025-08-05',
    summary: 'Discussion about foreign vs. domestic equity balance. Client asked about rebalancing strategies and whether current allocation aligns with long-term goals. Mentioned concerns about international volatility.',
    topics: ['foreign-equities', 'domestic-equities'],
    sentiment: 'concerned'
  },
  {
    id: 'call-1-4',
    clientId: 'client-1',
    date: '2025-07-28',
    summary: 'Quarterly review call. Client satisfied with performance but wants to explore opportunities in emerging markets. Discussed diversification benefits.',
    topics: ['emerging-markets', 'foreign-equities'],
    sentiment: 'calm'
  },
  {
    id: 'call-1-5',
    clientId: 'client-1',
    date: '2025-07-15',
    summary: 'Follow-up on trade policy concerns. Client read about new tariff discussions and wanted reassurance about portfolio positioning.',
    topics: ['tariffs'],
    sentiment: 'concerned'
  },
  {
    id: 'call-1-6',
    clientId: 'client-1',
    date: '2025-07-01',
    summary: 'Routine check-in. Client mentioned upcoming family events and asked about liquidity planning for personal expenses.',
    topics: ['family-events'],
    sentiment: 'calm'
  },
  {
    id: 'call-1-7',
    clientId: 'client-1',
    date: '2025-06-20',
    summary: 'Annual planning session. Reviewed asset allocation and discussed long-term strategy. Client expressed interest in international diversification.',
    topics: ['foreign-equities'],
    sentiment: 'optimistic'
  },
  // Client 2 (Ava Patel) - 5 calls
  {
    id: 'call-2-1',
    clientId: 'client-2',
    date: '2025-08-12',
    summary: 'Client inquired about recent market volatility and its impact on domestic equity holdings. Seeking guidance on staying the course vs. tactical adjustments.',
    topics: ['domestic-equities'],
    sentiment: 'concerned'
  },
  {
    id: 'call-2-2',
    clientId: 'client-2',
    date: '2025-08-01',
    summary: 'Discussion about tax-efficient strategies for international investments. Client interested in foreign exposure but wants to understand tax implications.',
    topics: ['foreign-equities'],
    sentiment: 'calm'
  },
  {
    id: 'call-2-3',
    clientId: 'client-2',
    date: '2025-07-20',
    summary: 'Quick check-in about portfolio rebalancing. Client satisfied with current allocation between domestic and international equities.',
    topics: ['domestic-equities', 'foreign-equities'],
    sentiment: 'optimistic'
  },
  {
    id: 'call-2-4',
    clientId: 'client-2',
    date: '2025-07-05',
    summary: 'Annual review completed. Client mentioned upcoming milestone birthday and wants to ensure portfolio aligns with retirement timeline.',
    topics: ['family-events'],
    sentiment: 'calm'
  },
  {
    id: 'call-2-5',
    clientId: 'client-2',
    date: '2025-06-15',
    summary: 'Initial consultation about portfolio construction. Client expressed interest in balanced approach between domestic and international markets.',
    topics: ['domestic-equities', 'foreign-equities'],
    sentiment: 'optimistic'
  },
  // Client 3 (Luis Romero) - 6 calls
  {
    id: 'call-3-1',
    clientId: 'client-3',
    date: '2025-08-08',
    summary: 'Client called with questions about emerging market opportunities. Interested in learning more about potential returns and risks.',
    topics: ['emerging-markets'],
    sentiment: 'calm'
  },
  {
    id: 'call-3-2',
    clientId: 'client-3',
    date: '2025-07-25',
    summary: 'Discussion about trade policy and its potential impact on investments. Client wants to understand how tariffs might affect portfolio.',
    topics: ['tariffs'],
    sentiment: 'concerned'
  },
  {
    id: 'call-3-3',
    clientId: 'client-3',
    date: '2025-07-10',
    summary: 'Portfolio review call. Client asked about increasing international exposure to diversify away from domestic holdings.',
    topics: ['foreign-equities', 'domestic-equities'],
    sentiment: 'optimistic'
  },
  {
    id: 'call-3-4',
    clientId: 'client-3',
    date: '2025-06-28',
    summary: 'Quick check-in about market outlook. Client satisfied with current performance and wants to stay the course.',
    topics: ['domestic-equities'],
    sentiment: 'calm'
  },
  {
    id: 'call-3-5',
    clientId: 'client-3',
    date: '2025-06-10',
    summary: 'Annual planning discussion. Client mentioned family wedding next year and wants to ensure adequate liquidity for celebrations.',
    topics: ['family-events'],
    sentiment: 'optimistic'
  },
  {
    id: 'call-3-6',
    clientId: 'client-3',
    date: '2025-05-30',
    summary: 'Initial onboarding call. Discussed investment objectives and risk tolerance. Client interested in global diversification.',
    topics: ['foreign-equities'],
    sentiment: 'calm'
  }
];


# AI Relationship Prep

A React app that provides an AI Relationship Prep Assistant for wealth advisors. All data is stored locally (no API calls, no authentication).

## Features

- **Client Selection**: Choose from clients to view their relationship prep data
- **Prep Tab**: View relationship prep information including:
  - **Last 3 Calls Summary**: View recent call summaries with sentiment indicators and topics
  - **Key Patterns**: Identify repeated themes across recent calls (frequency ≥ 2)
  - **Market Brief**: 3 headlines aligned to client concerns
  - **Prep Notes**: Auto-generated prep notes based on call patterns (deterministic, no LLM)
- **Profile Tab**: Rich client profile view with editable personal information (see Client Profile View section below)

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- No external dependencies (all data is local)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment (Render Static Site)

1. Connect your repository to Render
2. Configure as a Static Site:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Deploy

## Project Structure

```
ai-relationship-prep/
  ├── src/
  │   ├── components/     # React components
  │   ├── data/          # Client data (clients, calls, headlines)
  │   ├── lib/           # Utility functions and types
  │   └── styles/        # Tailwind CSS
  ├── index.html
  └── package.json
```

## Client Profile View

The Profile tab provides a comprehensive view of client personal information, including:

- **Location**: City, state, country, and timezone
- **Communication Preferences**: Preferred channels (email, phone, text, in-person, video), cadence, and best hours
- **Affiliations**: Organizations, nonprofits, boards, and clubs
- **Important Dates**: Birthdays, anniversaries, tax deadlines, and other significant dates
- **Recurring Events**: Annual trips, seasonal traditions
- **Upcoming Milestones**: Expected life events and celebrations
- **Interests & Gifts**: Sports teams, wine preferences, hobbies, restaurants, and gift ideas
- **Household**: Family members and their relationships
- **Advisor Notes**: Freeform notes for advisor use

All profile data is stored locally in your browser using `localStorage`. Edits are saved automatically and persist across page refreshes. The app includes seed data for all demo clients, which can be edited or extended.

**Privacy Disclaimer**: Demo only. All data is fictitious and stored locally in your browser (localStorage). No data is transmitted to external servers.

## Notes

- All data is stored locally
- No API calls, no authentication
- Single-page application (no routing)
- Client-only, deployable as static site
- Profile data persists in browser localStorage


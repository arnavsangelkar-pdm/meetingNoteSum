# AI Relationship Prep

A React app that provides an AI Relationship Prep Assistant for wealth advisors. All data is stored locally (no API calls, no authentication).

## Features

- **Client Selection**: Choose from clients to view their relationship prep data
- **Last 3 Calls Summary**: View recent call summaries with sentiment indicators and topics
- **Key Patterns**: Identify repeated themes across recent calls (frequency ≥ 2)
- **Market Brief**: 3 headlines aligned to client concerns
- **Prep Notes**: Auto-generated prep notes based on call patterns (deterministic, no LLM)

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

## Notes

- All data is stored locally
- No API calls, no authentication
- Single-page application (no routing)
- Client-only, deployable as static site


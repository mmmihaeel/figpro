# FigPro

Real-time collaborative whiteboard built with Next.js, TypeScript, Fabric.js, and Liveblocks.

Maintained by [Mykhailo Yarytskiy](https://github.com/mmmihaeel).

## Overview

FigPro is a portfolio-ready canvas application inspired by modern collaborative design tools. It combines a responsive editing surface with live presence, threaded comments, lightweight reactions, and object-level editing controls.

## Highlights

- Real-time multiplayer presence with live cursors and active user indicators
- Canvas editing with shapes, text, image uploads, free drawing, and selection tools
- Object customization for size, colors, typography, alignment, and layer order
- Threaded comments and pinned discussions directly on the canvas
- Undo and redo history backed by collaborative state
- Keyboard shortcuts for faster editing workflows
- PDF export for sharing finished work

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Fabric.js
- Liveblocks
- jsPDF

## Running Locally

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Environment Variables

Create `.env.local` based on `.env.example`, then set the required value:

```env
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
```

### Start the Development Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build
- `npm run start` runs the production build
- `npm run lint` runs ESLint

## Project Structure

- `app/` application entrypoints, layout, room wiring, and canvas bootstrapping
- `components/` UI, comments, live collaboration, sidebars, and settings controls
- `constants/` toolbar definitions, shortcuts, and UI option sets
- `hooks/` reusable React hooks
- `lib/` Fabric.js helpers, canvas logic, keyboard handling, and utilities
- `public/assets/` icons and static assets used by the interface
- `types/` shared TypeScript models for canvas objects and collaboration state

## Notes

- Environment files and local secrets are excluded from version control.
- This repository is intentionally documented for public presentation and portfolio review.
- The app expects a valid Liveblocks public key before collaborative features can connect.

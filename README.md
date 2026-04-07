# Nathanael Calma — AI Portfolio

Interactive AI-powered portfolio built with Next.js, Vercel AI SDK, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **AI**: Vercel AI SDK + Groq (`llama-3.3-70b-versatile`)
- **Styling**: Tailwind CSS v3 + CSS custom properties
- **Animations**: Framer Motion
- **Icons**: Phosphor Icons
- **Font**: Outfit + JetBrains Mono (via `next/font`)

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Groq API key (free at [console.groq.com](https://console.groq.com/keys)):

```env
GROQ_API_KEY=gsk_...
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Add `GROQ_API_KEY` in your Vercel project's environment variables.

## Deploy to Render

1. Connect your repo to Render as a **Web Service**
2. Build command: `npm install && npm run build`
3. Start command: `npm start`
4. Add `GROQ_API_KEY` env var in Render dashboard

## Customisation

| File | What to change |
|---|---|
| `lib/prompt.ts` | System prompt / all personal info |
| `components/ProjectCards.tsx` | Project titles, descriptions, metrics, images |
| `app/page.tsx` | Hero headline, stat bar numbers |
| `components/SuggestionChips.tsx` | Suggestion chip labels |
| `app/globals.css` | Color tokens (`:root` and `.light`) |

### Replace project screenshots

In `components/ProjectCards.tsx`, swap the `picsum.photos` URLs with your own screenshots:
```tsx
image: '/projects/project-1.png',  // put files in /public/projects/
```

### Switch AI model

In `app/api/chat/route.ts`, change the model string:
```ts
groq('llama-3.3-70b-versatile')   // default (fast, smart)
groq('llama-3.1-70b-versatile')   // alternative
groq('mixtral-8x7b-32768')        // 32k context
```

To use OpenAI instead, install `@ai-sdk/openai` and swap the provider.

## Features

- Streaming AI chat powered by Groq Llama
- Animated SVG avatar with idle / thinking / speaking states
- Inline project cards rendered when projects are asked about
- Rainbow/liquid gradient mouse trail
- Ripple effect on click
- Light / dark mode toggle
- Responsive (mobile-first)
- Suggestion chips for first-time visitors
- Markdown rendering in AI replies

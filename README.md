# Eva.One — Uncensored

AI Executive Intelligence. No gateway. No content filtering. No middleman.
Direct API calls to OpenAI/Claude. You control the behavior.

## Architecture

```
User → Next.js → OpenAI/Claude API (direct)
```

No Vercel AI Gateway. No proxy. No content policy layer.
The system prompt in `app/api/chat/route.ts` defines EvaOne's personality.
You own it. You change it. Nobody else touches it.

## Deploy to Vercel (2 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `trippy2283/evaone-uncensored`
3. Add ONE environment variable:
   - `OPENAI_API_KEY` = your OpenAI key (starts with `sk-`)
   - OR `ANTHROPIC_API_KEY` = your Anthropic key
4. Deploy

That's it. No database needed. No Redis. No blob storage.
Just one API key and you're live.

## Optional Config

| Variable | Default | What it does |
|----------|---------|-------------|
| `OPENAI_API_KEY` | — | OpenAI access (GPT-4o, etc) |
| `ANTHROPIC_API_KEY` | — | Claude access |
| `DEFAULT_MODEL` | `gpt-4o` | Which model to use |

## Local Dev

```bash
pnpm install
cp .env.example .env.local
# Add your API key to .env.local
pnpm dev
```

Open [localhost:3000](http://localhost:3000)

## Customizing EvaOne's Behavior

Edit the `SYSTEM_PROMPT` in `app/api/chat/route.ts`.
That's the only thing that defines how EvaOne thinks and responds.
No external service can override it.

## Stack

- Next.js 15 (App Router)
- Vercel AI SDK 4 (streaming)
- Tailwind CSS 4
- TypeScript
- Zero database dependencies

## License

Private. Mentally Creative Studios.

import { streamText } from 'ai'
import { createGroq } from '@ai-sdk/groq'
import { SYSTEM_PROMPT } from '@/lib/prompt'

export const runtime = 'edge'
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ error: 'GROQ_API_KEY is not configured. Add it to your .env.local file.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }

  const groq = createGroq({ apiKey: process.env.GROQ_API_KEY })

  const result = streamText({
    model: groq('llama-3.3-70b-versatile'),
    system: SYSTEM_PROMPT,
    messages,
    maxTokens: 1024,
    temperature: 0.8,
  })

  return result.toDataStreamResponse()
}

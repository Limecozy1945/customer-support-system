import { streamText } from 'ai'
import { openai } from '@ai-sdk/openai'

console.log('OPENAI KEY LOADED:', process.env.OPENAI_API_KEY?.slice(0, 10))

export const supportAgent = {
  async handle({ context, message }) {
    const result = await streamText({
      model: openai('gpt-4o-mini'),
      messages: [
        { role: 'system', content: 'You are a helpful customer support assistant.' },
        ...context,
        { role: 'user', content: message }
      ]
    })

    return {
      stream: result.textStream
    }
  }
}

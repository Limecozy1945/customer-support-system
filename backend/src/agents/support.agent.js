import { streamText } from 'ai'
import { groq } from '@ai-sdk/groq'

export const supportAgent = {
  async handle({ context, message }) {
    const result = await streamText({
      model: groq('llama-3.1-8b-instant'),
      messages: [
        { role: 'system', content: 'You are a helpful customer support assistant.' },
        ...context,
        { role: 'user', content: message }
      ]
    })

    return { stream: result.textStream }
  }
}

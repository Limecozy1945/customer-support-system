import { streamText } from 'ai'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export const supportAgent = {
  async handle({ context, message }) {
    const stream = await streamText({
      model: openai.chat.completions,
      messages: [
        {
          role: 'system',
          content: 'You are a helpful customer support assistant.'
        },
        ...context,
        {
          role: 'user',
          content: message
        }
      ]
    })

    return { stream }
  }
}

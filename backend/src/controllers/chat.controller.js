import { chatService } from '../services/chat.service.js'

export const sendMessage = async (c) => {
  const body = await c.req.json()

  const result = await chatService.processMessage(body)

  if (result.stream) {
    return new Response(result.stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked'
      }
    })
  }

  return c.json(result)
}

import { chatService } from '../services/chat.service.js'

export const sendMessage = async (c) => {
  const body = await c.req.json()

  const result = await chatService.processMessage({
    message: body.message,
    conversationId: body.conversationId || 'default',
    userId: body.userId || 'user1'
  })


  if (result.stream) {
    return result.stream.toDataStreamResponse()
  }

  return c.json(result)
}

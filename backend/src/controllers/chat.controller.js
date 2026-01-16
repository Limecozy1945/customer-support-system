import { chatService } from '../services/chat.service.js'

export const sendMessage = async (c) => {
  const body = await c.req.json()

  const result = await chatService.processMessage({
    message: body.message,
    conversationId: body.conversationId || 'default'
  })

  return c.json(result)
}

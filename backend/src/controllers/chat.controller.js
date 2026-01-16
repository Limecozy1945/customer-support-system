import { chatService } from '../services/chat.service.js'

export const sendMessage = async (c) => {
  const body = await c.req.json()

  console.log('CONTROLLER body:', body)

  const result = await chatService.processMessage({
    message: body.message,
    conversationId: body.conversationId || 'default',
    userId: body.userId || 'user1'
  })

  return c.json(result)
}

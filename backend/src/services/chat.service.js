import { routerAgent } from '../agents/router.agent.js'
import { conversationTool } from '../tools/conversation.tool.js'

export const chatService = {
  async processMessage({ message, conversationId, userId }) {
    const context = conversationTool.getContext(conversationId)
    conversationTool.saveMessage(conversationId, 'user', message)

    const response = await routerAgent.route({
      message,
      context,
      userId
    })

    if (response.stream) {
      return { conversationId, stream: response.stream }
    }

    conversationTool.saveMessage(conversationId, 'agent', response.reply)

    return {
      conversationId,
      reply: response.reply
    }
  }
}

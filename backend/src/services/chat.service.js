import { conversationTool } from '../tools/conversation.tool.js'
import { routerAgent } from '../agents/router.agent.js'

export const chatService = {
  async processMessage({ message, conversationId, userId }) {
    await conversationTool.saveMessage(conversationId, 'user', message)

    const context = await conversationTool.getContext(conversationId)

    const response = await routerAgent.route({
      message,
      context,
      userId
    })

    if (response.stream) {
      return { conversationId, stream: response.stream }
    }

    await conversationTool.saveMessage(conversationId, 'agent', response.reply)

    return {
      conversationId,
      reply: response.reply
    }
  }
}

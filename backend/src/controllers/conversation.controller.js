import { conversationTool } from '../tools/conversation.tool.js'

export const getAllConversations = async (c) => {
  return c.json(conversationTool.getAllConversations())
}

export const getConversationById = async (c) => {
  const id = c.req.param('id')
  const conversation = conversationTool.getConversation(id)

  if (!conversation) {
    return c.json({ error: 'Conversation not found' }, 404)
  }

  return c.json(conversation)
}

export const deleteConversation = async (c) => {
  const id = c.req.param('id')
  conversationTool.deleteConversation(id)
  return c.json({ message: 'Conversation deleted' })
}

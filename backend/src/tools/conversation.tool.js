import { prisma } from '../db/prisma.js'

export const conversationTool = {
  async getContext(conversationId) {
    const messages = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { createdAt: 'asc' }
    })

    return messages.map(m => ({
      role: m.role,
      content: m.content
    }))
  },

  async saveMessage(conversationId, role, content) {
    await prisma.conversation.upsert({
      where: { id: conversationId },
      update: {},
      create: { id: conversationId }
    })

    await prisma.message.create({
      data: {
        conversationId,
        role,
        content
      }
    })
  },

  async getConversation(conversationId) {
    return prisma.conversation.findUnique({
      where: { id: conversationId },
      include: { messages: true }
    })
  },

  async getAllConversations() {
    return prisma.conversation.findMany({
      include: { messages: true }
    })
  },

  async deleteConversation(conversationId) {
    await prisma.message.deleteMany({
      where: { conversationId }
    })

    await prisma.conversation.delete({
      where: { id: conversationId }
    })
  }
}

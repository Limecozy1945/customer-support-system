const conversations = {}

export const conversationTool = {
  getContext(conversationId) {
    return conversations[conversationId]?.messages || []
  },

  saveMessage(conversationId, role, content) {
    if (!conversations[conversationId]) {
      conversations[conversationId] = {
        id: conversationId,
        messages: []
      }
    }

    conversations[conversationId].messages.push({
      role,
      content,
      timestamp: new Date().toISOString()
    })
  },

  getConversation(conversationId) {
    return conversations[conversationId] || null
  },

  getAllConversations() {
    return Object.values(conversations)
  },

  deleteConversation(conversationId) {
    delete conversations[conversationId]
  }
}

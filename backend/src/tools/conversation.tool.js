const conversations = {}

export const conversationTool = {
  getContext(conversationId) {
    return conversations[conversationId] || []
  },

  saveMessage(conversationId, role, content) {
    if (!conversations[conversationId]) {
      conversations[conversationId] = []
    }
    conversations[conversationId].push({ role, content })
  }
}

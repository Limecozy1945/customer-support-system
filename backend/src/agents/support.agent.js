export const supportAgent = {
  async handle({ message, context }) {
    return {
      reply: 'I can help with general support. Please explain your issue.'
    }
  }
}

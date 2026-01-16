import { supportAgent } from './support.agent.js'
import { orderAgent } from './order.agent.js'
import { billingAgent } from './billing.agent.js'

export const routerAgent = {
  async route({ message, context }) {
    const text = message.toLowerCase()

    if (text.includes('order')) {
      return orderAgent.handle({ message, context })
    }

    if (text.includes('payment') || text.includes('refund')) {
      return billingAgent.handle({ message, context })
    }

    return supportAgent.handle({ message, context })
  }
}


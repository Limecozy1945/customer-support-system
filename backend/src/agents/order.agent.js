import { orderTool } from '../tools/order.tool.js'

export const orderAgent = {
  async handle({ userId }) {
    console.log('ORDER AGENT userId:', userId)

    const order = orderTool.getLatestOrderByUser(userId)

    if (!order) {
      return {
        reply: 'No orders found for your account.'
      }
    }

    return {
      reply: `Your order ${order.id} is ${order.status}. Delivery: ${order.delivery}.`
    }
  }
}

import { billingTool } from '../tools/billing.tool.js'

export const billingAgent = {
  async handle() {
    const invoice = billingTool.getLatestInvoice()

    return {
      reply: `Invoice ${invoice.id} is ${invoice.status}. Amount paid: ₹${invoice.amount}.`
    }
  }
}

export const agentRegistry = [
  {
    type: 'support',
    description: 'Handles general support queries, FAQs, and troubleshooting',
    capabilities: [
      'Answer FAQs',
      'General troubleshooting',
      'Use conversation history for context'
    ]
  },
  {
    type: 'order',
    description: 'Handles order-related queries',
    capabilities: [
      'Check order status',
      'Track delivery',
      'Handle cancellations and modifications'
    ]
  },
  {
    type: 'billing',
    description: 'Handles billing and payment issues',
    capabilities: [
      'Invoice lookup',
      'Refund status',
      'Payment issue resolution'
    ]
  }
]

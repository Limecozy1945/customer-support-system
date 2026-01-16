const invoices = [
  {
    id: 'INV9001',
    userId: 'user1',
    amount: 499,
    status: 'Paid',
    method: 'UPI',
    date: '2025-01-10'
  },
  {
    id: 'INV9002',
    userId: 'user1',
    amount: 299,
    status: 'Refunded',
    method: 'Credit Card',
    date: '2025-01-05'
  },
  {
    id: 'INV9003',
    userId: 'user2',
    amount: 999,
    status: 'Pending',
    method: 'Debit Card',
    date: '2025-01-12'
  }
]

export const billingTool = {
  getLatestInvoiceByUser(userId) {
    return invoices.find(invoice => invoice.userId === userId)
  },

  getInvoiceById(invoiceId) {
    return invoices.find(invoice => invoice.id === invoiceId)
  }
}

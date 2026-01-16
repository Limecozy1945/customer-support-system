const orders = [
  {
    id: 'ORD1001',
    userId: 'user1',
    status: 'Shipped',
    delivery: 'Tomorrow',
    items: [
      { name: 'Wireless Mouse', qty: 1 },
      { name: 'USB-C Cable', qty: 2 }
    ]
  },
  {
    id: 'ORD1002',
    userId: 'user1',
    status: 'Out for delivery',
    delivery: 'Today',
    items: [
      { name: 'Laptop Stand', qty: 1 }
    ]
  },
  {
    id: 'ORD1003',
    userId: 'user2',
    status: 'Cancelled',
    delivery: 'N/A',
    items: [
      { name: 'Bluetooth Headphones', qty: 1 }
    ]
  }
]

export const orderTool = {
  getLatestOrderByUser(userId) {
    return orders.find(order => order.userId === userId)
  },

  getOrderById(orderId) {
    return orders.find(order => order.id === orderId)
  }
}

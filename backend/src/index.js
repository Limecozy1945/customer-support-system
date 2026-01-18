import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import chatRoutes from './routes/chat.js'
import agentRoutes from './routes/agents.js'
import { errorMiddleware } from './middleware/error.js'

const app = new Hono()

// Routes FIRST
app.route('/api/chat', chatRoutes)
app.route('/api/agents', agentRoutes)

app.get('/api/health', (c) => c.json({ status: 'ok' }))

// Error middleware LAST
app.onError((err, c) => {
  console.error('🔥 UNCAUGHT ERROR:', err)
  return c.json(
    {
      error: 'Internal Server Error',
      message: err.message
    },
    500
  )
})

serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Backend running on http://localhost:3000')

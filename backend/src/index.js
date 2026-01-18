import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'

import chatRoutes from './routes/chat.js'
import agentRoutes from './routes/agents.js'
import { errorMiddleware } from './middleware/error.js'

const app = new Hono()

app.use('*', cors({
  origin: 'http://localhost:5173'
}))

app.use('*', errorMiddleware)

app.route('/api/chat', chatRoutes)
app.route('/api/agents', agentRoutes)

app.get('/api/health', (c) => c.json({ status: 'ok' }))

serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Backend running on http://localhost:3000')

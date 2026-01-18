import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import chatRoutes from './routes/chat.js'
import {
  listAgents,
  getAgentCapabilities
} from './controllers/agent.controller.js'
import { errorMiddleware } from './middleware/error.js'

const app = new Hono()

// ROUTES FIRST
app.route('/api/chat', chatRoutes)

app.get('/api/agents', listAgents)
app.get('/api/agents/:type/capabilities', getAgentCapabilities)

app.get('/api/health', (c) => c.json({ status: 'ok' }))

// ERROR MIDDLEWARE LAST
app.use('*', errorMiddleware)

serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Backend running on http://localhost:3000')


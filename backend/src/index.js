import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import chatRoutes from './routes/chat.js'
import { errorMiddleware } from './middleware/error.js'

const app = new Hono()

app.use('*', errorMiddleware)
app.route('/api/chat', chatRoutes)

app.get('/api/health', (c) => c.json({ status: 'ok' }))

serve({
  fetch: app.fetch,
  port: 3000
})

console.log('Backend running on http://localhost:3000')


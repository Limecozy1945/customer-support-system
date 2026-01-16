import { Hono } from 'hono'
import { sendMessage } from '../controllers/chat.controller.js'

const router = new Hono()

router.post('/messages', sendMessage)

export default router

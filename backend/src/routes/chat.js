import { Hono } from 'hono'
import { sendMessage } from '../controllers/chat.controller.js'
import {
  getAllConversations,
  getConversationById,
  deleteConversation
} from '../controllers/conversation.controller.js'

const router = new Hono()

router.post('/messages', sendMessage)

router.get('/conversations', getAllConversations)
router.get('/conversations/:id', getConversationById)
router.delete('/conversations/:id', deleteConversation)

export default router

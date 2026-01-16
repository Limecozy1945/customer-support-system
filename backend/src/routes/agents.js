import { Hono } from 'hono'
import {
  listAgents,
  getAgentCapabilities
} from '../controllers/agent.controller.js'

const router = new Hono()

router.get('/', listAgents)
router.get('/:type/capabilities', getAgentCapabilities)

export default router

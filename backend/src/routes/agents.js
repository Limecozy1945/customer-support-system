import { Hono } from 'hono'
import {
  listAgents,
  getAgentCapabilities
} from '../controllers/agent.controller.js'

const router = new Hono()

// support BOTH /api/agents and /api/agents/
router.get('', listAgents)
router.get('/', listAgents)

router.get('/:type/capabilities', getAgentCapabilities)

export default router

import { agentRegistry } from '../agents/agent.registry.js'

export const listAgents = async (c) => {
  return c.json(
    agentRegistry.map(agent => ({
      type: agent.type,
      description: agent.description
    }))
  )
}

export const getAgentCapabilities = async (c) => {
  const type = c.req.param('type')
  const agent = agentRegistry.find(a => a.type === type)

  if (!agent) {
    return c.json({ error: 'Agent not found' }, 404)
  }

  return c.json({
    type: agent.type,
    capabilities: agent.capabilities
  })
}

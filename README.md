AI-Powered Customer Support System

Overview
This project is an AI-powered customer support backend system designed using a multi-agent architecture. It demonstrates clean backend design, agent-based routing, and AI-assisted responses with streaming support. The system was developed as part of an Applied AI / Backend Engineering assessment and focuses on correctness, extensibility, and production-oriented practices.
The application supports multiple types of customer queries, including general support, order-related questions, and billing inquiries. Requests are analyzed and routed to specialized agents responsible for handling each domain.

Key Features
Multi-agent system with a central Router Agent
Domain-specific agents for support, orders, and billing
Controller–Service architecture with clean separation of concerns
Conversation context and history management
Streaming-capable AI responses using Vercel AI SDK (v6)
Secure API key handling using environment variables
RESTful API design
Centralized error handling middleware

Architecture
The system follows a layered architecture:
Client
  ↓
API Controller
  ↓
Chat Service
  ↓
Router Agent
  ├── Support Agent (AI streaming)
  ├── Order Agent (order tools)
  └── Billing Agent (billing tools)

The Router Agent is responsible for intent classification and delegation. Each domain agent handles only its own responsibility and may use either deterministic tools or AI-based responses.

API Endpoints
Chat APIs
POST /api/chat/messages
Send a new chat message

GET /api/chat/conversations
List all conversations

GET /api/chat/conversations/:id
Retrieve a specific conversation

DELETE /api/chat/conversations/:id
Delete a conversation

Agent APIs
GET /api/agents
List available agents

GET /api/agents/:type/capabilities
Retrieve capabilities of a specific agent

Health Check
GET /api/health

Environment Configuration
Create a .env file inside the backend directory:
OPENAI_API_KEY=your_openai_api_key_here
The .env file is excluded from version control via .gitignore.

# Customer Support Multi-Agent System

## Overview

A full-stack multi-agent customer support system built using Hono, Prisma, PostgreSQL, and AI-powered agents.

The system routes customer queries to specialized agents for support, orders, and billing while maintaining conversation context.

The project focuses on backend architecture and multi-agent routing, with a minimal frontend provided for demonstration.

---

## Tech Stack

### Backend

* Node.js
* Hono (Controller–Service pattern)
* PostgreSQL (port 5432)
* Prisma ORM
* Vercel AI SDK (provider-agnostic)

### Frontend

* Vite
* Vanilla JavaScript
* HTML / CSS

---

## Architecture

### Multi-Agent System

* **Router Agent**
* Entry point for all user queries
* Classifies intent using keywords and context
* Delegates requests to sub-agents
* Falls back to Support Agent if intent is unclear


* **Support Agent**
* Handles general support queries and FAQs


* **Order Agent**
* Handles order status and tracking queries
* Uses database tools to fetch order data


* **Billing Agent**
* Handles billing, invoice, and refund queries
* Uses database tools to fetch billing data



### Backend Design

* Clean separation of controllers, services, agents, and data access
* Global error handling via middleware
* CORS enabled for frontend-backend communication
* Persistent conversation and message storage using Prisma

---

## API Routes

### Chat

* `POST /api/chat/messages` – Send a new message
* `GET /api/chat/conversations` – List conversations
* `GET /api/chat/conversations/:id` – Get conversation history
* `DELETE /api/chat/conversations/:id` – Delete a conversation

### Agents

* `GET /api/agents` – List available agents
* `GET /api/agents/:type/capabilities` – Get agent capabilities

### Health

* `GET /api/health` – Health check endpoint

---

## Setup Instructions

### Prerequisites

* Node.js (v18 or later)
* PostgreSQL running on port `5432`
* Git

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Limecozy1945/customer-support-system.git
cd customer-support-system

```

### Step 2: Backend Setup

```bash
cd backend
npm install
npx prisma migrate dev
npm run dev

```

### Step 3: Frontend Setup

```bash
cd frontend
npm install
npm run dev

```


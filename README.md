# Customer Support Multi-Agent System

## Overview
A multi-agent customer support system built using Hono, Prisma, PostgreSQL, and AI-powered agents.

## Tech Stack
- Backend: Hono, Node.js
- Database: PostgreSQL, Prisma
- Frontend: Vite, JavaScript
- AI: Vercel AI SDK

## Architecture
- Router Agent for intent classification
- Support Agent for general queries
- Order Agent for order-related queries
- Billing Agent for billing-related queries

## Setup Instructions

### Backend
```bash
cd backend
npm install
npx prisma migrate dev
npm run dev


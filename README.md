# AssignmentTracker LMS Prototype

This repository contains a lightweight prototype implementation of the AI-powered LMS described in [LMS_Blueprint.md](LMS_Blueprint.md).

## Structure

- `backend/` – Express + TypeScript API server with course and plugin endpoints
- `frontend/` – Vite + React frontend that fetches courses from the backend

## Running locally

```bash
# Start the backend
cd backend
npm install
npm start

# In a separate terminal, start the frontend
cd ../frontend
npm install
npm run dev
```

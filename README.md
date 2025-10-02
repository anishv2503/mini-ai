# Mini-AI Chat Application

This is a full stack React + Node.js chat application that connects to the ChatGPT API.

## Project Overview

As part of the technical assessment, this project demonstrates:

- Calling the ChatGPT API from a Node.js backend.
- Fetching chat data in the React frontend.
- Displaying conversations in a chat-like interface.
- Allowing users to enter prompts and receive AI-generated responses.

## Features

- Modular backend API with clean separation of routes, controllers, and services.
- Proper API design with error handling for failure cases.
- Responsive frontend chat interface built with React.
- Environment variable management via a `.env` file for API keys.

## Tech Stack

- Backend: Node.js, Express, Axios, dotenv
- Frontend: React, Chat UI Kit for chat interface styling
- API: OpenAI ChatGPT API

## Setup Instructions

### 1. Clone the repo

git clone https://github.com/anishv2503/mini-ai.git
cd mini-ai

text

### 2. Setup Backend

cd backend
npm install

text

Create a `.env` file in the `backend` folder with your OpenAI API key:

OPENROUTER_API_KEY=your_openai_api_key_here

text

Start the backend server:

npm start

text

The backend runs on `http://localhost:5000`.

### 3. Setup Frontend

In a new terminal window:

cd frontend
npm install
npm start

text

The frontend runs on `http://localhost:3000`.

### 4. Usage

- Open your browser to `http://localhost:3000`.
- Enter your prompt in the chatbox.
- Receive ChatGPT-driven responses in real time.

## Code Quality & API Design

- Backend code is divided into modular folders: `routes`, `controllers`, and `services`.
- Errors are handled gracefully with clear response messages.
- Frontend uses React state hooks for dynamic UI updates.

---

Replace `your_openai_api_key_here` in the `.env` file with your actual API key before running the backend server.

---

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
- Environment variable management with `.env` for API keys.

## Tech Stack

- Backend: Node.js, Express, Axios, dotenv
- Frontend: React, Chat UI Kit for chat interface styling
- API: OpenAI ChatGPT API

## Setup Instructions

### 1. Clone the repo

### 2. Setup Backend

Create a `.env` file in the `backend` folder with your OPENROUTER_API_KEY

Start the backend server:
The backend runs on `http://localhost:5000`.

### 3. Setup Frontend

In a new terminal window:
The frontend runs on `http://localhost:3000`.

### 4. Usage

- Open your browser to `http://localhost:3000`.
- Enter your prompt in the chatbox.
- Receive ChatGPT-driven AI responses in real time.

## Code Quality & API Design

- Backend code is divided into modular folders: `routes`, `controllers`, and `services`.
- Errors are handled gracefully with clear response messages.
- Frontend uses React state hooks for dynamic chat UI updates.

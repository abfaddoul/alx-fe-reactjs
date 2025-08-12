# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# GitHub User Search Application

This project is a React-based application built with Vite that allows users to search for GitHub profiles using the GitHub API.

## Features

- Search for GitHub users
- View basic user info
- Link to their GitHub profile

## Project Structure

- `components/`: Reusable React components
- `services/`: API handling code
- `App.jsx`: Root component with initial layout

## Setup Instructions

1. Install dependencies:

    ==> "npm install"


2. Add your GitHub API key to `.env` file (optional for now):

    ==> "VITE_APP_GITHUB_API_KEY=your_api_key_here"


3. Run the development server:

    ==> "npm run dev"


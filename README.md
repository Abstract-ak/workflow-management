# Workflow Management System

![Home Screenshot](public/Highbridge-sc.png)

## Overview

The Workflow Management System is a web-based application designed to streamline and automate workflows. It provides users with tools to create, manage, and execute workflows efficiently. The system is built using modern web technologies and offers a user-friendly interface for seamless interaction.

## Features

- **Workflow Builder**: Create and customize workflows with ease.
- **Node Configuration**: Configure nodes such as API calls, text boxes, and email notifications.
- **Execution History**: Track and review the history of executed workflows.
- **Save and Load Workflows**: Save workflows for future use and load them as needed.
- **Zoom Controls**: Adjust the zoom level for better visibility of workflows.

## Technologies Used

- **Frontend**: React, TypeScript, CSS Modules
- **Backend**: Firebase (for authentication and data storage)
- **Build Tool**: Vite

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:3000`.

## Folder Structure

- **public/**: Contains static assets such as images and icons.
- **src/**: Contains the source code for the application.
  - **pages/**: Includes different pages like login, process, and workflow.
  - **components/**: Reusable UI components.
  - **auth/**: Firebase authentication setup.

## Screenshot

![Home Screenshot](public/startProcess.png)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

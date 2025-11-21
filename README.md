# Task-manager

This project is built with a variety of modern web development technologies, focusing on React and TypeScript.

## 🌐 Live Demo

Visit the live demo of the Task Manager:

[![Netlify Logo](https://www.netlify.com/img/global/badges/netlify-color-bg.svg)](https://task-manager-monorepo.netlify.app/)

## 📚 Libraries

- **UI**: Material-UI
- **State Management**: Redux Toolkit
- **Build Tool**: Vite JS
- **Language**: TypeScript
- **Testing**: React Testing Library and Jest

## 📦 Installation

To compile and run this project, follow these steps:

1. **Installing Dependencies in React Kit**:

   ```bash
   cd path/packages
   pnpm install
   ```

2. **Running Storybook for Component Documentation**:

   ```bash
   cd packages/react-kit
   pnpm run storybook
   ```

3. **Construction of the Bookstore**:

   ```bash
   cd path/packages/react-kit
   pnpm run build
   ```

4. **Running the Application in Task Manager**:
   ```bash
   cd path/apps/task-manager
   pnpm run dev
   ```

## Running Tests in the Project

**Testing React Kit Package**

```bash
# Navigate to the React Kit package directory
cd packages/react-kit

# Run tests with coverage using pnpm
pnpm run test:coverage
```
**Testing Task Manager App**

```bash
# Navigate to the Task Manager app directory
cd apps/task-manager

# Run tests with coverage using pnpm
pnpm run test:coverage
```

# Starter React App with TypeScript and Firebase Authentication

This is a starter React app built with TypeScript and Firebase Authentication. It provides a basic structure for building a web application with user authentication.

## Features

- User authentication using Firebase Authentication
- Login and Sign Up components
- PrivateRoute component for protecting routes
- Custom useAuth hook for accessing authentication state and functions
- Global and component-specific CSS styles

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Create a Firebase project and enable Email/Password authentication
4. Replace the `firebaseConfig` object in `src/firebase/firebaseConfig.ts` with your own Firebase configuration
5. Run `npm start` to start the development server

## Usage

- Use the `Login.tsx` and `SignUp.tsx` components for user authentication
- Protect routes using the `PrivateRoute.tsx` component
- Access authentication state and functions using the `useAuth.ts` hook and `AuthContext.tsx` context

## File Structure

- `src/index.tsx`: Entry point of the application
- `src/App.tsx`: Main application component
- `src/components/Login.tsx`: Login component
- `src/components/SignUp.tsx`: Sign Up component
- `src/components/PrivateRoute.tsx`: Higher-order component for protecting routes
- `src/firebase/firebaseConfig.ts`: Firebase configuration file
- `src/firebase/firebaseAuth.ts`: Firebase authentication instance
- `src/types/User.ts`: TypeScript interface for user data
- `src/hooks/useAuth.ts`: Custom hook for accessing authentication state and functions
- `src/context/AuthContext.tsx`: React context for authentication state
- `src/styles/global.css`: Global CSS styles
- `src/styles/login.css`: Login component CSS styles
- `src/styles/signup.css`: Sign Up component CSS styles
- `public/index.html`: HTML template
- `public/favicon.ico`: Favicon
- `public/manifest.json`: Web app manifest
- `package.json`: Package configuration and dependencies
- `tsconfig.json`: TypeScript configuration
- `.gitignore`: Git ignore file
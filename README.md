# Expo useAsyncStorage Error in Unmounted Component

This repository demonstrates a common error when using Expo's `useAsyncStorage` hook within a component that is unmounted. The error occurs because the hook attempts to interact with AsyncStorage after the component has been removed from the UI, leading to unexpected behavior or crashes.

## Bug Description

The `useAsyncStorage` hook throws an error when used in an unmounted component because its state and lifecycle methods are no longer accessible. This results in unexpected behavior and potential crashes within the application.

## Solution

The solution involves using the `useEffect` hook with a cleanup function to ensure that any asynchronous operations initiated by `useAsyncStorage` are canceled when the component unmounts. This prevents any further attempts to interact with AsyncStorage after the component has been unmounted, resolving the error.

## Reproduction

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` or `yarn install` to install dependencies.
4. Run `expo start` to start the development server.
5. Observe the error and the solution in action.
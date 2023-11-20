# Redux and its concepts

## Redux

Redux is a state management library commonly used with React applications, although it can be integrated with other JavaScript frameworks as well. It helps manage the state of an application in a predictable way, making it easier to develop and maintain large-scale applications.

## Important Concepts

1. Store: A single, centralized state container that holds the entire state tree of the application. The state is read-only, and the only way to modify it is by dispatching actions.

2. Action: Plain JavaScript objects that represent events or user interactions. Actions are dispatched to the store to trigger state changes.

3. Reducer: Pure functions that specify how the state changes in response to an action. Reducers take the current state and an action as arguments, and they return a new state based on these inputs.

4. Dispatch: The process of sending an action to the store. It is the only way to trigger a state change.

5. Subscribe: A function that allows components to listen for changes in the state. When the state in the store changes, subscribers are notified, and they can update their views accordingly.

## Installation

# Install Redux Toolkit and React-Redux

Add the Redux Toolkit and React-Redux packages to your project:

### `npm install @reduxjs/toolkit react-redux`

## Create a Redux Store

Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

- # TypeScript

  app/store.js

        ### `import { configureStore } from '@reduxjs/toolkit'

            export const store = configureStore({
            reducer: {},
            })

            // Infer the `RootState` and `AppDispatch` types from the store itself
            export type RootState = ReturnType<typeof store.getState>
            // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
            export type AppDispatch = typeof store.dispatch`

- # JavaScript

  app/store.js

        ### `import { configureStore } from '@reduxjs/toolkit'

        export const store = configureStore({
          reducer: {},
        })`

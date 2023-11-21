# Redux and its concepts

## Redux

Redux is a state management library commonly used with React applications, although it can be integrated with other JavaScript frameworks as well. It helps manage the state of an application in a predictable way, making it easier to develop and maintain large-scale applications.

## Important Concepts

1. Store: A single, centralized state container that holds the entire state tree of the application. The state is read-only, and the only way to modify it is by dispatching actions.

2. Action: Plain JavaScript objects that represent events or user interactions. Actions are dispatched to the store to trigger state changes.

3. Reducer: Pure functions that specify how the state changes in response to an action. Reducers take the current state and an action as arguments, and they return a new state based on these inputs.

4. Dispatch: The process of sending an action to the store. It is the only way to trigger a state change.

5. Subscribe: A function that allows components to listen for changes in the state. When the state in the store changes, subscribers are notified, and they can update their views accordingly.

# Installation

## Install Redux Toolkit and React-Redux

Add the Redux Toolkit and React-Redux packages to your project:

### `npm install @reduxjs/toolkit react-redux`

## Create a Redux Store

Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

- ## TypeScript

  app/store.js

        import { configureStore } from '@reduxjs/toolkit'

            export const store = configureStore({
            reducer: {},
            })

            // Infer the `RootState` and `AppDispatch` types from the store itself
            export type RootState = ReturnType<typeof store.getState>
            // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
            export type AppDispatch = typeof store.dispatch

- ## JavaScript

  app/store.js

        import { configureStore } from '@reduxjs/toolkit'

        export const store = configureStore({
          reducer: {},
        })

## Provide the Redux Store to React

Once the store is created, we can make it available to our React components by putting a React-Redux `<Provider>` around our application in `src/index.js`. Import the Redux store we just created, put a `<Provider>` around your `<App>`, and pass the store as a prop:

- ## TypeScript

  index.js

        import React from 'react'
        import ReactDOM from 'react-dom'
        import './index.css'
        import App from './App'
        import { store } from './app/store'
        import { Provider } from 'react-redux'

        ReactDOM.render(
          <Provider store={store}>
            <App />
          </Provider>,
          document.getElementById('root')
        )

- ## JavaScript

  index.js

      import React from 'react'
      import ReactDOM from 'react-dom'
      import './index.css'
      import App from './App'
      import { store } from './app/store'
      import { Provider } from 'react-redux'

      ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('root')
      )

## Create a Redux State Slice

Add a new file named `src/features/counter/counterSlice.js`. In that file, import the `createSlice` API from Redux Toolkit.

Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.

Redux requires that `we write all state updates immutably, by making copies of data and updating the copies`. However, Redux Toolkit's `createSlice` and `createReducer` APIs use `Immer` inside to allow us to `write "mutating" update logic that becomes correct immutable updates`.

### Immer

Immer (German for: always) is a tiny package that allows you to work with immutable state in a more convenient way.

- ## TypeScript

  features/counter/counterSlice.js

        import { createSlice } from '@reduxjs/toolkit'
        import type { PayloadAction } from '@reduxjs/toolkit'

        export interface CounterState {
          value: number
        }

        const initialState: CounterState = {
          value: 0,
        }

        export const counterSlice = createSlice({
          name: 'counter',
          initialState,
          reducers: {
            increment: (state) => {
              // Redux Toolkit allows us to write "mutating" logic in reducers. It
              // doesn't actually mutate the state because it uses the Immer library,
              // which detects changes to a "draft state" and produces a brand new
              // immutable state based off those changes
              state.value += 1
            },
            decrement: (state) => {
              state.value -= 1
            },
            incrementByAmount: (state, action: PayloadAction<number>) => {
              state.value += action.payload
            },
          },
        })

        // Action creators are generated for each case reducer function
        export const { increment, decrement, incrementByAmount } = counterSlice.actions

        export default counterSlice.reducer

- ## JavaScript

  features/counter/counterSlice.js

        import { createSlice } from '@reduxjs/toolkit'

        const initialState = {
          value: 0,
        }

        export const counterSlice = createSlice({
          name: 'counter',
          initialState,
          reducers: {
            increment: (state) => {
              // Redux Toolkit allows us to write "mutating" logic in reducers. It
              // doesn't actually mutate the state because it uses the Immer library,
              // which detects changes to a "draft state" and produces a brand new
              // immutable state based off those changes
              state.value += 1
            },
            decrement: (state) => {
              state.value -= 1
            },
            incrementByAmount: (state, action) => {
              state.value += action.payload
            },
          },
        })

        // Action creators are generated for each case reducer function
        export const { increment, decrement, incrementByAmount } = counterSlice.actions

        export default counterSlice.reducer

## Use Redux State and Actions in React Components

Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with `useSelector`, and dispatch actions using `useDispatch`. Create a `src/features/counter/Counter.js` file with a `<Counter>`component inside, then import that component into `App.js` and render it inside of `<App>`.

- ## TypeScript

  features/counter/Counter.js

        import React from 'react'
        import type { RootState } from '../../app/store'
        import { useSelector, useDispatch } from 'react-redux'
        import { decrement, increment } from './counterSlice'

        export function Counter() {
          const count = useSelector((state: RootState) => state.counter.value)
          const dispatch = useDispatch()

          return (
            <div>
              <div>
                <button
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >
                  Increment
                </button>
                <span>{count}</span>
                <button
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                >
                  Decrement
                </button>
              </div>
            </div>
          )
        }

- ## JavaScript

  features/counter/Counter.js

      import React from 'react'
      import { useSelector, useDispatch } from 'react-redux'
      import { decrement, increment } from './counterSlice'

      export function Counter() {
        const count = useSelector((state) => state.counter.value)
        const dispatch = useDispatch()

        return (
          <div>
            <div>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <span>{count}</span>
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
          </div>
        )
      }

Now, any time you click the "Increment" and "Decrement" buttons:

- The corresponding Redux action will be dispatched to the store
- The counter slice reducer will see the actions and update its state
- The <Counter> component will see the new state value from the store and re-render itself with the new data

# New Concepts Used

## useSelector

useSelector is a hook provided by the React-Redux library. In simple terms, it's used in a React functional component to extract and access specific pieces of data from the Redux store. It allows the component to subscribe to updates from the Redux store and automatically re-render when the selected data changes.

> [!Note]
> It is used to read a specific variable from a particular reducer.

## useDispatch

useDispatch is a hook in React-Redux that provides a reference to the dispatch function from the Redux store. In simple terms, it allows a React functional component to dispatch actions to the Redux store, triggering state changes in the application.

> [!Note]
> It is used for calling any action from any reducer

### Code Explained

## Create a Redux Store "store.tsx" Explained

    export const store = configureStore({
    reducer: {},
    });

    // Inter the `RootState` and `AppDispatch` types from the store itself
    export type RootState = ReturnType<typeof store.getState>;

    //Inferred type: {posts: PostsState, comments: CommentsState, users: UserState}
    export type AppDispatch = typeof store.dispatch;

**Explaination:**

1. Redux Store Configuration:

   import { configureStore } from "@reduxjs/toolkit";

   export const store = configureStore({
   reducer: {},
   });

   In this part, you are using the `configureStore` function to create a Redux store. The `reducer` field is where you would normally pass your combined reducers, but in this case, it's an empty object (`{}`).

2. Defining RootState:

   export type RootState = ReturnType<typeof store.getState>;

   This line defines a type `RootState` which is inferred as the return type of the `getState` method from the Redux store. It represents the overall state shape of your application.

3. Defining AppDispatch:

   export type AppDispatch = typeof store.dispatch;

   This line defines a type `AppDispatch` which is inferred as the type of the `dispatch` method from the Redux store. It represents the type of the function you use to dispatch actions in your application.

   This code structure is a common pattern when using Redux with TypeScript. You would later import the `RootState` and `AppDispatch` types in other parts of your application to provide strong typing for state and actions.

   Just remember to replace the empty object `{}` in the `reducer` field with your actual combined reducers when you have them.

# Redux (TypeScript)

- https://redux-toolkit.js.org/tutorials/quick-start
- https://redux-toolkit.js.org/tutorials/typescript
- [redux quick start repo](https://github.com/reduxjs/redux-essentials-counter-example/tree/master)
- https://medium.com/@kmraman11011/title-building-a-todo-app-with-react-and-redux-toolkit-5ae2740048c3

```js
npm install @reduxjs/toolkit react-redux @types/react-redux
```

## Example 1 - Counter

- [store.ts](./src/redux/store.ts)
- [hooks.ts](./src/redux/hooks.ts)
- [counterSlice.ts](./src/redux/counter/counterSlice.ts)
- [Counter.tsx](./src/redux/counter/Counter.tsx)
- http://localhost:3000/redux-counter

```js
import 'immer';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
```

```js
//hooks.js
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
```

## Example 2 - Todo

- [todoSlice.ts](./src/redux/todo/todoSlice.ts)
- [Todo.tsx](./src/redux/todo/Todo.tsx)
- [store.ts](./src/redux/store.ts)
- [hooks.ts](./src/redux/hooks.ts)

<hr />

## My syntax note (JavaScript)

```js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import ReactDOM from "react-dom";

const store = configureStore({reducer:{}})
const todoSlice = createSlice({name: xxx, initialState: {todo:[]}, reducers: {add:(state,action)=>{}}})
export const {func1, func2} = todoSlice.actions
export default todorSlice.reducer
const todo = useSelector((state) => state.todos.todo)
const dispatch = useDispatch()
onClick={() => deleteTodo(data.id)}
onClick={dispatch(addTodo())}

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById("root"));
```

1. Create a Redux Store
2. Provide the Redux Store to React
3. Create a Redux State Slice
4. Add Slice Reducers to the Store
5. Use Redux State and Actions in React Components

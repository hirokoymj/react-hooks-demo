import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import ErrorPage from './error-page';
//import Contact from './routes/contact';
import Demo1 from './react-hooks-useMemo/Demo1';
import Demo2 from './react-hooks-useMemo/Demo2';
import ParentComponent from './react-hooks-useCallback/ParentComponent';
import Demo from './react-hooks-useCallback/Demo';
import Users from './react-hooks-useEffect/Users';
import DemoEffect from './react-hooks-useEffect/DemoEffect';
import CounterDemo from './react-hooks-useState/DemoCounter';
import ToggleDemo from './react-hooks-customHook/ToggleDemo';
import TempUnitConvertDemo from './react-hooks-customHook/TempUnitConvertDemo';
import DeferredDemo from './react-hooks-useDeferredValue/example1/DeferredDemo';
import DeferredDemo2 from './react-hooks-useDeferredValue/example2/DeferredDemo2';
import DemoTransition from './react-hooks-useTransition/DemoTransition';
import DemoIdHook from './react-hooks-useId/DemoIdHook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'memo1',
        element: <Demo1 />,
      },
      {
        path: 'memo2',
        element: <Demo2 />,
      },
      {
        path: 'useCallback-1',
        element: <ParentComponent />,
      },
      {
        path: 'useCallback-2',
        element: <Demo />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'demo-effect',
        element: <DemoEffect />,
      },
      {
        path: 'counter-demo',
        element: <CounterDemo />,
      },
      {
        path: 'toggle-demo',
        element: <ToggleDemo />,
      },
      {
        path: 'temp-unit-convert-demo',
        element: <TempUnitConvertDemo />,
      },
      {
        path: 'deferred-demo1',
        element: <DeferredDemo />,
      },
      {
        path: 'deferred-demo2',
        element: <DeferredDemo2 />,
      },
      {
        path: 'transition-demo1',
        element: <DemoTransition />,
      },
      {
        path: 'useId-demo',
        element: <DemoIdHook />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

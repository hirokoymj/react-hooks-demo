import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
//import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider } from '@apollo/client';

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
import BoxDemo from './component-pattern/BoxDemo';
import EventBubblingDemo from './event-bubbling/EventBubblingDemo';
import { Counter } from './redux/counter/Counter';
import { Todo } from './redux/todo/Todo';
import { UsersViewTest } from './restful-api/example1/UsersViewTest';
import { UsersView } from './restful-api/example1/UsersView';
import PostsView from './restful-api/example2/PostsView';
import { NestedDataView } from './nested-data/NestedDataView';
import { SignUpForm } from './react-hook-form/SignUpForm';
import { CategoryList, OneCategory, CreateCategory } from './graphQL/CategoryList';
//import { DisplayLocations, DisplaySingleLocation } from './graphQL/DisplayLocations';
//import { Dogs, DogDetail } from './graphQL/Dogs';
import { SpaceXDemo } from './graphQL/SpaceXDemo';
import ComponentTest from './components/ComponentTest';
import MyContextDemo from './react-hooks-useContext/index';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
      },
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
      {
        path: 'box-demo',
        element: <BoxDemo />,
      },
      {
        path: 'event-bubbling-demo',
        element: <EventBubblingDemo />,
      },
      {
        path: 'redux-counter',
        element: <Counter />,
      },
      {
        path: 'redux-todo',
        element: <Todo />,
      },
      {
        path: 'users-view',
        element: <UsersView />,
      },
      {
        path: 'users-view-test',
        element: <UsersViewTest />,
      },
      {
        path: 'posts-view',
        element: <PostsView />,
      },
      {
        path: 'nested-data-view',
        element: <NestedDataView />,
      },
      {
        path: 'sign-up-form',
        element: <SignUpForm />,
      },
      {
        path: 'category-list',
        element: <CategoryList />,
      },
      {
        path: 'category-one',
        element: <OneCategory />,
      },
      {
        path: 'create-category',
        element: <CreateCategory />,
      },
      {
        path: 'component-test',
        element: <ComponentTest />,
      },
      {
        path: 'context-demo',
        element: <MyContextDemo />,
      },
      //   {
      //     path: 'quick-start',
      //     element: <DisplayLocations />,
      //   },
      //   {
      //     path: 'quick-start/:locationId',
      //     element: <DisplaySingleLocation />,
      //   },
      //   {
      //     path: 'dogs',
      //     element: <Dogs />,
      //   },
      //   {
      //     path: 'dogs/:breed',
      //     element: <DogDetail />,
      //   },
      {
        path: 'spacex',
        element: <SpaceXDemo />,
      },
    ],
  },
]);

// const client = new ApolloClient({
//   uri: 'https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/',
//   cache: new InMemoryCache(),
// });
// const client = new ApolloClient({
//   uri: 'https://flyby-router-demo.herokuapp.com/',
//   cache: new InMemoryCache(),
// });
// const client = new ApolloClient({
//   uri: 'https://71z1g-4000.csb.app/',
//   cache: new InMemoryCache(),
// });

// Create your HttpLink instances for each endpoint
const endpoint1Link = new HttpLink({
  uri: 'https://hiroko-web-backend-new-08d39ee2590b.herokuapp.com/',
});

const endpoint2Link = new HttpLink({
  //uri: 'https://71z1g-4000.csb.app/',
  uri: 'https://spacex-production.up.railway.app/',
});

const directionalLink = ApolloLink.split(
  (operation) => operation.getContext().clientName === 'spaceXApi',
  endpoint2Link, // The "left" link (used if the test is true)
  endpoint1Link, // The "right" link (used if the test is false)
);

// Create the Apollo Client with the directional link
const client = new ApolloClient({
  link: directionalLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
    </ApolloProvider>
  </React.StrictMode>,
);

import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Hooks Demo</h1>
        <nav>
          <ul>
            <li>
              <Link to={`memo1`}>useMemo example 1</Link>
            </li>
            <li>
              <Link to={`memo2`}>useMemo example 2</Link>
            </li>
            <li>
              <Link to={`useCallback-1`}>useCalback example 1</Link>
            </li>
            <li>
              <Link to={`useCallback-2`}>useCalback example 2</Link>
            </li>
            <li>
              <Link to={`users`}>useEffect example 1</Link>
            </li>
            <li>
              <Link to={`demo-effect`}>useEffect example 2 (with destroy)</Link>
            </li>
            <li>
              <Link to={`counter-demo`}>useState example 1</Link>
            </li>
            <li>
              <Link to={`toggle-demo`}>Custom Hooks example 1</Link>
            </li>
            <li>
              <Link to={`temp-unit-convert-demo`}>Custom Hooks example 2</Link>
            </li>
            <li>
              <Link to={`deferred-demo1`}>useDeferredValue example 1</Link>
            </li>
            <li>
              <Link to={`deferred-demo2`}>useDeferredValue example 2</Link>
            </li>
            <li>
              <Link to={`transition-demo1`}>useTransition</Link>
            </li>
            <li>
              <Link to={`useId-demo`}>useId</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}

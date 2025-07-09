# useContext

```ts
//.context.ts
import { createContext, useContext } from 'react';

export const DashboardContext = createContext<User | undefined>(undefined);
export function useUserContext() {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }
  return user;
}
```

```ts
//index.tsx
import { DashboardContext } from './context';

export default function MyContextDemo({}: DemoProps) {
///...
  return (
    <div>
      <DashboardContext.Provider value={user}>
        <Dashboard />
      </DashboardContext.Provider>
    </div>
  );
```

## memory note

```ts
import { createContext, useContext } from 'react';
export const DashboardContext = createContext<User | undefined>(undefined);
//Component
<div>
	<DashboardContext.Provider value={user}>
		<Dashboard />
	</DashboardContext.Provider>
</div>

//=====how to use
export function useUserContext() {
  const user = useContext(DashboardContext);
  if (user === undefined) {
    throw new Error('error');
  }
  return user;
}
// Component
export function Dashboard() {
  const user = useUserContext();
  return <div>{user.name}</div>;
}
```

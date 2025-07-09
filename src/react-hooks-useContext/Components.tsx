import { useUserContext } from './context';

//interface SidebarProps {}

export function Sidebar() {
  const user = useUserContext();

  return (
    <div>
      <div>{user.name}</div>
      <div>Subscription Status: {user.isSubscribed}</div>
    </div>
  );
}

//interface ProfileProps {}

export function Profile() {
  const user = useUserContext();

  return <div>{user.name}</div>;
}

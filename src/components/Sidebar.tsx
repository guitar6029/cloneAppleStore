import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();
  
  return (
    <div className="flex flex-col item-center">
      <h2>Sidebar</h2>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/' } })}>
        Logout
      </button>
    </div>
  );
}

export default Sidebar;

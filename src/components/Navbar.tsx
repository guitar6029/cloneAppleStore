import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout } = useAuth0();
  
  return (
    <div className="flex flex-row justify-between">
      <h2>Navbar</h2>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/' } })}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;

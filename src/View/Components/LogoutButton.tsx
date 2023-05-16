import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className=' bg-MCS-BlueBlack text-white rounded-md m-2 h-10 w-24'
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
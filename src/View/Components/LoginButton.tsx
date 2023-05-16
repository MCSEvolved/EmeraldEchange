import { useAuth0 } from "@auth0/auth0-react";

interface Props {
  isAuthenticated: Boolean
  userName: string | undefined
}

export default function LoginButton({ isAuthenticated, userName }: Props) {
  if (isAuthenticated) {
    return (
      <p>{userName}</p>
    )
  }

  const { loginWithRedirect } = useAuth0();

  return <button
    className=' bg-MCS-BlueBlack text-white rounded-md h-8 w-24'
    onClick={() => loginWithRedirect()}
  >Log In</button>;
};
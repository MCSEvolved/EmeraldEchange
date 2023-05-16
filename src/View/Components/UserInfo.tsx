import { useAuth0 } from "@auth0/auth0-react";
import { ReactComponent as AccountIcon } from '../Images/AccountIcon.svg'
import LoginButton from "./LoginButton";
import ProfilePopover from "./ProfilePopover";

export default function UserInfo() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      <LoginButton isAuthenticated={isAuthenticated} userName={user?.name}></LoginButton>
      <ProfilePopover isAuthenticated={isAuthenticated} userPicture={user?.picture}></ProfilePopover>
    </>
  )
}
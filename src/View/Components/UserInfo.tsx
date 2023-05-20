import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginButton from "./LoginButton";
import ProfilePopover from "./ProfilePopover";
import useProfilePicture from "../../Hooks/UseProfilePicture";

export default function UserInfo() {
  const auth = getAuth();
  const [user, loadingAuthState, error] = useAuthState(auth);

  const accessToken = localStorage.getItem('accessToken') || '';
  const [userPictureURL, loadingProfilePicture] = useProfilePicture(accessToken);

  
  if (loadingAuthState || loadingProfilePicture) {
    return <p>Loading...</p>
  }
  
  if (error) {
    console.log('Error from useAuthState: ', error)
    return <p>Could not load user info</p>
  }
  const isAuthenticated = user !== null && user !== undefined;
  return (
    <>
      <LoginButton isAuthenticated={isAuthenticated} userName={user?.displayName}></LoginButton>
      <ProfilePopover isAuthenticated={isAuthenticated} userPicture={userPictureURL}></ProfilePopover>
    </>
  )
}
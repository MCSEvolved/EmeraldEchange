import { useEffect, useState } from "react";

export default function useProfilePicture(accessToken: string) {
  const [userPictureURL, setUserPictureURL] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('https://graph.microsoft.com/v1.0/me/photo/$value', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'image/jpg'
      }
    })
      .then(async function (response) {
        return await response.blob();
      })
      .then(function (blob) {
        const imageObjectURL = URL.createObjectURL(blob);
        setUserPictureURL(imageObjectURL);
        setIsLoading(false);
      })
      .catch(() => console.log('error injecting photo'));
  }, [accessToken])
  return [userPictureURL, isLoading] as [string | undefined, boolean]
}
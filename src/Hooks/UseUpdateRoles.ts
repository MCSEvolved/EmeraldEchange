import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useUpdateRoles() {
    const [loading, setLoading] = useState<boolean>(true);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const updateRoles = async () => {
            const auth = getAuth();
            const idToken = await auth.currentUser?.getIdToken()
            await fetch('http://localhost:8000/api/auth/check-user-roles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "idtoken": idToken })
            }).then(() => {
                auth.currentUser?.getIdToken(true);
            });
        }

        updateRoles();
        setLoading(false);
    }, [refresh]);

    return [loading, refresh, setRefresh] as [boolean, boolean, React.Dispatch<React.SetStateAction<boolean>>];
}
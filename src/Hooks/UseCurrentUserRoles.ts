import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function useCurrentUserRoles() {
    const [roles, setRoles] = useState<Record<string, any> | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    const getClaims = async (auth: Auth) => {
        const idToken = await auth.currentUser?.getIdToken()
        const response = await fetch('http://localhost:8000/api/auth/get-user-claims/' + idToken, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const claims = await response.json()
        console.log(claims)
        return claims;
    }

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const claims = await getClaims(auth);
                setRoles(claims);
                setLoading(false);
            } else {
                setRoles(undefined);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);
    return [roles, loading] as [Record<string, any> | undefined, boolean];
}
interface Props {
    roles: any,
    loadingRoles: boolean
}

export default function RoleDisplay({roles, loadingRoles}: Props) {
    if (loadingRoles) {
        return <p>role...</p>;
    }
    if (roles && roles.isAdmin) {
        return <p>Admin</p>;
    }
    if (roles && roles.isPlayer) {
        return <p>Player</p>;
    }
    if (roles && roles.isGuest) {
        return <p>Guest</p>;
    }
    return <></>
}
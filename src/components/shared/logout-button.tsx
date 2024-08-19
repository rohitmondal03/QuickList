import { useUser } from '@/lib/hooks/use-user'
import { Button } from '../ui/button'


export function LogoutButton() {
    const {signOut} = useUser();

    return (
        <Button
            onClick={signOut}
            variant={"destructive"}
        >
            Sign Out
        </Button>
    )
}

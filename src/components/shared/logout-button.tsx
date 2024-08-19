import { signOut } from '@/lib/functions/auth'
import { Button } from '../ui/button'


export function LogoutButton() {
    return (
        <Button
            onClick={signOut}
            variant={"destructive"}
        >
            Sign Out
        </Button>
    )
}

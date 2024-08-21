import { useState } from 'react';

import { useUser } from '@/hooks/use-user'
import { Button } from '../ui/button'
import { LoadingButton } from '../ui/loading-button';


export function LogoutButton() {
    const { signOut } = useUser();
    const [isLoading, setLoading] = useState(false);


    const handleSignOut = async () => {
        setLoading(true);

        try {
            await signOut()
        } finally {
            setLoading(false);
        }
    }


    return (
        <Button
            onClick={handleSignOut}
            variant={"destructive"}
        >
            {isLoading ? (
                <LoadingButton className='w-full bg-transparent'/>
            ) : (
                <>Sign Out</>
            )}
        </Button>
    )
}

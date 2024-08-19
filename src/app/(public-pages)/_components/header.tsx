"use client"

import Link from 'next/link'

import { useUser } from '@/lib/hooks/use-user'
import { LogoutButton } from '@/components/shared/logout-button'
import { buttonVariants } from '@/components/ui/button'


export function Header() {
    const { isLogged } = useUser();

    return (
        <header className="bg-primary text-primary-foreground py-6 px-6 flex items-center justify-between">
            <Link
                href="/"
                className="text-xl font-bold"
                prefetch={false}
            >
                Todo App
            </Link>
            <div className='flex items-center gap-x-6'>
                {isLogged ? <LogoutButton /> : null}
                <Link
                    href="/sign-in"
                    className={buttonVariants({
                        variant: "secondary",
                    })}
                    prefetch={false}
                >
                    Sign In
                </Link>
            </div>
        </header>
    )
}

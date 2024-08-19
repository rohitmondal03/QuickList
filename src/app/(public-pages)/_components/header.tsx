"use client"

import Link from 'next/link'

import { LogoutButton } from '@/components/shared/logout-button'
import { buttonVariants } from '@/components/ui/button'


export function Header() {
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
                <LogoutButton />
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

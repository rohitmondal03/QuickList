"use client"

import Link from 'next/link'

import { useUser } from '@/hooks/use-user'
import { LogoutButton } from '@/components/shared/logout-button'
import { buttonVariants } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'


export function Header() {
    const { isLogged } = useUser();

    return (
        <header className="bg-primary text-primary-foreground py-6 px-10 flex items-center justify-between">
            <Link
                href="/"
                className="text-2xl font-bold"
                prefetch={false}
            >
                Q/L.
            </Link>
            <div className='flex items-center gap-x-6'>
                {isLogged ? (
                    <div className='flex items-center gap-x-6'>
                        <Link
                            href="/dashboard"
                            className={buttonVariants({
                                variant: "ghost",
                                className: "flex items-center gap-1"
                            })}
                            prefetch={false}
                        >
                            Dashboard
                            <ArrowUpRight size={15} />
                        </Link>
                        <LogoutButton />
                    </div>
                ) : (
                    <Link
                        href="/sign-in"
                        className={buttonVariants({
                            variant: "secondary",
                        })}
                        prefetch={false}
                    >
                        Sign In
                    </Link>
                )}
            </div>
        </header>
    )
}

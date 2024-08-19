"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckIcon, } from "lucide-react"

import { useUser } from "@/lib/hooks/use-user"
import { LogoutButton } from "@/components/shared/logout-button"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"


export function Header() {
    return (
        <header className="sticky top-0 z-40 flex h-14 items-center justify-between border-b-2 border-slate-400 bg-background px-4 sm:px-6">
            <div className="flex items-center gap-4">
                <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                    prefetch={false}
                >
                    <CheckIcon className="h-6 w-6" />
                    <span className="text-lg">Todo App</span>
                </Link>
            </div>
            <div className="flex items-center gap-8">
                <LogoutButton />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="rounded-full">
                            <Image
                                src="/placeholder.svg"
                                width={36}
                                height={36}
                                alt="Avatar"
                                className="rounded-full"
                                style={{ aspectRatio: "36/36", objectFit: "cover" }}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}

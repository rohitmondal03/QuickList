"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

import { useUser } from "@/hooks/use-user"
import { LoadingButton } from "@/components/ui/loading-button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export function AuthForm() {
    const { signIn, signUp } = useUser();
    const pathname = usePathname();
    const [isLoading, setLoading] = useState(false)
    const [usersInputDetails, setUsersInputDetails] = useState<{
        name?: string;
        email: string;
        password: string;
    }>({
        name: "",
        email: "",
        password: "",
    })


    const handleSubmit = async () => {
        setLoading(true);

        try {
            pathname === "/sign-in"
                ? await signIn({
                    email: usersInputDetails.email,
                    password: usersInputDetails.password,
                })
                : await signUp({
                    email: usersInputDetails.email,
                    name: usersInputDetails.name,
                    password: usersInputDetails.password,
                })
        } finally {
            setLoading(false);
            return;
        }
    }


    return (
        <>
            <form
                className="space-y-4"
                onSubmit={async (e) => {
                    e.preventDefault();
                    await handleSubmit();
                }}
            >
                <div>
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        required
                        autoComplete="off"
                        value={usersInputDetails.email}
                        onChange={(e) => setUsersInputDetails(prev => ({
                            ...prev,
                            email: e.target.value,
                        }))}
                        className=""
                    />
                </div>
                {pathname === "/sign-up" ? (
                    <div>
                        <Label htmlFor="name">
                            Full name
                        </Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="e.g. Rohit Mondal"
                            autoComplete="off"
                            required
                            value={usersInputDetails.name}
                            onChange={(e) => setUsersInputDetails(prev => ({
                                ...prev,
                                name: e.target.value,
                            }))}
                        />
                    </div>
                ) : null}
                <div>
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        required
                        placeholder="........."
                        value={usersInputDetails.password}
                        onChange={(e) => setUsersInputDetails(prev => ({
                            ...prev,
                            password: e.target.value,
                        }))}
                    />
                </div>
                {!isLoading ? (
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Sign {pathname === "/sign-up" ? "Up" : "In"}
                    </Button>
                ) : (
                    <LoadingButton className="w-full" />
                )}
            </form>
            <div className="text-center text-muted-foreground text-sm">
                {pathname === "/sign-up" ? (
                    "Sign-in with your existing acccount "
                ) : (
                    "Don't have an account ?"
                )}
                {" "}
                <Link
                    href={pathname === "/sign-up" ? "/sign-in" : "/sign-up"}
                    className="text-primary underline font-medium"
                    prefetch={false}
                >
                    {pathname === "/sign-up" ? "Sign In" : "Sign Up"}
                </Link>
            </div>
        </>
    )
}

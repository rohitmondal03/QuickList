"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FormEvent, useState, useContext } from "react"

import { useUser } from "@/lib/hooks/use-user"
import { LoadingButton } from "@/components/ui/loading-button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserContext } from "@/components/provides/auth-provider"


export function AuthForm() {
    // const {}= useContext(UserContext);
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


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // pathname === "/sign-in"
        //     ? signIn({
        //         email: usersInputDetails.email,
        //         password: usersInputDetails.password,
        //     })
        //     : signUp({
        //         email: usersInputDetails.email,
        //         name: usersInputDetails.name,
        //         password: usersInputDetails.password,
        //     })

    }


    return (
        <>
            <form
                className="space-y-4"
                onSubmit={(e) => {
                    setLoading(true);
                    handleSubmit(e);
                    setLoading(false);
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
                    <LoadingButton />
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

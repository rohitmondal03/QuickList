"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useUser } from "@/lib/hooks/use-user"


export default function Template({ children }: TLayout) {
    const { isLogged } = useUser();
    const { push: redirect } = useRouter();

    useEffect(() => {
        if(!isLogged) {
            redirect("/sign-in")
        }
    }, [isLogged, redirect])


    return (
        <>
            {children}
        </>
    )
}

"use client"

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react"
import { Models } from "appwrite"
import { toast } from "react-toastify";

import { appwriteAccount, appwriteClient, ID } from "@/lib/appwrite";


type TUserContext = {
    user: Models.User<Models.Preferences> | undefined;
    isLogged: boolean;
    signOut: () => Promise<void>;
    signUp: ({ email, password, name }: {
        email: string;
        password: string;
        name?: string;
    }) => Promise<void>;
    signIn: ({ email, password }: {
        email: string;
        password: string;
    }) => Promise<void>;
}


export const UserContext = createContext<TUserContext | undefined>(undefined);


export function AuthProvider({ children }: TLayout) {
    const { push: redirect } = useRouter();
    const [user, setUser] = useState<Models.User<Models.Preferences> | undefined>();
    const [isLogged, setIsLogged] = useState(false);


    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userDetails = await appwriteAccount.get();
                setUser(userDetails);
                setIsLogged(true);
            } catch (err: any) {
                setUser(undefined);
                setIsLogged(false);
                return;
            }
        }

        void fetchUserDetails();
    }, [user])


    const signUp = async ({
        email, password, name
    }: {
        email: string;
        password: string;
        name?: string;
    }) => {
        await appwriteAccount.create(
            ID.unique(),
            email,
            password,
            name
        ).then(() => {
            setIsLogged(true);
            redirect("/dashboard")
            toast.success("Signed up successfully !!")
        }).catch(err => {
            toast.error(err.response.message)
            return;
        })

        await signIn({
            email: email,
            password: password
        })
    }


    const signIn = async ({ email, password }: {
        email: string;
        password: string;
    }) => {
        await appwriteAccount.createEmailPasswordSession(email, password)
            .then(async () => {
                setUser(await appwriteAccount.get());
                setIsLogged(true);
                redirect("/dashboard")
                toast.success("Signed in successfully !!")
            }).catch(err => {
                toast.error(err.response.message)
                return;
            })
    }


    const signOut = async () => {
        await appwriteAccount.deleteSession("current")
            .then(() => {
                setIsLogged(false);
                redirect("/")
                toast.success("Signed out successfully !!")
            }).catch((err) => {
                toast.error(err.response.message)
                return;
            })
    }


    return (
        <UserContext.Provider value={{
            signIn,
            signUp,
            signOut,
            user,
            isLogged,
        }}>
            {children}
        </UserContext.Provider>
    )
}

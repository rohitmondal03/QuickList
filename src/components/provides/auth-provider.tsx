"use client"

import { Models } from "appwrite"
import { createContext, useState } from "react"
import { toast } from "react-toastify";

import { appwriteAccount, ID } from "@/lib/appwrite";


type TUserContext = {
    user:  Models.User<Models.Preferences> | undefined;
    signOut: () => Promise<void>;
    signUp:  ({ email, password, name }: {
        email: string;
        password: string;
        name?: string;
    }) => Promise<void>;
    signIn:  ({ email, password }: {
        email: string;
        password: string;
    }) => Promise<void>;
}

export const UserContext = createContext<TUserContext | undefined>(undefined);


export function AuthProvider({ children }: TLayout) {
    const [user, setUser]= useState<Models.User<Models.Preferences> | undefined>();

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
                toast.success("Signed in successfully !!")
            }).catch(err => {
                toast.error(err.response.message)
                return;
            })
    }
    
    
    const signOut = async () => {
        await appwriteAccount.deleteSession("current")
            .then(() => {
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
        }}>
            {children}
        </UserContext.Provider>
    )
}

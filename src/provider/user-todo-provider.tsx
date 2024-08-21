"use client"

import { useEffect, useState, createContext } from "react"
import { toast } from "react-toastify"

import { useUser } from "@/hooks/use-user"
import { fetchLatestUsersToDo, fetchUsersToDo } from "@/lib/functions/db"


type TUserToDoContext = {
    isFetching: boolean;
    data: TDocuments[] | undefined;
    latestTodo: TDocuments[] | undefined;
}

export const UserToDoContext = createContext<TUserToDoContext | undefined>(undefined)

export function UserToDoProvider({ children }: TLayout) {
    const [isFetching, setLoading] = useState(false);
    const [data, setData] = useState<TDocuments[]>([]);
    const [latestTodo, setLatestTodo] = useState<TDocuments[]>([]);
    const { user } = useUser();


    useEffect(() => {
        (async function () {
            setLoading(true);

            try {
                await fetchUsersToDo(user?.$id ?? "")
                    .then(data => {
                        if (!data) {
                            toast.error("Error fetching data !!")
                            return;
                        }
                        setData(data.documents);
                    })
            } finally {
                setLoading(false);
            }
        })()
    }, [user?.$id])


    useEffect(() => {
        (async function () {
            setLoading(true);

            try {
                await fetchLatestUsersToDo(user?.$id ?? "")
                    .then(data => {
                        if (!data) {
                            toast.error("Error fetching data !!")
                            return;
                        }
                        setLatestTodo(data.documents);
                    })
            } finally {
                setLoading(false);
            }
        })()
    }, [])


    return (
        <UserToDoContext.Provider value={{
            isFetching,
            data,
            latestTodo,
        }}>
            {children}
        </UserToDoContext.Provider>
    )
}

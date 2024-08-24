"use client"

import { useEffect, useState, createContext } from "react"
import { toast } from "react-toastify"

import { useUser } from "@/hooks/use-user"
import { fetchUsersToDo } from "@/lib/functions/db"


type TUserToDoContext = {
    isFetching: boolean;
    data: TDocuments[] | undefined;
    latestTodo: TDocuments[] | undefined;
    todosCategoryNumbers: {
        work: number,
        personal: number,
        shopping: number,
        remainders: number,
    };
    todosPrioritiesNumbers: {
        high: number,
        medium: number,
        low: number,
    }
}

export const UserToDoContext = createContext<TUserToDoContext | undefined>(undefined)

export function UserToDoProvider({ children }: TLayout) {
    const [isFetching, setLoading] = useState(false);
    const [data, setData] = useState<TDocuments[]>([]);
    const [todosCategoryNumbers, setTodoCategoryNumber] = useState({
        work: 0,
        personal: 0,
        shopping: 0,
        remainders: 0,
    });
    const [todosPrioritiesNumbers, setTodoPriorityNumber] = useState({
        high: 0,
        medium: 0,
        low: 0,
    });
    const { user } = useUser();


    const filterDbDocCount= (list: TDocuments[], key: string, value: string) => {
        return list.filter((doc) => doc[key] === value).length;
    }


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
                        setTodoCategoryNumber(prev => ({
                            ...prev,
                            work: filterDbDocCount(data.documents, "category", "Work"),
                            personal: filterDbDocCount(data.documents, "category", "Personal"),
                            remainders: filterDbDocCount(data.documents, "category", "Remainder"),
                            shopping: filterDbDocCount(data.documents, "category", "Shopping"),
                        }))
                        setTodoPriorityNumber(prev => ({
                            ...prev,
                            high: filterDbDocCount(data.documents, "priority", "High"),
                            medium: filterDbDocCount(data.documents, "priority", "Medium"),
                            low: filterDbDocCount(data.documents, "priority", "Low"),
                        }))
                        setData(data.documents);
                    })
            } finally {
                setLoading(false);
            }
        })()
    }, [user?.$id])


    return (
        <UserToDoContext.Provider value={{
            isFetching,
            data,
            latestTodo: data.slice(0, 3),
            todosCategoryNumbers,
            todosPrioritiesNumbers
        }}>
            {children}
        </UserToDoContext.Provider>
    )
}

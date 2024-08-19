import { toast } from "react-toastify";
import { database, ID } from "../appwrite"


const addToDo = async ({
    userId,
    title,
    description,
    category,
    priority,
}: {
    userId: string;
    title: string;
    description: string;
    category: string;
    priority: string
}) => {
    try {
        await database.createDocument(
            process.env.NEXT_PUBLIC_DB_ID || "",
            process.env.NEXT_PUBLIC_TODO_COLLECTION_ID || "",
            ID.unique(),
            {
                userId,
                title,
                description,
                createdAt: new Date(),
                updatedAt: new Date(),
                category,
                priority,
            }
        )
        toast.success("ToDo added successfully !!")
    } catch (error: any) {
        toast.error(error.response.message)
    }
}


export {
    addToDo,
}
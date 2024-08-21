import { Query } from "appwrite";
import { toast } from "react-toastify";

import { appwriteAccount, database, ID } from "../appwrite"


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
        return;
    }
}


const fetchUsersToDo = async (userId: string) => {
    try {
        return await database.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID ?? "",
            process.env.NEXT_PUBLIC_TODO_COLLECTION_ID ?? "",
            [
                Query.equal("userId", userId)
            ]
        )
    } catch (err: any) {
        toast.error("Error fetching data");
        return;
    }
}


const fetchLatestUsersToDo = async (userId: string) => {
    try {
        return await database.listDocuments(
            process.env.NEXT_PUBLIC_DB_ID ?? "",
            process.env.NEXT_PUBLIC_TODO_COLLECTION_ID ?? "",
            [
                Query.equal("userId", userId),
                Query.limit(5),
                Query.orderDesc("createdAt"),
            ]
        )
    } catch (err: any) {
        toast.error(err.response.message);
        return;
    }
}


const updateName = async (name: string) => {
    try {
        await appwriteAccount.updateName(name)
        toast.success("Changed name to " + name);
    } catch (err: any) {
        toast.error(err.response.message)
        return;
    }
}


const updateEmail = async ({
    email, passsword,
}: {
    email: string;
    passsword: string;
}) => {
    try {
        await appwriteAccount.updateEmail(email, passsword);
        toast.success("Changed E-Mail successfully !!")
    } catch (err: any) {
        toast.error(err.response.message);
        return;
    }
}


const updatePassword = async ({
    oldPassword,
    newPassword,
}: {
    oldPassword: string;
    newPassword: string;
}) => {
    try {
        await appwriteAccount.updatePassword(newPassword, oldPassword)
        toast.success("Password changed successfully !!");
    } catch (err: any) {
        toast.error(err.response.message)
        return;
    }
}


export {
    addToDo,
    fetchUsersToDo,
    fetchLatestUsersToDo,
    updateName,
    updateEmail,
    updatePassword,
}
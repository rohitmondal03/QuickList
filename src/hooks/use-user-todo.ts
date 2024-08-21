import { UserToDoContext } from "@/provider/user-todo-provider"
import { useContext } from "react"


export const useUserToDo = () => {
    const context = useContext(UserToDoContext);

    if (!context) {
        throw new Error("UserToDoContext is not wrapped")
    }

    return context;
}
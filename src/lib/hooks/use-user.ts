import { UserContext } from "@/components/provides/auth-provider"
import { useContext } from "react"

const useUser = () => {
    if(!UserContext) {
        throw new Error("Enter a provider")
    }

    return useContext(UserContext)
}


export {
    useUser
}